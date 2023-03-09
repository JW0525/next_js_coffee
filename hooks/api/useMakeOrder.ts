import { useCallback, useMemo, useState } from "react";
import { firestoreDB } from "../../utils/firebaseApp";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Order } from "store/types";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { useRouter } from "next/router";

const useMakeOrder = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const getTodayString = useCallback(() => {
    dayjs.extend(utc);
    dayjs.extend(timezone);
    return dayjs().tz("Asia/Seoul").format("YYYY-MM-DD");
  }, []);
  const router = useRouter();

  const makeOrder = async (param: Order) => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      await addDoc(collection(firestoreDB, "orders"), {
        ...param,
        createdAt: serverTimestamp(),
        createdDate: getTodayString(),
      });
      setIsLoading(false);
      await router.push("/employee/orderHistory");
    } catch (e) {
      if (e instanceof Error) {
        setErrorMessage(e.message);
      } else {
        setErrorMessage("주문 에러");
      }
      setIsLoading(false);
    }
  };

  return {
    makeOrder,
    errorMessage,
  };
};

export default useMakeOrder;
