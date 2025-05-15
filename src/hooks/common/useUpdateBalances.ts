import { useEffect, useMemo } from "react";

import { useAtom, useAtomValue } from "jotai";
import { useQuery } from "@tanstack/react-query";
import { Connection, PublicKey } from "@solana/web3.js";

import { GlobalState } from "@/store";
import { HELIUS_RPC_URL } from "@/utils/constants";
import { getAssetBatch, getTokenBalances } from "@/utils/functions";

const updateBalance = async (connection: Connection, publicKey: PublicKey) => {
  console.log(connection);
  const balances = getTokenBalances(connection, publicKey);
  return balances;
};

export const useUpdateBalances = () => {
  const address = useAtomValue(GlobalState.addressAtom);
  const [connection, setConnection] = useAtom(GlobalState.connectionAtom);

  const queryKey = useMemo(
    () => ["updateBalance", address, connection?.rpcEndpoint],
    [address, connection?.rpcEndpoint]
  );

  const { data, error, isLoading } = useQuery({
    queryKey,
    queryFn: () => updateBalance(connection!, address!),
    enabled: Boolean(connection) && Boolean(address),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (!connection) {
      const connection = new Connection(HELIUS_RPC_URL);
      setConnection(connection);
    }
  }, [connection, setConnection]);

  useEffect(() => {
    (async () => {
      if (error || isLoading) return;
      if (data && connection) {
        const addresses = data
          .map((token) => token.address)
          .flat()
          .map((address) => address.toBase58());
        const result = await getAssetBatch(connection, addresses);
        console.log(result);
      }
    })();
  }, [data, error, isLoading, connection]);

  return null;
};
