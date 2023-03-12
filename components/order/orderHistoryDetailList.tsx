import styled from "@emotion/styled";
import { Order, OrderStatus } from "store/types";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Table, Dropdown, Space } from "antd";
import { ColumnsType } from "antd/es/table";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { orderHistoryListAtom } from "store/atoms";

function OrderHistorDetailList() {
  // dev * 주문메모 입력 기능 개발 필요

  const [orders] = useRecoilState(orderHistoryListAtom);
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

  const handlesOrderStatusClick = useCallback(
    (order: Order): MenuProps["onClick"] =>
      (e) => {
        console.log("click", order);
        console.log("click", e);
      },
    []
  );

  const menus = [
    {
      label: "준비중",
      key: "0",
    },
    {
      label: "주문취소",
      key: "1",
    },
    {
      label: "완료",
      key: "2",
    },
  ];

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
              items: menus,
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
