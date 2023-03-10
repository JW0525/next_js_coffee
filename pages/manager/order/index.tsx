import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { headerTitleAtom } from "store/atoms";

export default function ManagerOrderPage() {
  const router = useRouter();
  const [_, setHeaderTitle] = useRecoilState(headerTitleAtom);

  useEffect(() => {
    setHeaderTitle("주문현황");
  }, []);

  return (
    <>
      <p> this is Manager order Page</p>
    </>
  );
}
