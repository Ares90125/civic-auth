import { ReactNode } from "react";

import { CivicAuthProvider } from "@civic/auth-web3/nextjs";

import JotaiStoreProvider from "./jotai/JotaiStoreProvider";
import ReactQueryProvider from "./react-query/ReactQueryProvider";
import DataSyncProvider from "./data-sync/DataSyncProvider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <JotaiStoreProvider>
      <ReactQueryProvider>
        <CivicAuthProvider>
          <DataSyncProvider>{children}</DataSyncProvider>
        </CivicAuthProvider>
      </ReactQueryProvider>
    </JotaiStoreProvider>
  );
}
