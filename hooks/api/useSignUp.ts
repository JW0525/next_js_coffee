import { useState } from "react";
import { firebaseAuth, firestoreDB } from "../../utils/firebaseApp";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { useAuth } from "hooks/common/useAuth";

interface IUseSignUpProps {
  email: string;
  password: string;
}

const useSignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { handleAuthChange } = useAuth();

  const signupUser = async (data: IUseSignUpProps) => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      // firebase authentication에 회원가입
      const newUser = await createUserWithEmailAndPassword(
        firebaseAuth,
        data.email,
        data.password
      );
      const newUserInfo = {
        uid: newUser.user.uid,
        name: data.email.split("@")[0],
        isManager: false,
        coupon: 0,
      };
      // 추가정보(이름, 매니저여부)는 firestore에 저장
      await addDoc(collection(firestoreDB, "userInfos"), newUserInfo);
      handleAuthChange(newUserInfo);
      setIsLoading(false);
    } catch (e) {
      if (e instanceof Error) {
        setErrorMessage(e.message);
      } else {
        setErrorMessage("회원가입 에러");
      }
      setIsLoading(false);
    }
  };

  return {
    mutation: signupUser,
    error: errorMessage,
  };
};

export default useSignUp;
