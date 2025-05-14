"use client";

import { useAfterLogin } from "@/hooks/common/afterLogin";
import { ComponentProps } from "@/types";

export function DataSyncWrapper({ children }: ComponentProps) {
  useAfterLogin();

  return <>{children}</>;
}
