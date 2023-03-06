import { atom } from "recoil";
import { UserInfo } from "./types";

export const loginStateAtom = atom({
  key: "loginState",
  default: false,
});

export const accessTokeneAtom = atom({
  key: "accessToken",
  default: "",
});

export const userInfoAtom = atom<UserInfo>({
  key: "userInfoAtom",
  default: {
    uid: "",
    name: "",
    isManager: false,
    coupon: 0,
  },
});
