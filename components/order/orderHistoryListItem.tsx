import styled from "@emotion/styled";
import { memo } from "react";
import { Order, OrderStatus } from "store/types";

interface IOrderHistorListItemProps {
  orderInfo: Order;
}
function OrderHistorListItem(order: IOrderHistorListItemProps) {
  const { status, menuName, hotColdOption, quantity, request, orderMemo } =
    order.orderInfo;

  return (
    <OrderHistoryItemContainer>
      <OrderHistoryItem>
        <OrderStatus status={status}>{status}</OrderStatus>
        <span
          style={{ flex: "3 1 0", marginLeft: "10px" }}
        >{`${menuName}, ${hotColdOption}${request && ", " + request}`}</span>
        <span>{`수량 : ${quantity}`}</span>
      </OrderHistoryItem>
      {orderMemo && (
        <OrderHistoryItem>
          <span style={{ paddingLeft: "90px" }}>{orderMemo}</span>
        </OrderHistoryItem>
      )}
    </OrderHistoryItemContainer>
  );
}
export default memo(OrderHistorListItem);

const OrderHistoryItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding: 10px 0;
  border-bottom: 1px solid lightgray;
`;

const OrderHistoryItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 30px;
`;

interface IOrderStatusProps {
  status: OrderStatus;
}
const OrderStatus = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 80px;
  height: 100%;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  background-color: ${(props: IOrderStatusProps) => {
    switch (props.status) {
      case "준비중":
        return "#cecece";
      case "주문취소":
        return "red";
      case "완료":
        return "#37ce58";
    }
  }};
`;
