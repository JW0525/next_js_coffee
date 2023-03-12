import { firebaseAuth, firestoreDB } from "../../utils/firebaseApp";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "hooks/common/useAuth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useMutation } from "react-query";

interface IUseSignInProps {
  email: string;
  password: string;
}

const useSignInMutation = () => {
  const { handleAuthChange } = useAuth();

  const signInAndGetUserInfo = async ({ email, password }: IUseSignInProps) => {
    const userCredential = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    const q = query(
      collection(firestoreDB, "userInfos"),
      where("uid", "==", userCredential.user.uid)
    );
    return getDocs(q);
  };

  return useMutation(signInAndGetUserInfo, {
    onSuccess: (data) => {
      const doc = data.docs[0].data();
      const userInfo = {
        uid: doc.uid,
        name: doc.name,
        isManager: doc.isManager,
        coupon: doc.coupon,
      };
      handleAuthChange(userInfo);
    },
  });
};

export default useSignInMutation;
