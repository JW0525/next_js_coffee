import { Button } from "@/components/common/btn";
import List from "@/components/common/list";
import ListItem from "@/components/common/listItem";
import { useAuth } from "hooks/common/useAuth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { headerTitleAtom } from "store/atoms";

export default function EmployeeMypagePage() {
  const [_, setHeaderTitle] = useRecoilState(headerTitleAtom);
  const { isLogin, userInfo, logout } = useAuth();
  const router = useRouter();

  const onClickLogout = () => {
    logout();
  };

  useEffect(() => {
    setHeaderTitle("마이페이지");
    if (!isLogin) {
      void router.push("/signin");
    }
  }, [isLogin]);

  return (
    <List>
      <ListItem>{`이름 : ${userInfo.name}`}</ListItem>
      <ListItem>{`쿠폰갯수 : ${userInfo.coupon}개`}</ListItem>
      <ListItem isclickable={true} onclick={onClickLogout}>
        로그아웃
      </ListItem>
    </List>
  );
}
