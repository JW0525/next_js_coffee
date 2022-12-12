import styled from "@emotion/styled";
import React, {ReactNode, useEffect, useState} from "react";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";
import { API } from "../../config";
import { Loading } from "@/components/common/loading";
import getData from "../api/lib/getData";
import createList from "@/hooks/useCreateList";
import ExchangeCoupon from "@/hooks/useExchangeCoupon";
import HomeHeader from "./Components/HomeHeader";
import HomeBanner from "./Components/HomeBanner";
import HomeRecommendList from "./Components/HomeRecommendList";
import HomeRecommendListTitle from "./Components/HomeRecommendListTitle";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: auto;
  
  .contents-container {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    padding: 20px;
  }
`

export interface IUserData {
  name: string;
  email: string;
}

export interface ISessionData {
  data: Session | null | undefined,
  status: string,
  children?: ReactNode | JSX.Element | JSX.Element[]
}

const HomePage = () => {
  const { data: session, status }: ISessionData = useSession();
  const { data, isLoading, isError } = getData(`${API.ORDER}`);
  const { data: userData } = getData(`${API.USER}`);
  const [recommendedList, setRecommendedList] = useState<any>([]);
  const [categoryIdxList, setCategoryIdxList] = useState<any>([]);

  const email = session?.user!.email;
  const userInfo = userData?.find((user: any) => user.email === email);
  const counts = userInfo?.amounts / 1000;
  const exchangeCondition = 30;
  const star = counts - (userInfo?.couponExchanged * exchangeCondition);
  const showExchangeBtn = star > exchangeCondition;
  const exchangeRate = star / exchangeCondition;

  const clickHandler = async () => {
    ExchangeCoupon(email as string).then();

    await window.location.replace('/home');
    alert('쿠폰이 발급되었습니다.');
  }

  useEffect(() => {
    const { recommendedList, categoryIdxList } = createList(data);
    setRecommendedList(recommendedList);
    setCategoryIdxList(categoryIdxList);
  }, [isLoading]);

  if (isLoading) return <Loading />

  return (
    <HomePageContainer>
      <HomeHeader
        exchangeRate={exchangeRate}
        showExchangeBtn={showExchangeBtn}
        exchangeCondition={exchangeCondition}
        star={star}
        session={session as Session}
        clickHandler={clickHandler}
      />

      <div className="contents-container">
        <HomeBanner />

        <HomeRecommendListTitle session={session as Session} />

        <HomeRecommendList
          recommendedList={recommendedList}
          categoryIdxList={categoryIdxList}
        />
      </div>
    </HomePageContainer>
  );
};

export default HomePage;

