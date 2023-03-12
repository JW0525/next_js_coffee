import {
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
  Query,
  DocumentData,
} from "firebase/firestore";
import { firestoreDB } from "utils/firebaseApp";
import { Order } from "store/types";
import { useRecoilState } from "recoil";
import { orderHistoryListAtom } from "store/atoms";
import { useCallback } from "react";

export const useSubscribeOrderChange = () => {
  const [orders, setOrders] = useRecoilState(orderHistoryListAtom);

  const subscribeOrderChange = useCallback(
    (selectedDate: string) => {
      const q: Query<DocumentData> = query(
        collection(firestoreDB, "orders"),
        where("createdDate", "==", selectedDate),
        orderBy("createdAt", "desc")
      );

      const unsubscribe = onSnapshot(q, (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          const changeData = change.doc.data();
          const order: Order = {
            id: change.doc.id,
            userName: changeData.userName,
            userId: changeData.userId,
            menuName: changeData.menuName,
            menuId: changeData.menuId,
            hotColdOption: changeData.hotColdOption,
            price: changeData.price,
            quantity: changeData.quantity,
            finalPrice: changeData.finalPrice,
            couponQuantity: changeData.couponQuantity,
            request: changeData.request,
            status: changeData.status,
            orderMemo: changeData.orderMemo,
          };
          if (change.type === "added") {
            let copy = [...orders];
            const idx = copy.findIndex((el) => {
              return el.id === order.id;
            });
            if (idx === -1) {
              copy.push(order);
              setOrders(copy);
            }
          }
          if (change.type === "modified") {
            let copy = [...orders];
            const idx = copy.findIndex((el) => {
              return el.id === order.id;
            });
            if (idx >= 0 && idx < orders.length) {
              copy[idx] = order;
              setOrders(copy);
            }
          }
        });
      });
      return unsubscribe;
    },
    [orders]
  );

  return {
    subscribeOrderChange,
  };
};
