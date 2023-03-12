import { useRecoilState } from "recoil";
import { loginStateAtom, userInfoAtom } from "../../store/atoms";
import { UserInfo } from "../../store/types";
import { firebaseAuth, firestoreDB } from "../../utils/firebaseApp";
import { signOut } from "firebase/auth";
import { useCallback, useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useRouter } from "next/router";

export const useAuth = () => {
  const [isLogin, setIsLogin] = useRecoilState(loginStateAtom);
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const logout = useCallback(async () => {
    setIsLoading(true);
    setUserInfo({
      uid: "",
      name: "",
      isManager: false,
      coupon: 0,
    });
    await signOut(firebaseAuth);
    setIsLogin("false");
    setIsLoading(false);
  }, [firebaseAuth]);

  const handleAuthChange = useCallback((data?: UserInfo) => {
    if (data?.name && data?.uid) {
      setUserInfo(data);
      setIsLogin("true");
    } else {
      logout();
    }
  }, []);

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged(async (user) => {
      if (user) {
        setIsLoading(true);
        const q = query(
          collection(firestoreDB, "userInfos"),
          where("uid", "==", user.uid)
        );
        const querySnapshot = await getDocs(q);
        if (querySnapshot.docs.length === 1) {
          const doc = querySnapshot.docs[0].data();
          const userInfo = {
            uid: doc.uid,
            name: doc.name,
            isManager: doc.isManager,
            coupon: doc.coupon,
          };
          handleAuthChange(userInfo);
        }
        setIsLoading(false);
      } else {
        logout();
      }
    });
    return () => unsubscribe();
  }, [firebaseAuth]);

  return {
    isLogin,
    setIsLogin,
    userInfo,
    setUserInfo,
    handleAuthChange,
    logout,
    isLoading,
  };
};
