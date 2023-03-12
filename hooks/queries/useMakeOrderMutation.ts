import { firestoreDB } from "../../utils/firebaseApp";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Order } from "store/types";
import { useRouter } from "next/router";
import { getTodayString } from "utils/lib/getToday";
import { useMutation } from "react-query";

const useMakeOrderMutation = () => {
  const router = useRouter();

  const makeOrderMutation = async (param: Order) => {
    return addDoc(collection(firestoreDB, "orders"), {
      ...param,
      createdAt: serverTimestamp(),
      createdDate: getTodayString(),
    });
  };

  return useMutation(makeOrderMutation, {
    onSuccess: () => {
      router.push("/employee/orderHistory");
    },
  });
};

export default useMakeOrderMutation;
