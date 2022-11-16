import React, { useState } from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import { backgroundIcons } from "public/asset/styles/baseSytle";

const NavbarContainer = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 30px;
  text-align: left;
  box-shadow: 0 2px 5px 0 #cacaca;
  
  span {
    position: absolute;
    left: 0;
    width: 30px;
    height: 30px;
    ${backgroundIcons};
    background-position: -29px -67px;
    cursor: pointer;
  }
  
  > p {
    font-size: ${theme.fontSizes.lg};
    
    button {
    position: absolute;
    right: 0;
    cursor: pointer;
  }
`

const Navbar = (props: { text: string }) =>{
  const { text } = props;
  const router = useRouter();
  const { data: session, status } = useSession();

  return (
    <NavbarContainer className='nav-bar'>
      <span onClick={() => router.back()} />
      <p>{text}</p>

      {
        status === "authenticated" && (
          <button onClick={() => signOut()}>Sign Out</button>
        )
      }
    </NavbarContainer>
  )
}

export default Navbar;