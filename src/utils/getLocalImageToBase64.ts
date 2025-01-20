import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

export const getLocalImageToBase64 = async (pathImage: string) => {
  const imageBuffer = await fs.readFile(pathImage);
  let ext = path.extname(pathImage).slice(1);
  if (ext === "jpg") {
    ext = "jpeg";
  }
  if (ext === "webp") {
    // transform the image to png

    const pngImage = await sharp(imageBuffer).png().toBuffer();
    const finalImage = Buffer.from(pngImage).toString('base64');
    return `data:image/png;base64,${finalImage}`;
  }

  if (ext === "svg") {
    return `data:image/svg+xml;base64,${Buffer.from(imageBuffer).toString('base64')}`;
  }

  // transform the image to size 250x250
  // const resizedImage = await sharp(imageBuffer).resize(250, 250).toBuffer();

  // transform the image to base64
  const finalImage = Buffer.from(imageBuffer).toString('base64');
  return `data:image/${ext};base64,${finalImage}`;
}