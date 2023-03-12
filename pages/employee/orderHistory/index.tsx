import List from "@/components/common/list";
import OrderHistorListItem from "@/components/order/orderHistoryListItem";
import { useAuth } from "hooks/common/useAuth";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { headerTitleAtom, selectedOrderHistoryDateAtom } from "store/atoms";
import OrderHitoryPageContainer from "@/components/order/orderHistoryContainer";
import OrderHitoryDate from "@/components/order/orderHistoryDate";
import { getTodayString } from "utils/lib/getToday";
import useOrderHistoryListQuery from "hooks/queries/useOrderHistoryListQuery";
import { setTimeout } from "timers";

export default function EmployeeOrderHistoryPage() {
  const [_, setHeaderTitle] = useRecoilState(headerTitleAtom);
  const { userInfo } = useAuth();
  const [selectedDate, setSelectedDate] = useRecoilState(
    selectedOrderHistoryDateAtom
  );
  const { data: orderHistory, refetch } = useOrderHistoryListQuery(
    userInfo,
    selectedDate
  );

  useEffect(() => {
    setHeaderTitle("주문내역");
    const timer = setTimeout(() => {
      setSelectedDate(getTodayString());
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (selectedDate) {
      refetch();
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
