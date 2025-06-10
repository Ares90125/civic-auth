"use client";

import { Container, Text } from "@/components/atoms";
import { cn } from "@/lib/utils";
import { GlobalState } from "@/store";
import { ComponentProps } from "@/types";
import { truncateAddress } from "@/utils/functions";
import { useAtomValue } from "jotai";

export default function WalletAddress({ className }: ComponentProps) {
  const address = useAtomValue(GlobalState.addressAtom);
  return (
    <>
      {address && (
        <Container className={cn("flex items-center gap-2", className)}>
          <Text>Wallet Address:&nbsp;</Text>
          <Text intent="secondary" className="text-right">
            {truncateAddress(address.toBase58())}
          </Text>
        </Container>
      )}
    </>
  );
}
