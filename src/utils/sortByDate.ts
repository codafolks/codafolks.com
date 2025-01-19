import type { CollectionEntry } from "astro:content"

export const sortByDate = <T extends "blog" | "projects">(a: CollectionEntry<T>, b: CollectionEntry<T>) => {
  const dateA = new Date(a.data.date).getTime()
  const dateB = new Date(b.data.date).getTime()
  return dateB - dateA
}