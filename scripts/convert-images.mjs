// scripts/convert-images.mjs
// Converts PNG/JPEG images from public/imgs and src/assets/images
// to optimized WebP and AVIF in public/imgs, with basic resizing.
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

// eslint-disable-next-line no-undef
const root = process.cwd()
const publicImgs = path.join(root, 'public', 'imgs')
const assetsImgs = path.join(root, 'src', 'assets', 'images')

/**
 * Ensure destination dir exists
 */
fs.mkdirSync(publicImgs, { recursive: true })

/**
 * Collect candidate source images (png/jpg/jpeg) from both folders
 */
function listImages(dir) {
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((f) => /\.(png|jpe?g)$/i.test(f))
    .map((f) => path.join(dir, f))
}

const sources = [...listImages(publicImgs), ...listImages(assetsImgs)]

if (sources.length === 0) {
  console.log('No PNG/JPEG images found to convert.')
  // eslint-disable-next-line no-undef
  process.exit(0)
}

/**
 * Determine resize width rule by filename
 */
function targetWidthFor(name) {
  const base = path.basename(name).toLowerCase()
  if (base.includes('hero')) return 1920
  if (base.includes('logo')) return 640
  if (base.includes('logotipo')) return 640
  // product or other images
  return 1200
}

/**
 * Copy PNG/JPEG from src/assets/images into public/imgs if not present
 */
for (const src of sources) {
  const base = path.basename(src)
  const dest = path.join(publicImgs, base)
  if (!fs.existsSync(dest)) {
    fs.copyFileSync(src, dest)
    console.log('Copied to public/imgs:', base)
  }
}

/**
 * Convert each base image in public/imgs to WebP and AVIF.
 */
async function convertOne(srcPath) {
  const base = path.basename(srcPath)
  const name = base.replace(/\.[^.]+$/, '')
  const width = targetWidthFor(base)
  const input = sharp(srcPath, { failOn: 'none' }).rotate()

  // Prepare resized pipeline
  const resized = input.resize({ width, withoutEnlargement: true })

  const webpOut = path.join(publicImgs, `${name}.webp`)
  const avifOut = path.join(publicImgs, `${name}.avif`)

  // Write WebP
  await resized.clone().webp({ quality: 82, effort: 4 }).toFile(webpOut)
  console.log('Wrote', path.relative(root, webpOut))

  // Write AVIF
  await resized.clone().avif({ quality: 55, effort: 4 }).toFile(avifOut)
  console.log('Wrote', path.relative(root, avifOut))
}

async function main() {
  const bases = fs
    .readdirSync(publicImgs)
    .filter((f) => /\.(png|jpe?g)$/i.test(f))
    .map((f) => path.join(publicImgs, f))

  for (const p of bases) {
    try {
      await convertOne(p)
    } catch (err) {
      console.warn('Failed converting', p, err?.message || err)
    }
  }
}

main().catch((e) => {
  console.error(e)
  // eslint-disable-next-line no-undef
  process.exit(1)
})
