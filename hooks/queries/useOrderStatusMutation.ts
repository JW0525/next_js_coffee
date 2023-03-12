import { firestoreDB } from "../../utils/firebaseApp";
import { doc, updateDoc } from "firebase/firestore";
import { useMutation } from "react-query";
import { Order } from "store/types";

interface IUseSignInProps {
  order: Order;
  newStatus: string;
}

const useOrderStatusMutaion = () => {
  const orderStatusMutaion = async ({ order, newStatus }: IUseSignInProps) => {
    if (!order.id) return;
    return updateDoc(doc(firestoreDB, "orders", order.id), {
      status: newStatus,
    });
  };

  return useMutation("useOrderStatusMutaion", orderStatusMutaion);
};

export default useOrderStatusMutaion;
