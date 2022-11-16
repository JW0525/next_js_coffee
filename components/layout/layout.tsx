import {FC, ReactNode} from "react";
import styled from "@emotion/styled";
import Navbar from "./navbar";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: floralwhite;

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    //padding: 0 25px;
  }
  
  @media screen and (max-width: 480px) {
    main {
      width: 100vw;
      background-color: white;
    }
  }
  
  @media screen and (min-width: 480px) {
    main {
      width: 480px;
      background-color: white;
    }
  }
  
  footer {
    position: absolute;
    bottom: 0;
  }
  
 // 컴포넌트 CSS 
  .page-container {
    position: relative;
    width: 100%;
    height: 100%;
    max-height: 1536px;
    overflow: auto;
  }
`

export const Layout: FC<{children: ReactNode}> = ({ children }) => {
  return (
    <LayoutContainer>
      <main>
        {children}
      </main>
      {/*<footer>This is Footer</footer>*/}
    </LayoutContainer>
  )
}