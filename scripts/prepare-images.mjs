/**
 * Resize + compress source photography into public/images/.
 *
 * Usage: put full-resolution originals in image-src/ (gitignored), named
 * per the slots in docs/IMAGE-MANIFEST.md, then run:
 *   node scripts/prepare-images.mjs
 *
 * Outputs {name}-2000.webp and {name}-1200.webp, tuned to stay well under
 * ~300KB so pages load fast on rural 4G. Rerun any time a photo is swapped.
 */
import sharp from "sharp";
import { readdirSync, mkdirSync } from "node:fs";
import path from "node:path";

const SRC = "image-src";
const OUT = "public/images";
mkdirSync(OUT, { recursive: true });

const files = readdirSync(SRC).filter((f) => /\.(jpe?g|png|webp)$/i.test(f));
if (files.length === 0) {
  console.log(`No source images found in ${SRC}/`);
  process.exit(0);
}

for (const file of files) {
  const name = path.parse(file).name;
  for (const width of [2000, 1200]) {
    const out = path.join(OUT, `${name}-${width}.webp`);
    const budget = width === 2000 ? 300 * 1024 : 150 * 1024;
    let info;
    for (const quality of [68, 55, 45, 35]) {
      info = await sharp(path.join(SRC, file))
        .rotate() // respect EXIF orientation
        .resize({ width, withoutEnlargement: true })
        .webp({ quality })
        .toFile(out);
      if (info.size <= budget) break;
    }
    console.log(`${out}  ${(info.size / 1024).toFixed(0)}KB  ${info.width}x${info.height}`);
  }
}
