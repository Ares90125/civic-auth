"use client";

import React from "react";

import { Container } from "@/components/atoms";
import { CopyRight } from "./CopyRight";
export function Footer() {
  return (
    <footer className="mt-20">
      <Container>
        <CopyRight />
      </Container>
    </footer>
  );
}
