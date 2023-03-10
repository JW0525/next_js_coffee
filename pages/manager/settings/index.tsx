import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { headerTitleAtom } from "store/atoms";

export default function ManagerSettingPage() {
  const router = useRouter();
  const [_, setHeaderTitle] = useRecoilState(headerTitleAtom);

  useEffect(() => {
    setHeaderTitle("설정");
  }, []);

  return (
    <>
      <p> this is Manager setting Page</p>
      <p>영업시간 범위 설정</p>
    </>
  );
}
