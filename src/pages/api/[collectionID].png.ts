import { generateOGImage } from "@/utils/generateOGImage";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async ({ params }) => {
  const collectionID = params.collectionID as string;
  const collections = await getCollection("projects");
  const collection = collections.find(entry => entry.id === collectionID);
  if (!collection) {
    return new Response("Not found", { status: 404 });
  }
  const png = await generateOGImage({ collection });
  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
    },
  });
};

export const getStaticPaths = async () => {
  const collections = await getCollection("projects");
  return collections.map((collection) => ({
    params: { collectionID: collection.id },
  }));
}