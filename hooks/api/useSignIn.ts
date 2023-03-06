import { useState } from "react";
import { firebaseAuth, firestoreDB } from "../../utils/firebaseApp";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "hooks/common/useAuth";
import { collection, query, where, getDocs } from "firebase/firestore";

interface IUseSignInProps {
  email: string;
  password: string;
}

const useSignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { handleAuthChange } = useAuth();

  const signinUser = async (data: IUseSignInProps) => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      // firebase authentication 로그인
      const userCredential = await signInWithEmailAndPassword(
        firebaseAuth,
        data.email,
        data.password
      );
      const q = query(
        collection(firestoreDB, "userInfos"),
        where("uid", "==", userCredential.user.uid)
      );
      const querySnapshot = await getDocs(q);

      if (querySnapshot.docs.length !== 1) {
        throw Error("로그인 에러");
      } else {
        const doc = querySnapshot.docs[0].data();
        const userInfo = {
          uid: doc.uid,
          name: doc.name,
          isManager: doc.isManager,
          coupon: doc.coupon,
        };
        handleAuthChange(userInfo);
        setIsLoading(false);
      }
    } catch (e) {
      if (e instanceof Error) {
        setErrorMessage(e.message);
      } else {
        setErrorMessage("로그인 에러");
      }
      setIsLoading(false);
    }
  };

  return {
    mutation: signinUser,
    error: errorMessage,
  };
};

export default useSignIn;
