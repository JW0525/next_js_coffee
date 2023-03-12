import { firestoreDB } from "../../utils/firebaseApp";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { useQuery } from "react-query";
import React from "react";
import { Menu } from "store/types";

const useMenuListQuery = (categoryId: string) => {
  const getMenuList = async () => {
    const q = query(
      collection(firestoreDB, "menus"),
      where("categoryId", "==", categoryId),
      where("isAvailable", "==", true),
      orderBy("order", "asc")
    );
    return getDocs(q);
  };

  const getMenuListQuery = useQuery("getMenuList", getMenuList);

  return {
    ...getMenuListQuery,
    data: React.useMemo(() => {
      const list: Menu[] =
        getMenuListQuery.data?.docs.map((el) => {
          const menu = el.data();
          return {
            categoryId: menu.categoryId,
            coldAvailable: menu.coldAvailable,
            hotAvailable: menu.hotAvailable,
            isAvailable: menu.isAvailable,
            couponPayback: menu.couponPayback,
            couponPrice: menu.couponPrice,
            name: menu.name,
            order: menu.order,
            price: menu.price,
            id: el.id,
          };
        }) ?? [];
      return list;
    }, [getMenuListQuery.data]),
  };
};

export default useMenuListQuery;
