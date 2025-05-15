"use client";

import { useAfterLogin } from "@/hooks/common/useAfterLogin";
import { useUpdateBalances } from "@/hooks/common/useUpdateBalances";
import { ComponentProps } from "@/types";

export function DataSyncWrapper({ children }: ComponentProps) {
  useAfterLogin();
  useUpdateBalances();

  return <>{children}</>;
}
