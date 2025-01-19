import { generateOGImage } from "@/utils/generateOGImage";
import type { APIRoute } from "astro";
import { getCollection, getEntry } from "astro:content";

export const GET: APIRoute = async ({ params }) => {
  let collection
  if(params.collectionID) {
    collection = await getEntry("projects", params.collectionID);
  } else if(params.collectionSlug) {
    collection = await getEntry("blog", params.collectionSlug);
  }
  
  if(!collection) {
    return new Response("Not found", {
      status: 404,
    });
  }
  
  const png = await generateOGImage({ collection });
  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
    },
  });
};

export const getStaticPaths = async () => {
  const posts = await getCollection("blog");
  const projects = await getCollection("projects");
  return [...posts, ...projects].map((post) => {
    if(post.collection === "blog") {
      return {
        params: { collectionSlug: post.id },
      }
    }
    return {
      params: { collectionID: post.id },
    }
  });
}