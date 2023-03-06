import { FC, ReactNode, useMemo } from "react";
import styled from "@emotion/styled";
import TabBar from "@/components/layout/tabBar";
import { useAuth } from "hooks/common/useAuth";
import Header from "./header";

interface ILayoutContainerProps {
  isManagerMode: boolean;
}

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const { isLogin, userInfo } = useAuth();

  const isManagerMode = useMemo(() => {
    return isLogin && userInfo.isManager;
  }, [isLogin, userInfo.isManager]);

  const isEmployeeMode = useMemo(() => {
    return isLogin && !userInfo.isManager;
  }, [isLogin, userInfo.isManager]);

  return (
    <LayoutContainer>
      {/* {isManagerMode && <SideBar/>} */}
      <MainContainer isManagerMode={isManagerMode}>
        {isLogin && <Header />}
        {children}
      </MainContainer>
      {isEmployeeMode && <TabBar />}
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: floralwhite;

  .layout-tabBar {
    width: 480px;
  }
`;

const MainContainer = styled.div`
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 100vh;
  width: ${(props: ILayoutContainerProps) =>
    props.isManagerMode ? "80%" : "480px"};
  background-color: white;
`;
