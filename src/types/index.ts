import type { PropsWithChildren } from "react";

export interface ExtraTWClassProps {
  className?: string;
}

export type ComponentProps = PropsWithChildren<ExtraTWClassProps>;

export type RpcResponse<T> = {
  result: T;
};

export type TokenBalance = {
  id: string;
  token_info: {
    balance: number;
    decimals?: number;
  };
};

export type SearchAssetsResponse = {
  cursor?: string;
  items: TokenBalance[];
};
