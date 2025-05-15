"use client";

import { Button, Container } from "@/components/atoms";
import { GlobalState } from "@/store";
import { userHasWallet } from "@civic/auth-web3";
import { useUser } from "@civic/auth-web3/react";
import {
  Connection,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import { useAtomValue } from "jotai";

export default function HomeIndex() {
  const userContext = useUser();
  const address = useAtomValue(GlobalState.addressAtom);
  const connection = useAtomValue(GlobalState.connectionAtom);

  const transforSol = async () => {
    if (userHasWallet(userContext) && connection && address) {
      console.log(address);
      const { sendTransaction } = userContext!.solana.wallet;
      console.log(sendTransaction);
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: new PublicKey(
            "37qckfT2UHo7TA5j5HXo8a4f8Ctqz3QHNEuQKYtqy16j"
          ),
          toPubkey: address!,
          lamports: 1000000,
        })
      );
      const signature = await sendTransaction(transaction, connection!);
      console.log(signature);
    }
  };
  return (
    <Container className="flex flex-col gap-16 px-4">
      <Button onClick={transforSol}>Transfer</Button>
    </Container>
  );
}
