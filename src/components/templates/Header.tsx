"use client";

import React from "react";
import { UserButton } from "@civic/auth-web3/react";

import { Container } from "@/components/atoms/Container";
import { Link } from "@/components/atoms/Link";
import { Logo } from "@/components/atoms/Logo";
import { useAtomValue } from "jotai";
import { GlobalState } from "@/store";
import { truncateAddress } from "@/utils/functions";
import { Text } from "../atoms";

export function Header() {
  const address = useAtomValue(GlobalState.addressAtom);
  return (
    <header className="w-full bg-background sticky top-0 z-10 border-b shadow">
      <Container className="flex items-center justify-between py-3">
        <Link path="https://docs.civic.com">
          <Logo />
        </Link>
        {address && (
          <Text intent="secondary" className="flex-1 text-right">
            {truncateAddress(address.toBase58())}
          </Text>
        )}
        <UserButton
          className="!rounded-sm !px-3 !py-2 !text-background hover:!bg-foreground/90 bg-foreground"
          dropdownButtonClassName="border bg-foreground !text-background"
        />
      </Container>
    </header>
  );
}
