import { defineConfig } from "vite";
import { resolve, join } from "path";
import { createReadStream, statSync, existsSync } from "fs";

// Serve the classic project's /public/data tree at /data during dev so we can fetch the same
// GFS weather files the legacy earth.js uses, without copying them or running the legacy server.
const classicDataDir = resolve(__dirname, "../public/data");

// Build output goes into ../public/orrery/ so it's served at /orrery/ alongside the classic app.
// When orrery becomes the default, change `outDir` to "../public" and move classic to /classic/.
export default defineConfig({
  base: "./",
  build: {
    outDir: resolve(__dirname, "../public/orrery"),
    emptyOutDir: true,
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
