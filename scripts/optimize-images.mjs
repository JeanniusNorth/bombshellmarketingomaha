#!/usr/bin/env node
/**
 * Optimize images in client/src/assets in place.
 *  - Max width 2400px (downscales huge originals)
 *  - JPG: quality 80, mozjpeg
 *  - PNG: keeps alpha, palette quantization, effort 8
 *  - Skips files smaller than threshold or already optimized
 *
 * Usage:  node scripts/optimize-images.mjs
 *         node scripts/optimize-images.mjs --dry
 */

import sharp from "sharp";
import { readdir, stat, rename, unlink } from "fs/promises";
import path from "path";

const ROOTS = ["client/src/assets"];
const MAX_WIDTH = 2400;
const SKIP_SMALLER_THAN = 200 * 1024; // skip < 200 KB
const DRY = process.argv.includes("--dry");

let totalBefore = 0;
let totalAfter = 0;
let touched = 0;
let skipped = 0;

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(p)));
    else if (/\.(jpe?g|png)$/i.test(entry.name)) out.push(p);
  }
  return out;
}

async function optimize(file) {
  const before = (await stat(file)).size;
  if (before < SKIP_SMALLER_THAN) {
    skipped++;
    return;
  }

  const isPng = /\.png$/i.test(file);
  const tmp = file + ".opt";

  let pipeline = sharp(file, { failOn: "none" }).rotate();
  const meta = await pipeline.metadata();
  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  if (isPng) {
    pipeline = pipeline.png({ compressionLevel: 9, palette: true, effort: 8 });
  } else {
    pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true });
  }

  await pipeline.toFile(tmp);
  const after = (await stat(tmp)).size;

  // Only keep optimized version if at least 5% smaller
  if (after < before * 0.95) {
    if (DRY) {
      await unlink(tmp);
    } else {
      await unlink(file);
      await rename(tmp, file);
    }
    totalBefore += before;
    totalAfter += after;
    touched++;
    const pct = (((before - after) / before) * 100).toFixed(0);
    console.log(
      `  ${pct.padStart(3)}%  ${(before / 1024).toFixed(0).padStart(6)} KB → ${(after / 1024).toFixed(0).padStart(6)} KB  ${file}`,
    );
  } else {
    await unlink(tmp);
    skipped++;
  }
}

async function run() {
  console.log(`Optimizing images${DRY ? " (DRY RUN)" : ""}…\n`);
  const files = [];
  for (const root of ROOTS) files.push(...(await walk(root)));
  console.log(`Scanning ${files.length} images in ${ROOTS.join(", ")}\n`);

  for (const f of files) {
    try {
      await optimize(f);
    } catch (e) {
      console.error(`  !  ${f}: ${e.message}`);
    }
  }

  const saved = totalBefore - totalAfter;
  console.log(
    `\nDone. Optimized ${touched}, skipped ${skipped}.` +
      ` Saved ${(saved / 1024 / 1024).toFixed(1)} MB ` +
      `(${totalBefore ? ((saved / totalBefore) * 100).toFixed(0) : 0}% reduction).`,
  );
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
