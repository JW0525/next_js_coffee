import React, { useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

const NavbarContainer = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: inherit;
  height: 70px;
  background-color: yellow;
  
  span {
    position: absolute;
    left: 0;
    cursor: pointer;
  }
  
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
      <span onClick={() => router.back()}>
        Back
      </span>
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