import { useEffect, useState } from "react";
import { firestoreDB } from "../../utils/firebaseApp";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { Menu } from "store/types";

const useMenuList = (categoryId: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [menuList, setMenuList] = useState<Menu[]>([]);

  const getMenuList = async (categoryId: string) => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      const q = query(
        collection(firestoreDB, "menus"),
        where("categoryId", "==", categoryId),
        where("isAvailable", "==", true),
        orderBy("order", "asc")
      );
      const querySnapshot = await getDocs(q);

      const list = querySnapshot.docs.map((el) => {
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
      });
      setMenuList(list);
      setIsLoading(false);
    } catch (e) {
      setMenuList([]);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMenuList(categoryId);
  }, []);

  return {
    menuList,
  };
};

export default useMenuList;
