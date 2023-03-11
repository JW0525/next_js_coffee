import { memo, useCallback, MouseEvent } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const TabBarItemList = [
  {
    title: "메뉴",
    path: "/employee/category",
  },
  {
    title: "주문내역",
    path: "/employee/orderHistory",
  },
  {
    title: "마이페이지",
    path: "/employee/mypage",
  },
];

const TabBar = () => {
  const router = useRouter();

  const onClickNaviagtion = useCallback(
    (title: string, path: string) => (_: MouseEvent<HTMLDivElement>) => {
      router.push(path);
    },
    []
  );

  return (
    <TabBarContainer className="layout-tabBar">
      {TabBarItemList.map((el, idx) => {
        return (
          <TabBarItem key={idx} onClick={onClickNaviagtion(el.title, el.path)}>
            {el.title}
          </TabBarItem>
        );
      })}
    </TabBarContainer>
  );
};

export default memo(TabBar);

const TabBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 66px;
  padding: 0;
  border-top: 1px solid lightgray;
`;

const TabBarItem = styled.div`
  flex: 2 1 0;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 1rem;
  cursor: pointer;
`;
