import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { headerTitleAtom } from "store/atoms";

export default function ManagerAdjustmentMonthlyPage() {
  const router = useRouter();
  const [_, setHeaderTitle] = useRecoilState(headerTitleAtom);

  useEffect(() => {
    setHeaderTitle("월간 정산");
  }, []);
  return (
    <>
      <p> this is ManagerAdjustment MonthlyPage</p>
    </>
  );
}
