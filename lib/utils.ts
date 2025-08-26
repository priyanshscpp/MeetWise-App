import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
// Adding some utils comments...

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
