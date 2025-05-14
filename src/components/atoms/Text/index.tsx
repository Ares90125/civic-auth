import React from "react";
import type { HTMLAttributes, ElementType } from "react";

import { cva, type VariantProps } from "class-variance-authority";

import type { ComponentProps } from "@/types";
import { cn } from "@/utils/common";

const tags = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  xl: "p",
  lg: "p",
  md: "p",
  sm: "p",
  xs: "p",
};

type TextVariantProps = VariantProps<typeof textVariants>;

const textVariants = cva("", {
  variants: {
    variant: {
      h1: "text-5xl screen-sm:text-4xl font-600",
      h2: "text-4xl screen-sm:text-3xl font-600",
      h3: "text-3xl screen-sm:text-2xl font-600",
      h4: "text-2xl screen-sm:text-lg font-600",
      xl: "text-xl screen-xs:text-lg font-600 screen-xs:font-500",
      lg: "text-lg screen-xs:text-md font-500",
      md: "text-md screen-xs:text-sm font-500",
      sm: "text-sm screen-xs:text-xs font-500",
      xs: "text-xs",
    },
    intent: {
      default: "text-black dark:text-white",
      primary: "text-brand",
      secondary: "text-secondary-foreground",
      warning: "text-warning",
      muted: "text-muted-foreground",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
});

export interface TextProps
  extends ComponentProps,
    HTMLAttributes<HTMLElement>,
    TextVariantProps {
  as?: ElementType;
}

export function Text({
  children,
  as,
  variant = "md",
  intent,
  align,
  className,
  ...props
}: TextProps) {
  if (variant === undefined || variant === null || !tags[variant]) return null;
  const NextText = as || tags[variant];

  return (
    <NextText
      {...props}
      className={cn(textVariants({ variant, intent, align }), className)}
    >
      {children}
    </NextText>
  );
}
