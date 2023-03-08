import { useCallback, useEffect, useState } from "react";
import { firestoreDB } from "../../utils/firebaseApp";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { Order } from "store/types";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

const useOrderHistoryList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [orderHistory, setOrderHistory] = useState<Order[]>([]);

  const getOrderHistory = async (uid: string, dateString: string) => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const q = query(
        collection(firestoreDB, "orders"),
        where("createdDate", "==", dateString),
        where("userId", "==", uid),
        orderBy("createdAt", "desc")
      );
      const querySnapshot = await getDocs(q);

      const list = querySnapshot.docs.map((el) => {
        const order = el.data();
        const ret = {
          id: el.id,
          userName: order.userName,
          userId: order.userId,
          menuName: order.menuName,
          menuId: order.menuId,
          hotColdOption: order.hotColdOption,
          price: order.price,
          quantity: order.quantity,
          finalPrice: order.finalPrice,
          couponQuantity: order.couponQuantity,
          request: order.request,
          status: order.status,
          orderMemo: order.orderMemo,
        };
        return ret;
      });
      setOrderHistory(list);
      setIsLoading(false);
    } catch (e) {
      setOrderHistory([]);
      setIsLoading(false);
    }
  };

  return {
    orderHistory,
    getOrderHistory,
  };
};

export default useOrderHistoryList;
