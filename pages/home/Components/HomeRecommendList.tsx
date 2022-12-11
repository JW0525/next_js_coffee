import Link from "next/link";
import Image from "next/image";
import Americano from "/public/asset/img/americano.png";
import React from "react";
import styled from "@emotion/styled";
import {palette} from "../../../styles/baseSytle";

const RecommendListLayout = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px 10px;
  
  > li {
    background-color: #B6C8D7;
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
`

const HomeRecommendList = (props: {
  recommendedList: any,
  categoryIdxList: any
}) => {
  const { recommendedList, categoryIdxList } = props;

  return (
    <RecommendListLayout>
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
    </RecommendListLayout>
  )
}

export default HomeRecommendList;