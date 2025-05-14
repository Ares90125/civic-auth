import { DataSyncWrapper } from "@/components/pages/DataSyncWrapper";
import { ComponentProps } from "@/types";

async function DataSyncProvider({ children }: ComponentProps) {
  return <DataSyncWrapper>{children}</DataSyncWrapper>;
}

export default DataSyncProvider;
