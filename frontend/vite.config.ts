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
      // NGINX block at /proxy/geocode/ has the matching rule — see DEPLOYMENT.md
      // §5c). Both dev + prod target LocationIQ, which has a Nominatim-compatible
      // API surface, dedicated infra (no public-service 503s), and a 5k-req/day
      // free tier. `pk.`-prefix keys are intended to be visible — see DEPLOYMENT.md
      // for the rationale.
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
  ],
});
