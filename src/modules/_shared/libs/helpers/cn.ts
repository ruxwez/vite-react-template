import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Function to combine class names
// This function merges Tailwind CSS classes and removes duplicates
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
