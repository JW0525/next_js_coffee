import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { headerTitleAtom } from "store/atoms";

export default function ManagerMenuPage() {
  const router = useRouter();
  const [_, setHeaderTitle] = useRecoilState(headerTitleAtom);

  useEffect(() => {
    setHeaderTitle("메뉴관리");
    localStorage.setItem("lastpage", router.pathname);
  }, []);

  return (
    <>
      <p> this is Manager MenuPage</p>
    </>
  );
}
