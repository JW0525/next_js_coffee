import Head from "next/head";
import navLinks from "../../pages/lib/navLinks";
import Link from "next/link";
import {FC, ReactNode} from "react";
import styled from "@emotion/styled";

const LayoutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 100vh;
  background-color: floralwhite;
  
  main {
    width: 400px;
  }
  
  footer {
    position: absolute;
    bottom: 0;
  }
`

export const Layout: FC<{children: ReactNode}> = ({ children }) => {
  return (
    <LayoutContainer>
      {/*<Navbar />*/}
      <main>{children}</main>
      {/*<footer>This is Footer</footer>*/}
    </LayoutContainer>
  )
}