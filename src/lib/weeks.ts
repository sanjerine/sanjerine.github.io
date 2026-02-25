import type { CollectionEntry } from "astro:content";

export type WeekEntry = CollectionEntry<"weeks">;

export const COURSE_START_WEEK = 2;

export function sortWeeks(a: WeekEntry, b: WeekEntry): number {
  const weekDiff = a.data.week - b.data.week;
  if (weekDiff !== 0) return weekDiff;
  const partA = a.data.part ?? "";
  const partB = b.data.part ?? "";
  return partA.localeCompare(partB);
}

export function isWeekInCourseWindow(entry: WeekEntry): boolean {
  return entry.data.week >= COURSE_START_WEEK;
}

export function isStudentVisibleWeek(entry: WeekEntry): boolean {
  return isWeekInCourseWindow(entry) && entry.data.published;
}

export function listStudentVisibleWeeks(entries: WeekEntry[]): WeekEntry[] {
  return entries.filter(isStudentVisibleWeek).sort(sortWeeks);
}

export function weekLabel(entry: WeekEntry): string {
  const num = String(entry.data.week).padStart(2, "0");
  return `Week ${num}${entry.data.part ?? ""}`;
}

export function weekHref(entry: WeekEntry): string {
  return `/weeks/${entry.id}/`;
}
