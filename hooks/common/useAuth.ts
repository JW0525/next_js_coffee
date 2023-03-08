import { useRecoilState } from "recoil";
import { loginStateAtom, userInfoAtom } from "../../store/atoms";
import { UserInfo } from "../../store/types";
import { firebaseAuth, firestoreDB } from "../../utils/firebaseApp";
import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";

export const useAuth = () => {
  const [isLogin, setIsLogin] = useRecoilState(loginStateAtom);
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);

  const logout = () => {
    setUserInfo({
      uid: "",
      name: "",
      isManager: false,
      coupon: 0,
    });
    setIsLogin(false);
    void signOut(firebaseAuth);
  };

  const handleAuthChange = (data: UserInfo) => {
    if (data.name && data.uid) {
      setUserInfo(data);
      setIsLogin(true);
    } else {
      logout();
    }
  };

  useEffect(() => {
    firebaseAuth.onAuthStateChanged(async (user) => {
      if (user) {
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
      } else {
        logout();
      }
    });
  }, []);

  return {
    isLogin,
    setIsLogin,
    userInfo,
    setUserInfo,
    handleAuthChange,
    logout,
  };
};
