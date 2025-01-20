import { defaultMetaDescription } from "@/data/site/defaultMetaDescription";
import { buildURL } from "@/utils/mapCollection";

import { getEntry } from "astro:content";
import { format } from "date-fns";

export const getHeadOpenGraph = async (params: { collectionSlug?: string, collectionID?: string }) => {
  let post;
  let path;
  if(params?.collectionID) {
    post = await getEntry("projects", params.collectionID);
    path = params.collectionID;
  } else if(params?.collectionSlug) {
    post = await getEntry("blog", params.collectionSlug);
    path = params.collectionSlug;
  }
  const site_url = "https://codafolks.com";
  const title = post?.data?.title ?? defaultMetaDescription.title
  const description = post?.data?.description ?? defaultMetaDescription.description;
  const image = `${site_url}/${path ? `/api/${path}.png` : "/api/og-image.png"}`;
  const author = post?.data?.author ?? defaultMetaDescription.author;
  const date = format(new Date(post?.data?.date ?? new Date()), "yyyy-MM-dd");
  const tags = post?.data?.tags?.join(", ") ?? defaultMetaDescription.tags;
  const url = post ? buildURL(post) : site_url;
  const site_name = "CodaFolks";
  const type = post ? "article" : "website";
  const coverAlt = post?.data?.coverAlt ?? "CodaFolks - Blog";
  const keywords = defaultMetaDescription.keywords;
  
  const section = path ? "blog" : "home";

  return {
    title: path ? `${title} - CodaFolks` : title,
    description,
    image,
    author,
    date,
    tags,
    url,
    site_name,
    type,
    coverAlt,
    keywords,
    section,
    site_url
  };
};