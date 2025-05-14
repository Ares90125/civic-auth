"use client";

import React from "react";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";

import type { ComponentProps } from "@/types";
import { cn } from "@/utils/common";

export interface LinkProps extends ComponentProps, Omit<NextLinkProps, "href"> {
  path: string;
}

export function Link({ children, path, className, ...props }: LinkProps) {
  return (
    <NextLink
      href={path}
      prefetch
      {...props}
      className={cn("w-fit", className)}
    >
      {children}
    </NextLink>
  );
}
