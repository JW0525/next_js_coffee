import styled from "@emotion/styled";
import {useRouter} from "next/router";
import theme from "../../styles/theme";

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
  }
`

const Navbar = (props: { text: string }) =>{
  const { text } = props;
  const router = useRouter();

  return (
    <NavbarContainer className='nav-bar'>
      {/*<span onClick={() => router.back()}>*/}
      {/*  Back*/}
      {/*</span>*/}
      <p>{text}</p>
    </NavbarContainer>
  )
}

export default Navbar;