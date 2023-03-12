import OrderHitoryDate from "@/components/order/orderHistoryDate";
import OrderHistoryDetailList from "@/components/order/orderHistoryDetailList";
import styled from "@emotion/styled";
import { useAuth } from "hooks/common/useAuth";
import useOrderHistoryListQuery from "hooks/queries/useOrderHistoryListQuery";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  headerTitleAtom,
  orderHistoryListAtom,
  selectedOrderHistoryDateAtom,
} from "store/atoms";
import { setTimeout } from "timers";
import { getTodayString } from "utils/lib/getToday";
import { useSubscribeOrderChange } from "hooks/common/useSubscribeOrderChange";

export default function ManagerOrderPage() {
  const [_, setHeaderTitle] = useRecoilState(headerTitleAtom);
  const { userInfo } = useAuth();
  const [selectedDate, setSelectedDate] = useRecoilState(
    selectedOrderHistoryDateAtom
  );
  const [orders, setOrders] = useRecoilState(orderHistoryListAtom);

  const { data: orderHistory, refetch } = useOrderHistoryListQuery(
    userInfo,
    selectedDate
  );

  const { subscribeOrderChange } = useSubscribeOrderChange();

  useEffect(() => {
    setOrders(orderHistory);
  }, [orderHistory]);

  useEffect(() => {
    setHeaderTitle("주문현황");
    const timer = setTimeout(() => {
      setSelectedDate(getTodayString());
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!selectedDate) return;
    if (selectedDate) {
      refetch();
    }
    const unsubscribe = subscribeOrderChange(selectedDate);
    return () => unsubscribe();
  }, [selectedDate]);

  return (
    <ManagerOrderPageContainer>
      <OrderHitoryDate />
      <OrderHistoryDetailList />
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
