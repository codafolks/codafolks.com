
import { defaultMetaDescription } from "@/data/site/defaultMetaDescription";
import type { CollectionEntry } from "astro:content";
import fs from "fs/promises";
import path from 'path';
import satori from "satori";
import { html } from "satori-html";
import sharp from "sharp";

const getLocalImageToBase64 = async (pathImage: string) => {
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
  // transform the image to size 250x250
  // const resizedImage = await sharp(imageBuffer).resize(250, 250).toBuffer();

  // transform the image to base64
  const finalImage = Buffer.from(imageBuffer).toString('base64');
  return `data:image/${ext};base64,${finalImage}`;
}

export const generateOGImage = async (params?: { collection: CollectionEntry<"blog"> | CollectionEntry<"projects"> | undefined }) => {
  const collection = params?.collection;
  const interExtraBold = await fs.readFile(
    "./public/fonts/Inter/static/Inter_28pt-ExtraBold.ttf"
  );

  const interRegular = await fs.readFile(
    "./public/fonts/Inter/static/Inter_28pt-Regular.ttf"
  );

  const isPost = collection !== undefined;

  const title = collection?.data?.title || "Codafolks"
  const description = collection?.data?.description || defaultMetaDescription.summary
  const pathImage = collection?.data?.cover
    ? `./src/data/assets/images/${collection?.data?.cover}`
    : "./src/data/assets/images/Astronaut-Headshot-Closeup.jpeg";


  const image = await getLocalImageToBase64(pathImage);
  const logo = await getLocalImageToBase64("./public/logo.png");
  

  const template = html`
  <div style="
    display: flex; 
    height: 630px; 
    width: 1200px; 
    color: white;
    font-family: InterRegular;
    ${isPost && (
      `
        background-image: url(${image});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        position: relative;
        overflow: hidden;
      `
    )}
    ${!isPost && (`background-color: #000;`)}
  ">
    <div style="display: flex; padding: 40px; width: 1210px; height: 630px; box-sizing: border-box;
      justify-content: center;
      align-items: center;
      gap: 30px;
      background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.9) 0%,  rgba(0, 0, 0, 0.7) 100%,  rgba(0, 0, 0, 0.5) 100%);
    ">
      <div style="display: flex; flex-direction: column; justify-content: center; flex: 1; margin: auto 0;">
        <h1 style="
          font-size: 48px;
          margin: 0px; font-family: InterExtraBold; text-transform: uppercase;">
          ${title}
        </h1>
        <p style="font-size: 24px; margin: 0px font-family: InterRegular;">
          ${description}
        </p>
      </div>
    </div>
    <img src="${logo}" style="position: absolute; bottom: 20px; right: 20px; width: 100px; height: 100px; border-radius: 50%;"/>
  </div>`

  const svg = await satori(
    template as unknown as string,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "InterExtraBold",
          data: interExtraBold,
        },
        {
          name: "InterRegular",
          data: interRegular,
        }
      ],
    }
  );
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return png;
}