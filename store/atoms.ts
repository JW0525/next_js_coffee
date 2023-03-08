import { atom } from "recoil";
import { Menu, UserInfo } from "./types";

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

export const headerTitleAtom = atom({
  key: "headerTitleAtom",
  default: "",
});

export const selectedMenuAtom = atom<Menu>({
  key: "selecedtMenuAtom",
  default: {
    categoryId: "",
    coldAvailable: false,
    hotAvailable: false,
    isAvailable: false,
    couponPayback: 0,
    couponPrice: 0,
    name: "",
    order: 0,
    price: 0,
    id: "",
  },
});

export const selectedOrderHistoryDateAtom = atom({
  key: "selectedOrderHistoryDateAtom",
  default: "",
});
