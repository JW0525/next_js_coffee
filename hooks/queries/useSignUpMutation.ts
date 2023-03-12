import { firebaseAuth, firestoreDB } from "../../utils/firebaseApp";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "hooks/common/useAuth";
import { collection, addDoc } from "firebase/firestore";
import { useMutation } from "react-query";

interface IUseSignUpProps {
  email: string;
  password: string;
}

const useSignUpMutation = () => {
  const { handleAuthChange } = useAuth();

  const signUpMuataion = async ({ email, password }: IUseSignUpProps) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  return useMutation(signUpMuataion, {
    onSuccess: async (data) => {
      const newUserInfo = {
        uid: data.user.uid,
        name: data.user.email?.split("@")[0] ?? "unknown",
        isManager: false,
        coupon: 0,
      };
      await addDoc(collection(firestoreDB, "userInfos"), newUserInfo);
      handleAuthChange(newUserInfo);
    },
  });
};

export default useSignUpMutation;
