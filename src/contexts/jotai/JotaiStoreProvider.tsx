"use client";

import { useState } from "react";

import { createStore, Provider } from "jotai";

import type { ComponentProps } from "@/types";

export function JotaiStoreProvider({ children }: ComponentProps) {
  const [store] = useState(() => createStore());

  return <Provider store={store}>{children}</Provider>;
}

export default JotaiStoreProvider;
