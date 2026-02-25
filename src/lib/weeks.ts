import type { CollectionEntry } from "astro:content";

export type WeekEntry = CollectionEntry<"weeks">;

export function sortWeeks(a: WeekEntry, b: WeekEntry): number {
  return a.data.week - b.data.week;
}

export function weekLabel(entry: WeekEntry): string {
  return `Week ${String(entry.data.week).padStart(2, "0")}`;
}

export function weekHref(entry: WeekEntry): string {
  return `/weeks/${entry.id}/`;
}
