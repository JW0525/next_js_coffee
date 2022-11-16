import {InferGetStaticPropsType} from "next";
import styled from "@emotion/styled";
import Link from "next/link";
import Navbar from "@/components/common/navbar";
import { API } from "config";
import getData from "pages/lib/getData";
import Navigation from "../navigation";
import React from "react";

const OrderPageContainer = styled.div`
  .category-list-container {
    margin: 90px 0;
    padding-top: 15px;
    
    > ul > li {
      padding: 0 0 15px 20px;

      .category-list-box {
        display: flex;
        grid-template-columns: 120px 1fr 20px;
        height: 90px;
        cursor: pointer;
        align-items: center;

        > span {
          padding-left: 20px;
        }

        > img {
          border-radius: 100px;
          background-color: #1B2E5F;
          height: 80px;
          width: 80px;
        }
      }
    }
  }
`

const OrderPage = () => {
  const { data, isLoading, isError } = getData(`${API.ORDER}`);
  const categoryList = data;
  const pathname = '/order/category';

  if (!data) return;
  return (
    <OrderPageContainer className='page-container'>
      <Navbar text='Order'/>
      <div className='category-list-container'>
        <ul>
          {
            categoryList.map((category: any, idx: number) => {
              return (
                <li>
                  <Link
                    className='link'
                    href={{
                      pathname: pathname,
                      query: {
                        categoryIdx: idx
                      },
                    }}
                    as={`${pathname}?type=${category.name}`}
                    key={idx}
                  >
                    <div className='category-list-box'>
                      <img src='' alt='' />
                      <span>{category.name}</span>
                    </div>
                  </Link>
                </li>
                )
              })
            }
        </ul>
      </div>
      <Navigation/>
    </OrderPageContainer>
  )
}
export default OrderPage;
