import OrderHitoryDate from "@/components/order/orderHistoryDate";
import OrderHistoryDetailList from "@/components/order/orderHistoryDetailList";
import styled from "@emotion/styled";
import { useAuth } from "hooks/common/useAuth";
import useOrderHistoryListQuery from "hooks/queries/useOrderHistoryListQuery";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { headerTitleAtom, selectedOrderHistoryDateAtom } from "store/atoms";
import { setTimeout } from "timers";
import { getTodayString } from "utils/lib/getToday";

export default function ManagerOrderPage() {
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
    setHeaderTitle("주문현황");
    setTimeout(() => {
      setSelectedDate(getTodayString());
    }, 500);
  }, []);

  useEffect(() => {
    if (selectedDate) {
      refetch();
    }
  }, [selectedDate]);

  return (
    <ManagerOrderPageContainer>
      <OrderHitoryDate />
      <OrderHistoryDetailList orders={orderHistory} />
    </ManagerOrderPageContainer>
  );
}

const ManagerOrderPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  height: 100%;
  padding: 0 10px;
  overflow: scroll;
`;
