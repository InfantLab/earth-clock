import { defineConfig } from "vite";
import { resolve, join } from "path";
import { createReadStream, statSync, existsSync, readFileSync } from "fs";

// Read app version from package.json so the UI badge always matches the published version.
// Bumped each release; see qa-checklist.md for the QA round each version corresponds to.
const pkg = JSON.parse(readFileSync(resolve(__dirname, "package.json"), "utf-8")) as { version: string };
const APP_VERSION = pkg.version;

// Serve the classic project's /public/data tree at /data during dev so we can fetch the same
// GFS weather files the legacy earth.js uses, without copying them or running the legacy server.
const classicDataDir = resolve(__dirname, "../public/data");

// Root of the production static tree — mirrors what CapRover serves as docroot.
// Used by the serve-public-subdirs plugin below to make /about/, /screenshots/, etc. work in dev.
const publicStaticDir = resolve(__dirname, "../public");

// Build output goes into ../public/frontend/ by default — useful for testing the sub-path
// build without overwriting the live site. The cutover already happened in v0.1.0 so
// BUILD_AS_ROOT=1 is what production uses; that targets ../public directly. See
// docs/cutover.md for the historical procedure.
const BUILD_AS_ROOT = process.env.BUILD_AS_ROOT === "1";
const outDir = BUILD_AS_ROOT
  ? resolve(__dirname, "../public")
  : resolve(__dirname, "../public/frontend");

export default defineConfig({
  base: "./",
  define: {
    __APP_VERSION__: JSON.stringify(APP_VERSION),
  },
  build: {
    outDir,
    // emptyOutDir is dangerous when building to ../public (would wipe everything including
    // the classic site we just relocated). Only safe in the /frontend subdirectory mode.
    emptyOutDir: !BUILD_AS_ROOT,
    target: "es2022",
    sourcemap: true,
  },
  server: {
    port: 5173,
    strictPort: false,
    fs: { allow: [resolve(__dirname, ".."), resolve(__dirname)] },
    // Dev-side CORS proxies for upstream APIs that don't ship Access-Control-Allow-Origin.
    // Production deployment needs an equivalent edge proxy (Cloudflare Worker, Caddy reverse
    // proxy, etc.) — see PLAN.md "Production proxy" notes. For now this only helps `npm run dev`.
    proxy: {
      "/proxy/nhc": {
        target: "https://www.nhc.noaa.gov",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/proxy\/nhc/, ""),
      },
      // Reverse-geocoder proxy. Same URL contract in dev + prod (the production
      // NGINX block at /proxy/geocode/ has the matching rule — see DEPLOYMENT.md §5b).
      // Dev + prod target LocationIQ (Nominatim-compatible API, 5k req/day free tier).
      // Use format=json — LocationIQ does not support Nominatim's jsonv2 extension.
      "/proxy/geocode": {
        target: "https://us1.locationiq.com",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => {
          // /proxy/geocode/reverse?lat=X&lon=Y → /v1/reverse?lat=X&lon=Y&key=pk.XXX
          const stripped = path.replace(/^\/proxy\/geocode/, "/v1");
          const sep = stripped.includes("?") ? "&" : "?";
          return `${stripped}${sep}key=pk.4fe14b2bb708d093c52fa1f37206ead4`;
        },
      },
    },
  },
  plugins: [
    {
      name: "serve-classic-data",
      configureServer(server) {
        server.middlewares.use("/data", (req, res, next) => {
          const url = (req.url || "").split("?")[0];
          if (!url) return next();
          const filePath = join(classicDataDir, url);
          // Reject paths that escape the data dir
          if (!filePath.startsWith(classicDataDir)) return next();
          if (existsSync(filePath) && statSync(filePath).isFile()) {
            res.setHeader("Content-Type", url.endsWith(".json") ? "application/json" : "application/octet-stream");
            res.setHeader("Cache-Control", "no-cache");
            createReadStream(filePath).pipe(res);
          } else {
            next();
          }
        });
      },
    },
    {
      // Serve /about/, /screenshots/, /textures/, /classic/ from ../public/ in dev,
      // mirroring the production server which treats ../public/ as its docroot.
      name: "serve-public-subdirs",
      configureServer(server) {
        const PREFIXES = ["/about", "/screenshots", "/textures", "/classic"];
        const MIME: Record<string, string> = {
          html: "text/html; charset=utf-8", css: "text/css",
          js: "application/javascript",    json: "application/json",
          png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg",
          svg: "image/svg+xml", woff2: "font/woff2", webp: "image/webp",
        };
        server.middlewares.use((req, res, next) => {
          const rawUrl = (req.url ?? "").split("?")[0];
          if (!PREFIXES.some(p => rawUrl === p || rawUrl.startsWith(p + "/"))) return next();
          // URL-decode before joining to the filesystem — nginx/caddy do this automatically
          // in production, but the Node middleware receives the raw encoded path.
          let url: string;
          try { url = decodeURIComponent(rawUrl); } catch { url = rawUrl; }
          const candidates = [
            join(publicStaticDir, url),
            join(publicStaticDir, url.replace(/\/?$/, "/index.html")),
          ];
          for (const fp of candidates) {
            if (!fp.startsWith(publicStaticDir)) continue;
            try {
              if (statSync(fp).isFile()) {
                const ext = (fp.split(".").pop() ?? "").toLowerCase();
                res.setHeader("Content-Type", MIME[ext] ?? "application/octet-stream");
                res.setHeader("Cache-Control", "no-cache");
                createReadStream(fp).pipe(res);
                return;
              }
            } catch { /* not found */ }
          }
          next();
        });
      },
    },
  ],
});
