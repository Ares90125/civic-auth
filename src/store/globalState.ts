import { Connection, PublicKey } from "@solana/web3.js";
import { atom } from "jotai";
import { focusAtom } from "jotai-optics";

export interface UserInfo {
  // name: string | null;
  // picture: string | null;
  address: PublicKey | null;
}

export const userAtom = atom<UserInfo>({
  address: null,
  // name: null,
  // picture: null,
});

export const addressAtom = focusAtom(userAtom, (optic) =>
  optic.prop("address")
);

export const connectionAtom = atom<Connection | null>();
