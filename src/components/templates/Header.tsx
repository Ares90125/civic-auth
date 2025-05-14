"use client";

import React from "react";
import { UserButton } from "@civic/auth-web3/react";

import { Container } from "@/components/atoms/Container";
import { Link } from "@/components/atoms/Link";
import { Logo } from "@/components/atoms/Logo";

export function Header() {
  return (
    <header className="w-full bg-background sticky top-0 z-10 border-b shadow">
      <Container className="flex items-center justify-between py-3">
        <Link path="https://docs.civic.com">
          <Logo />
        </Link>
        <UserButton
          className="!rounded-sm !px-3 !py-2"
          dropdownButtonClassName="border"
        />
      </Container>
    </header>
  );
}
