import { FC, ReactNode } from "react";
import styled from "@emotion/styled";
import Navigation from "@/components/layout/navigation";
import { useAuth } from "hooks/common/useAuth";

interface ILayoutContainerProps {
  isWide: boolean;
}

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: floralwhite;

  main {
    padding-bottom: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
  }

  @media screen and (max-width: 480px) {
    .navigation {
      width: 100vw;
    }
    main {
      width: 100vw;
      background-color: white;
    }
  }

  @media screen and (min-width: 480px) {
    .navigation {
      width: 480px;
    }
    main {
      display: flex;
      justify-content: center;
      width: ${(props: ILayoutContainerProps) =>
        props.isWide ? "80%" : "480px"};
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
`;

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const { isLogin, userInfo } = useAuth();

  return (
    <LayoutContainer isWide={isLogin && userInfo.isManager}>
      <main>{children}</main>
      {isLogin && !userInfo.isManager && <Navigation />}
    </LayoutContainer>
  );
};
