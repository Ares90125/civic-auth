import { useCallback, useEffect } from "react";

import { userHasWallet } from "@civic/auth-web3";
import { useUser } from "@civic/auth-web3/react";

export const useAfterLogin = () => {
  const userContext = useUser();

  const maybeCreateWallet = useCallback(async () => {
    if (userContext.user && !userHasWallet(userContext)) {
      await userContext.createWallet();
    }
    if (userHasWallet(userContext)) {
    }
  }, [userContext]);

  useEffect(() => {
    maybeCreateWallet();
  }, [maybeCreateWallet]);
};
