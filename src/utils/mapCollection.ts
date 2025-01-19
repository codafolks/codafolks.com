
import type { CollectionEntry } from "astro:content";

type TData<T extends "blog" | "projects"> = CollectionEntry<T>["data"] & {
  url: string;
}

type Collection<T extends "blog" | "projects"> = CollectionEntry<T> & {
  data: TData<T>
}

const baseDomain = import.meta.env.MODE === "development" ? "http://localhost:4321" : "https://codafolks.io";
export const buildURL = <T extends "blog" | "projects">(collection: CollectionEntry<T>) => {
  const url = collection.collection === "blog" ? `${baseDomain}/blog/posts/${collection.id}` : `${baseDomain}/projects/${collection.id}`;
  return url
}

export const mapCollection = <T extends "blog" | "projects">(collection: CollectionEntry<T>): Collection<T> => {
  const data = { ...collection.data, url: buildURL(collection) };
  return {
    ...collection,
    data,
  }
}