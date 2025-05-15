import {
  Connection,
  PublicKey,
  TokenAccountBalancePair,
} from "@solana/web3.js";
import { NATIVE_MINT } from "@solana/spl-token";
import { EXPLORER_TYPE } from "./enums";
import { DAS_SEARCH_ASSETS_LIMIT } from "./constants";
import { RpcResponse, SearchAssetsResponse } from "../types";

export const formattedYear = (): string => {
  return new Date().toLocaleDateString("en", { year: "numeric" });
};

export const getPreferredExplorer = (explorerType: EXPLORER_TYPE) => {
  let link: string;

  switch (explorerType) {
    case EXPLORER_TYPE.SOLSCAN:
      link = `https://solscan.io`;
      break;
    case EXPLORER_TYPE.SOLANA_FM:
      link = `https://solana.fm`;
      break;
    case EXPLORER_TYPE.BIRDEYE:
      link = "https://birdeye.so";
      break;
    default:
      // solana_explorer as default explorer
      link = `https://explorer.solana.com`;
      break;
  }

  return link;
};

export const truncateAddress = (
  walletAddress: string,
  len = 4,
  endLen?: number
) => {
  return (
    walletAddress.slice(0, len) +
    "..." +
    walletAddress.slice(-(endLen ? endLen : len))
  );
};

export const getTokenBalances = async (
  connection: Connection,
  address: PublicKey
) => {
  const lamports = await connection.getBalance(address);

  const balances: TokenAccountBalancePair[] = [
    {
      address: NATIVE_MINT,
      amount: lamports.toString(),
      decimals: 9,
      uiAmountString: lamports.toString(),
      uiAmount: lamports,
    },
  ];

  let cursor: string | null = null;

  while (true) {
    const params = {
      ownerAddress: address.toBase58(),
      tokenType: "fungible",
      limit: DAS_SEARCH_ASSETS_LIMIT,
      sortBy: { sortBy: "id", sortDirection: "asc" },
      ...(cursor && { cursor }),
    };

    const response = await fetch(connection.rpcEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: address.toBase58(),
        method: "searchAssets",
        params,
      }),
    });

    const { result } =
      (await response.json()) as RpcResponse<SearchAssetsResponse>;
    result.items
      .filter(
        (item) =>
          item.token_info &&
          item.id !== NATIVE_MINT.toBase58() &&
          item.token_info.decimals !== undefined
      )
      .forEach((item) => {
        const decimals = item.token_info.decimals!;
        balances.push({
          address: new PublicKey(item.id),
          amount: item.token_info.balance.toString(),
          decimals,
          uiAmountString: item.token_info.balance.toString(),
          uiAmount: item.token_info.balance,
        });
      });

    if (result.items.length < DAS_SEARCH_ASSETS_LIMIT) break;

    cursor = result.cursor || null;
  }

  return balances;
};

export const getAssetBatch = async (
  connection: Connection,
  addresses: string[]
) => {
  const response = await fetch(connection.rpcEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: Date.now(),
      method: "getAssetBatch",
      params: {
        ids: addresses,
      },
    }),
  });

  const { result } = await response.json();
  return result;
};
