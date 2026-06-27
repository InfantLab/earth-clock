#!/usr/bin/env node
/**
 * release.mjs — one-command production release for earth-clock
 *
 * Usage:  node release.mjs
 *         node release.mjs --push     (also runs git push)
 *
 * What it does:
 *   1. Finds the currently-tracked bundle hash in public/assets/
 *   2. Runs `BUILD_AS_ROOT=1 npm run build` in frontend/
 *   3. Finds the new bundle hash
 *   4. git rm old bundle, git add new bundle + public/index.html
 *   5. git commit with an auto-generated message
 *   6. git push (if --push flag given)
 */

import { execSync }                    from "child_process";
import { readdirSync, existsSync }     from "fs";
import { join, dirname }               from "path";
import { fileURLToPath }               from "url";

const ROOT  = dirname(fileURLToPath(import.meta.url));
const ASSETS = join(ROOT, "public", "assets");
const PUSH  = process.argv.includes("--push");

function run(cmd, opts = {}) {
  console.log(`\n> ${cmd}`);
  return execSync(cmd, { stdio: "inherit", cwd: ROOT, ...opts });
}

function bundleFiles() {
  if (!existsSync(ASSETS)) return [];
  return readdirSync(ASSETS).filter(f => /^index-[A-Za-z0-9]+\.js(\.map)?$/.test(f));
}

// ---- 1. Record old bundle ----
const oldFiles = bundleFiles();
console.log("Old bundle:", oldFiles.length ? oldFiles.join(", ") : "(none tracked)");

// ---- 2. Build ----
run("npm run build", { cwd: join(ROOT, "frontend"), env: { ...process.env, BUILD_AS_ROOT: "1" } });

// ---- 3. Find new bundle ----
const newFiles = bundleFiles();
const added    = newFiles.filter(f => !oldFiles.includes(f));
const removed  = oldFiles.filter(f => !newFiles.includes(f));

if (!added.length) {
  console.error("\nBuild produced no new bundle files — aborting.");
  process.exit(1);
}
console.log("\nNew bundle:", added.join(", "));

// ---- 4. Stage changes ----
if (removed.length) {
  run(`git rm ${removed.map(f => `public/assets/${f}`).join(" ")}`);
}
run(`git add public/index.html ${added.map(f => `public/assets/${f}`).join(" ")}`);

// ---- 5. Read version from frontend/package.json ----
const { version } = JSON.parse(
  (await import("fs")).readFileSync(join(ROOT, "frontend", "package.json"), "utf8")
);

// ---- 6. Commit ----
const msg = `build: v${version} production bundle\n\nSwaps ${removed[0] ?? "(none)"} → ${added[0]}.`;
execSync(`git commit -m ${JSON.stringify(msg)}`, { stdio: "inherit", cwd: ROOT });

// ---- 7. Push (optional) ----
if (PUSH) run("git push");

console.log(`\n✓ v${version} bundle committed${PUSH ? " and pushed" : " — run git push when ready"}.`);
