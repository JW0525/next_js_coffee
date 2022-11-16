import styled from "@emotion/styled";
import React, {ReactNode} from "react";
import Image from 'next/image';
import Navigation from "../navigation";
import Link from "next/link";
import theme from "../../styles/theme";
import Americano from "/public/asset/img/americano.png";
import Ham from "/public/asset/img/Ham.png";
import getData from "../lib/getData";
import { API } from "../../config";
import {palette} from "../../styles/baseSytle";
import { useSession } from "next-auth/react";
import {Session} from "next-auth";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: auto;

  .header {
    height: 220px;
    background-color: #2D82E8;

    > h2 {
      padding-top: 15px;
      font-size: ${theme.fontSizes.mmd};
      color: ${palette.common.white};
      text-align: center;
    }

    > span {
      display: block;
      color: ${palette.common.white};
      padding: 40px 0 0 26px;
      line-height: 28px;
    }
  }

  .container {

    .banner {
      margin: 15px 8px 0 8px;
      height: 155px;
      background-color: #F6F5EE;
      box-shadow: 0 4px 4px 0 #d3d2cf;
      
      > span {
        display: block;
      }
    }

    .menuList {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px 10px;
      padding: 10px;
      
      > li {
        background-color: #1B2E5F;
        box-shadow: 0 4px 4px 0 #191919;
        border-radius: 10px;
        text-align: center;
        
        .link {
          display: block;

          > span {
            display: block;
            color: ${palette.common.white};
            font-size: ${theme.fontSizes.xxs};
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

const Home = () => {
  const { data: session, status }: ISessionData = useSession()
  const homeMenuList = getData(`${API.ORDER}`).data;

  if (!homeMenuList) return;

  return (
    <HomeContainer>
      <div className="header">
        <h2>WEBLING MEMBERS</h2>
        <span>위블링과 함께<br/>오늘하루도 즐겨요!</span>
        {
          session && <span>{`${session.user!.name}님`}</span>
        }
      </div>
      <div className="container">
        <div className="banner">
          <div>
            <span>오늘의 조식</span>
            <span>햄치즈 샌드위치</span>
          </div>
          <Image src={Ham}
                 height={100}
                 width={100}
                 alt="ham"/>
        </div>
        <ul className="menuList">
          {
            homeMenuList.map((menu: any, idx: number) =>
              <li>
                <Link
                  className='link'
                  href={{
                  pathname: '/order/menu',
                  query: {
                    categoryIdx: idx,
                    menuIdx: [0]
                  },
                }}
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
          }
        </ul>
      </div>
      <Navigation/>
    </HomeContainer>
  );
};

export default Home;

