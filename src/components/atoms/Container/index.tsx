import React from "react";

import type { ComponentProps } from "@/types";
import { cn } from "@/utils/common";

export function Container({ children, className }: ComponentProps) {
  return (
    <div
      className={cn("mx-auto w-full px-12 max-w-screen-lg", className)}
    >
      {children}
    </div>
  );
}
