import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import Home from "../home";

const NavigationContainer = styled.div`
  position: fixed;
  bottom: 0;
  left:0;
  right:0;
  height: 66px;
  background-color: hotpink;
`;

const Navigation = () => {

  return (
    <NavigationContainer>
      <Link href='home'>홈</Link>
      <Link href="coupon">쿠폰</Link>
      <Link href="order">주문하기</Link>
      <Link href="mypage">마이페이지</Link>
    </NavigationContainer>
)
}

export default Navigation;