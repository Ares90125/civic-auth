"use client";

import React from "react";
import { UserButton } from "@civic/auth-web3/react";

import { Container } from "@/components/atoms/Container";
import { Link } from "@/components/atoms/Link";
import { Logo } from "@/components/atoms/Logo";
import WalletAddress from "../organisms/WalletAddress";

export function Header() {
  return (
    <header className="w-full bg-background sticky top-0 z-10 border-b shadow">
      <Container className="flex items-center justify-between py-3">
        <Link path="https://docs.civic.com">
          <Logo />
        </Link>
        <WalletAddress className="flex-1 justify-end" />
        <UserButton
          className="!rounded-sm !px-3 !py-2 !text-background hover:!bg-foreground/90 bg-foreground"
          dropdownButtonClassName="border bg-foreground !text-background"
        />
      </Container>
    </header>
  );
}
