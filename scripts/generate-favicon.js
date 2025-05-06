const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicons() {
  const sourceLogo = path.join(__dirname, '../public/images/clickmorph-logo.png');
  const publicDir = path.join(__dirname, '../public');

  // Generate favicon.ico (16x16)
  await sharp(sourceLogo)
    .resize(16, 16)
    .toFile(path.join(publicDir, 'favicon.ico'));

  // Generate icon.png (32x32)
  await sharp(sourceLogo)
    .resize(32, 32)
    .toFile(path.join(publicDir, 'icon.png'));

  console.log('Favicon files generated successfully!');
}

generateFavicons().catch(console.error); 