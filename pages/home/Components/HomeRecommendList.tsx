import React from "react";
import Link from "next/link";
import Image from "next/image";
// import Americano from "/public/asset/img/americano.png";
import styled from "@emotion/styled";
import { palette } from "../../../styles/baseSytle";
import textCss from "../../../styles/textCss";
import { IMenuData } from "../../order";

const RecommendListLayout = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px 10px;
  
  > li {
    background: linear-gradient(#B0C8D7, #EFD0D0);
    //background-color: #B6C8D7;
    border-radius: 10px;
    text-align: center;
  
    .link {
      display: block;
  
      > p {
        display: block;
        ${textCss.gray14Bold};
        letter-spacing: 1.5px;
        color: ${palette.common.white};
        padding: 5px 0 15px 0;
      }
    }
  }
`

const HomeRecommendList = (props: {
  recommendedList: IMenuData[],
  categoryIdxList: number[]
}) => {
  const { recommendedList, categoryIdxList } = props;

  return (
    <RecommendListLayout>
      {
        recommendedList?.map((menu: any, idx: number) => {
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
                {/*<Image*/}
                {/*  src={Americano}*/}
                {/*  height={125}*/}
                {/*  width={125}*/}
                {/*  alt="americano"*/}
                {/*/>*/}
                <p>{menu.name}</p>
              </Link>
            </li>
          )
        })
      }
    </RecommendListLayout>
  )
}

export default HomeRecommendList;