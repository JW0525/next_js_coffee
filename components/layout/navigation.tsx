import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 66px;
  padding: 0 100px;
  background-color: hotpink;
  
  
  .link-box {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

const Navigation = () => {

  return (
    <NavigationContainer className='navigation'>
      <div className='link-box'>
        <Link href='/home'>
          <p>Home</p>
        </Link>
        <Link href="/order">
          <p>Order</p>
        </Link>
        <Link href="/mypage">
          <p>MyPage</p>
        </Link>
      </div>
    </NavigationContainer>
)
}

export default Navigation;