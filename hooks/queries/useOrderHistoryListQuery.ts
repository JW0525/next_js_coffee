import { firestoreDB } from "../../utils/firebaseApp";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { useQuery } from "react-query";
import React from "react";
import { Order, UserInfo } from "store/types";
import { getTodayString } from "utils/lib/getToday";
import { date } from "yup";

const useOrderHistoryListQuery = (user: UserInfo, dateString: string) => {
  const getOrderHistoryList = async () => {
    if (!user.uid || !date) return;
    if (user.isManager) {
      const q = query(
        collection(firestoreDB, "orders"),
        where("createdDate", "==", dateString),
        orderBy("createdAt", "desc")
      );
      return getDocs(q);
    } else {
      const q = query(
        collection(firestoreDB, "orders"),
        where("createdDate", "==", dateString),
        where("userId", "==", user.uid),
        orderBy("createdAt", "desc")
      );
      return getDocs(q);
    }
  };

  const getOrderHistoryListQuery = useQuery(
    "getOrderHistoryList",
    getOrderHistoryList
  );

  return {
    ...getOrderHistoryListQuery,
    data: React.useMemo(() => {
      const list: Order[] =
        getOrderHistoryListQuery.data?.docs.map((el) => {
          const order = el.data();
          const ret: Order = {
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
        }) ?? [];
      return list;
    }, [getOrderHistoryListQuery.data]),
  };
};

export default useOrderHistoryListQuery;
