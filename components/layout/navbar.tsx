import React, { useState } from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

const NavbarContainer = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 85px;
  text-align: left;
  padding-left: 20px;
  box-shadow: 0 2px 5px 0 #cacaca;
  padding-bottom: 5px;
  margin-bottom: 10px;
  
  span {
    position: absolute;
    left: 0;
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

  if (status === "authenticated") console.log("session", session);

  return (
    <NavbarContainer className='nav-bar'>
      {/*<span onClick={() => router.back()}>*/}
      {/*  Back*/}
      {/*</span>*/}
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