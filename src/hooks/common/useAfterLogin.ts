import { useCallback, useEffect } from "react";

import { userHasWallet } from "@civic/auth-web3";
import { useUser } from "@civic/auth-web3/react";
import { useAtom } from "jotai";
import { GlobalState } from "@/store";

export const useAfterLogin = () => {
  const userContext = useUser();
  const [address, setAddress] = useAtom(GlobalState.addressAtom);

  const createWallet = useCallback(async () => {
    if (userContext.user && !userHasWallet(userContext)) {
      await userContext.createWallet();
    }
    if (userHasWallet(userContext)) {
      if (
        userContext.solana.wallet.publicKey &&
        (!address ||
          (address && !userContext.solana.wallet.publicKey.equals(address)))
      ) {
        setAddress(userContext.solana.wallet.publicKey);
      }
    }
  }, [address, setAddress, userContext]);

  useEffect(() => {
    createWallet();
  }, [createWallet]);
};
