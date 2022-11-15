import { useState } from "react";
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
`

const Navbar = (props: { text: string }) =>{
  const { text } = props;
  const router = useRouter();
  const [menuToggle, setMenuToggle] = useState(false);
  const { data: session, status } = useSession();

  return (
    <NavbarContainer className='nav-bar'>
      <span onClick={() => router.back()}>
        Back
      </span>
      <p>{text}</p>

      { (status === "authenticated") && <div>authenticated</div>}
    </NavbarContainer>
  )
}

export default Navbar;