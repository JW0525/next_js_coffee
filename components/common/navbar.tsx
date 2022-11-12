import styled from "@emotion/styled";
import {useRouter} from "next/router";

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

  return (
    <NavbarContainer className='nav-bar'>
      <span onClick={() => router.back()}>
        Back
      </span>
      <p>{text}</p>
    </NavbarContainer>
  )
}

export default Navbar;