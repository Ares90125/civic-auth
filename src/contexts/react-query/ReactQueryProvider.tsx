"use client";

import dynamic from "next/dynamic";
import React from "react";

const DynamicReactQueryProvider = dynamic(
  () => import("./ReactQueryProviderCore"),
  { ssr: false },
);

export default function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DynamicReactQueryProvider>{children}</DynamicReactQueryProvider>;
}
