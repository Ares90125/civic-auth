export const isClient = () => typeof window !== "undefined";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import classNames from "classnames";

export function cn(...inputs: ClassValue[]) {
  return classNames(twMerge(clsx(inputs)));
}
