import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

export const compressImage = async ({ file, data }: any) => {
  if (!file?.path || !file?.filename || !file?.mimetype?.startsWith('image/')) {
    return data; // Skip if not an image
  }

  const originalPath = file.path;
  const outputPath = path.join(file.dirname, `compressed-${file.filename}`);

  // Compress and resize image using sharp
  await sharp(originalPath)
    .resize({ width: 1280 }) // Optional: adjust width
    .jpeg({ quality: 75 }) // You can also use .webp() or .png()
    .toFile(outputPath);

  // Replace the original file with the compressed one
  await fs.rename(outputPath, originalPath);

  return data;
};
