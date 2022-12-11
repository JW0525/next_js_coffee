import styled from "@emotion/styled";
import React, {ReactNode, useEffect, useState} from "react";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";
import { API } from "../../config";
import { Loading } from "@/components/common/loading";
import getData from "../lib/getData";
import createList from "@/hooks/useCreateList";
import ExchangeCoupon from "@/hooks/useExchangeCoupon";
import {useRouter} from "next/router";
import textCss from "styles/textCss";
import HomeBanner from "./Components/HomeBanner";
import HomeRecommendList from "./Components/HomeRecommendList";
import HomeHeader from "./Components/HomeHeader";

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
    
    .recommend-list-title {
      display: flex;
      align-items: flex-end;
      ${textCss.gray18Bold};
      margin-bottom: -10px;

      span {
        display: flex;
        align-items: flex-end;
        ${textCss.gray18Bold};

        p {
          ${textCss.gray20Bold};
          color: #AFC8D7;
        }
      }
    }
  }
}
`;

interface ISessionData {
  data: Session | null | undefined,
  status: string,
  children?: ReactNode | JSX.Element | JSX.Element[]
}

const HomePage = () => {
  const router = useRouter();
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
  const exchangeBtn = star > exchangeCondition;
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
        clickHandler={clickHandler}
        exchangeBtn={exchangeBtn}
        exchangeRate={exchangeRate}
        exchangeCondition={exchangeCondition}
        session={session}
        star={star}
      />

      <div className="contents-container">
        <HomeBanner />

        <div className='recommend-list-title'>
          {
            session &&
            <span>
              <p>{session.user!.name}&nbsp;</p>님을 위한&nbsp;
            </span>
          }
          추천 메뉴
        </div>

        <HomeRecommendList
          recommendedList={recommendedList}
          categoryIdxList={categoryIdxList}
        />
      </div>
    </HomePageContainer>
  );
};

export default HomePage;

