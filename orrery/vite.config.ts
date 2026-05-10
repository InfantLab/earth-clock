import { defineConfig } from "vite";
import { resolve } from "path";

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
  },
});
