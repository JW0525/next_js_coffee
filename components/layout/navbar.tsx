import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import { backgroundIcons } from "styles/baseSytle";
import textCss from "styles/textCss";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 40px;
  
  span {
    position: absolute;
    left: 0;
    width: 30px;
    height: 30px;
    ${backgroundIcons};
    background-position: -29px -67px;
    cursor: pointer;
  }
  
  p {
    font-size: ${textCss.gray18Bold};
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

  return (
    <NavbarContainer className='nav-bar'>
      {
        session && <span onClick={() => router.back()} />
      }
      <p>{text}</p>
      {
        status === "authenticated" && (
          <button onClick={() => signOut({
            callbackUrl: "/home"
          })}>
            Sign Out
          </button>
        )
      }
    </NavbarContainer>
  )
}

export default Navbar;