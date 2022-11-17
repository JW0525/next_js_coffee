import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const NavigationContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 66px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hotpink;
`;

const Navigation = () => {

  return (
    <NavigationContainer className='navigation'>
      <Link href='home'>홈</Link>
      <Link href="coupon">쿠폰</Link>
      <Link href="order">주문하기</Link>
      <Link href="mypage">마이페이지</Link>
    </NavigationContainer>
)
}

export default Navigation;