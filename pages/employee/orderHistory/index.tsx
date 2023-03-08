import List from "@/components/common/list";
import OrderHistorListItem from "@/components/order/orderHistoryListItem";
import useOrderHistoryList from "hooks/api/useOrderHistoryList";
import { useAuth } from "hooks/common/useAuth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { headerTitleAtom, selectedOrderHistoryDateAtom } from "store/atoms";
import OrderHitoryPageContainer from "@/components/order/orderHistoryContainer";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import OrderHitoryDate from "@/components/order/orderHistoryDate";

export default function EmployeeOrderHistoryPage() {
  const [_, setHeaderTitle] = useRecoilState(headerTitleAtom);
  const { isLogin, userInfo } = useAuth();
  const router = useRouter();

  const { orderHistory, getOrderHistory } = useOrderHistoryList();
  const [selectedDate, setSelectedDate] = useRecoilState(
    selectedOrderHistoryDateAtom
  );

  useEffect(() => {
    setHeaderTitle("주문내역");
    if (!(isLogin && !userInfo.isManager)) {
      void router.push("/signin");
    }
    dayjs.extend(utc);
    dayjs.extend(timezone);
    const today = dayjs().tz("Asia/Seoul").format("YYYY-MM-DD");
    setSelectedDate(today);
  }, []);

  useEffect(() => {
    if (selectedDate) {
      getOrderHistory(userInfo.uid, selectedDate);
    }
  }, [selectedDate]);

  return (
    <OrderHitoryPageContainer>
      <OrderHitoryDate />
      <List>
        {orderHistory.length != 0 ? (
          orderHistory.map((el) => {
            return <OrderHistorListItem key={el.id} orderInfo={el} />;
          })
        ) : (
          <div>주문내역이 없습니다</div>
        )}
      </List>
    </OrderHitoryPageContainer>
  );
}
