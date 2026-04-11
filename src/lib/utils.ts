import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

function coerceDate(value: Date | string): Date {
  return value instanceof Date ? value : new Date(value);
}

function formatMonthYear(value: Date | string): string {
  const date = coerceDate(value);
  return Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  }).format(date);
}

export function dateRange(
  startDate: Date | string,
  endDate?: Date | string,
): string {
  const start = formatMonthYear(startDate);

  if (!endDate) {
    return `${start} - present`;
  }

  return `${start} - ${formatMonthYear(endDate)}`;
}
