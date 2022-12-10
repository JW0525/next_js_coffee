import styled from "@emotion/styled";
import React, {ReactNode, useEffect, useState} from "react";
import Image from 'next/image';
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";
import { API } from "../../config";
import { Loading } from "@/components/common/loading";
import getData from "../lib/getData";
import theme from "../../styles/theme";
import { palette } from "../../styles/baseSytle";
import Americano from "/public/asset/img/americano.png";
import Ham from "/public/asset/img/Ham.png";
import createList from "@/hooks/useCreateList";
import ExchangeCoupon from "@/hooks/useExchangeCoupon";
import {useRouter} from "next/router";
import textCss from "styles/textCss";

const HomePageContainer = styled.div<{
  exchangeRate: number;
}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: auto;

  .header {
    position: relative;
    //min-height: 200px;
    padding: 25px;
    background-color: #2D82E8;

    > h2 {
      font-size: ${theme.fontSizes.mmd};
      color: ${palette.common.white};
      text-align: center;
    }

    > span {
      display: block;
      padding: 20px 0;
      color: ${palette.common.white};
      line-height: 25px;
    }
    
    .coupon-box {
      display: grid;
      grid-template-columns: 1fr 100px;
      
      .reward-rate {
        
        p {
          font-size: 20px;
        }
        
        .rate-bar {
          position: relative;
          background-color: green;
          height: 2px;
          width: 100%;
          
          > span {
            position: absolute;
            
            background-color: white;
            height: 2px;
            width: ${props => props.exchangeRate * 100 > 100 ? 100 : props.exchangeRate * 100}%;
          }
        }
      }
      
      > span {
        display: flex;
      }
    }
  }

  .contents-container {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    padding: 20px;

    .banner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 40px;
      height: 150px;
      background-color: #F6F5EE;
      box-shadow: 0 4px 4px 0 #d3d2cf;
      
      > span {
          h6 {
            padding-bottom: 20px;
            ${textCss.gray16Medium};
          }
        
          h3 {
            font-size: 25px;
          }
      }
    }
    
    .recommend-list-title {
      display: flex;
      font-size: 19px;

      span {
        display: flex;
        font-size: 19px;

        p {
          color: green;
          font-size: 19px;
        }
      }
    }

    .recommend-list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px 10px;
      
      > li {
        background-color: #1B2E5F;
        //box-shadow: 0 4px 4px 0 #191919;
        border-radius: 10px;
        text-align: center;
        
        .link {
          display: block;

          > span {
            display: block;
            color: ${palette.common.white};
            font-size: 14px;
            padding: 5px 0 15px 0;
          }
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
    <HomePageContainer exchangeRate={exchangeRate}>

      <div className="header">
        <h2>WEBLING MEMBERS</h2>
        <span>
          { session && <p>{`${session.user!.name}님`}</p> }
          위블링과 함께 오늘 하루도 즐겨요!
        </span>
        <div className='coupon-box'>
          {/*{ !isNaN(star) && (*/}
          <div className='reward-rate'>
            <p>3 until next Reward</p>
            <div className='rate-bar'>
              <span />
            </div>
          </div>
          <span>
            <p>{star}</p>/ 30
          </span>
          {/*)}*/}
          {/*<div onClick={clickHandler}>쿠폰으로 전환</div>*/}
        </div>
      </div>


      <div className="contents-container">

        <div className="banner">
          <span>
            <h6>오늘의 조식</h6>
            <h3>햄치즈 샌드위치</h3>
          </span>
          <Image
            src={Ham}
            height={150}
            width={150}
            alt="ham"
          />
        </div>

        <div className='recommend-list-title'>
          {
            session &&
            <span>
              <p>{session.user!.name}</p>님을 위한&nbsp;
            </span>
          }
          추천 메뉴
        </div>

        <ul className="recommend-list">
          {
            recommendedList.map((menu: any, idx: number) => {
              const { id } = menu;
              const categoryId = categoryIdxList[id];

              return (
                <li key={idx}>
                  <Link
                    className='link'
                    href={{
                      pathname: '/order/menu',
                      query: {
                        categoryId,
                        menuId: menu.id
                      },
                    }}
                    as={`/order/1/menu?name=${menu.name}`}
                    key={idx}
                  >
                    <Image
                      priority
                      src={Americano}
                      height={125}
                      width={125}
                      alt="americano"
                    />
                    <span>{menu.name}</span>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    </HomePageContainer>
  );
};

export default HomePage;

