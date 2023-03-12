import styled from "@emotion/styled";
import { Order, OrderStatus } from "store/types";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Table, Dropdown, Space } from "antd";
import { ColumnsType } from "antd/es/table";
import { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
import { orderHistoryListAtom } from "store/atoms";
import useOrderStatusMutaion from "hooks/queries/useOrderStatusMutation";

function OrderHistorDetailList() {
  // dev * 주문메모 입력 기능 개발 필요

  const { mutate, error, isError } = useOrderStatusMutaion();
  const [orders, setOrders] = useRecoilState(orderHistoryListAtom);
  const getButtonColor = useCallback((status: OrderStatus) => {
    switch (status) {
      case "준비중":
        return "#999999";
      case "주문취소":
        return "red";
      case "완료":
        return "#37ce58";
    }
  }, []);

  useEffect(() => {
    if (isError) {
      alert(error);
    }
  }, [isError]);

  const handlesOrderStatusClick = useCallback(
    (order: Order): MenuProps["onClick"] =>
      (e) => {
        mutate(
          {
            order: order,
            newStatus: e.key,
          },
          {
            onSuccess: () => {
              let copy = [...orders];
              const idx = copy.findIndex((el) => {
                return el.id === order.id;
              });
              if (idx >= 0 && idx < orders.length) {
                let newStatus: OrderStatus;
                switch (e.key) {
                  case "주문취소":
                    newStatus = "주문취소";
                    break;
                  case "완료":
                    newStatus = "완료";
                    break;
                  default:
                    newStatus = "준비중";
                    break;
                }
                copy[idx] = { ...order, status: newStatus };
                setOrders(copy);
              }
            },
          }
        );
      },
    [orders]
  );

  const columns: ColumnsType<Order> = [
    {
      title: "주문상태",
      dataIndex: "status",
      key: "status",
      width: "10%",
      render: (_, order) => {
        return (
          <Dropdown
            trigger={["click"]}
            menu={{
              items: [
                {
                  label: "준비중",
                  key: "준비중",
                },
                {
                  label: "주문취소",
                  key: "주문취소",
                },
                {
                  label: "완료",
                  key: "완료",
                },
              ],
              onClick: handlesOrderStatusClick(order),
            }}
          >
            <Button
              style={{ width: "120px", color: getButtonColor(order.status) }}
            >
              <Space>
                {order.status}
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        );
      },
    },
    {
      title: "직원",
      dataIndex: "userName",
      key: "userName",
      width: "10%",
      render: (_, { userName }) => {
        return <strong>{userName}</strong>;
      },
    },
    {
      title: "메뉴",
      dataIndex: "menuName",
      key: "menuName",
      width: "20%",
    },
    {
      title: "hot/cold",
      dataIndex: "hotColdOption",
      key: "hotColdOption",
      width: "10%",
    },
    {
      title: "요청사항",
      dataIndex: "request",
      key: "request",
      width: "24%",
    },
    {
      title: "수량",
      dataIndex: "quantity",
      key: "quantity",
      width: "6%",
    },
  ];

  return (
    <OrderHistorDetailListContainer>
      <Table
        rowKey={(order) => {
          return `${order.id}`;
        }}
        style={{
          width: " 100%",
          height: "100%",
        }}
        pagination={false}
        columns={columns}
        dataSource={orders}
      />
    </OrderHistorDetailListContainer>
  );
}
export default OrderHistorDetailList;

const OrderHistorDetailListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px 0;
`;
