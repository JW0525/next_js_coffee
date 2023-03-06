import { memo, useMemo } from "react";
import styled from "@emotion/styled";
import { backgroundIcons } from "styles/baseSytle";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { headerTitleAtom } from "store/atoms";

const Header = () => {
  const router = useRouter();
  const [headerTitle] = useRecoilState(headerTitleAtom);
  const showBackBtn = useMemo(() => {
    return router.pathname.includes("employee/menu");
  }, [router.pathname]);

  return (
    <HeaderContainer showBackBtn={showBackBtn}>
      <span onClick={() => router.back()} />
      <p>{headerTitle}</p>
    </HeaderContainer>
  );
};

export default memo(Header);

interface IHeaderContainerProps {
  showBackBtn: boolean;
}
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid lightgray;
  background-color: white;

  span {
    width: 30px;
    height: 30px;
    ${backgroundIcons};
    background-position: -29px -67px;
    cursor: pointer;
    visibility: ${(props: IHeaderContainerProps) =>
      props.showBackBtn ? "visible" : "hidden"};
  }

  p {
    color: black;
    font-size: 2rem;
    font-weight: bolder;
    margin: 0 10px;
  }
`;
