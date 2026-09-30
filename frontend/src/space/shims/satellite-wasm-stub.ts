/**
 * Build-time stand-in for satellite.js's optional WebAssembly runtimes (#wasm-single-thread,
 * #wasm-multi-thread), aliased in vite.config.ts. They're only reached through the bulk
 * propagation API, which we don't use; bundling them costs ~400 kB of chunks and the
 * pthreads build breaks Vite's worker bundling. Remove the alias if we ever want bulk
 * SGP4 for large constellations (satellites-plan.md §5).
 */
export default function createWasmModule(): never {
  throw new Error("satellite.js WASM runtime is not bundled in earth-clock");
}
