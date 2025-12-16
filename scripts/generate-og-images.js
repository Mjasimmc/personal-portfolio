const fs = require('fs')
const path = require('path')
const https = require('https')
const { execSync } = require('child_process')

// This script downloads the canonical og image and generates webp + avif
// Requires `sharp` to be installed: `pnpm add -D sharp node-fetch@2` or `npm i -D sharp node-fetch@2`

const SOURCE_URL = 'https://jasim-sct.vercel.app/og-image.png'
const OUT_DIR = path.join(process.cwd(), 'public')

async function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest)
    https
      .get(url, (res) => {
        if (res.statusCode !== 200) return reject(new Error('Failed to download'))
        res.pipe(file)
        file.on('finish', () => file.close(resolve))
      })
      .on('error', (err) => {
        fs.unlink(dest, () => {})
        reject(err)
      })
  })
}

async function run() {
  try {
    if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true })
    const srcPath = path.join(OUT_DIR, 'og-image.png')
    console.log('Downloading', SOURCE_URL)
    await download(SOURCE_URL, srcPath)
    console.log('Downloaded to', srcPath)

    // Use sharp if available to convert
    try {
      const sharp = require('sharp')
      const img = sharp(srcPath)
      await img.resize(1200, 630, { fit: 'cover' }).toFile(path.join(OUT_DIR, 'og-image-1200x630.webp'))
      await img.resize(1200, 1200, { fit: 'cover' }).toFile(path.join(OUT_DIR, 'og-image-1200x1200.webp'))
      await img.resize(1200, 630, { fit: 'cover' }).avif({ quality: 60 }).toFile(path.join(OUT_DIR, 'og-image-1200x630.avif'))
      console.log('Generated webp/avif variants in', OUT_DIR)
    } catch (e) {
      console.warn('sharp not installed — install sharp to generate AVIF/WebP automatically')
      console.warn('Run: pnpm add -D sharp')
    }
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

run()
