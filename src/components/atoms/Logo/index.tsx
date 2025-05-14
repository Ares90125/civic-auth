import React from "react";

import type { ComponentProps } from "@/types";
import { cn } from "@/utils/common";
import { CivicLogo } from "@/utils/images";
import NextImage, { ImageProps } from "next/image";

export interface LogoProps
  extends ComponentProps,
    Pick<ImageProps, "width" | "height"> {}

export function Logo({ width = 140, height = 45, className }: LogoProps) {
  return (
    <div className={`w-[${width}px] h-[${height}px] cursor-pointer`}>
      <NextImage
        src={CivicLogo}
        alt="stabble logo"
        width={width}
        height={height}
        priority
        quality={90}
        className={cn("w-[140px] h-[45px] cursor-pointer", className)}
      />
    </div>
  );
}
