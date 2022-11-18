import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import styled from "@emotion/styled";
import { API } from "config";
import Navbar from "@/components/layout/navbar";
import getData from "pages/lib/getData";
import { Loading } from "@/components/common/loading";

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
  const router = useRouter();
  const { data: session, status } = useSession();
  const { data, isLoading, isError } = getData(`${API.ORDER}`);

  // 로그인하지 않았을 시에는 로딩화면을 보여준다. 이후 login 페이지로 이동한다.
  useEffect(() => {
    if (status === 'loading') return;

    if (status === 'unauthenticated') {
      const timer = setTimeout(() => {
        router.push('/login').then();
      }, 500);

      return () => clearTimeout(timer);
    }
  },[status]);

  if (!data) return;
  const { categoryList } = data[0];

  if (status === 'unauthenticated') return <Loading/>

  return (
    <OrderPageContainer className='page-container'>
      <Navbar text='Order'/>
      <div className='category-list-container'>
        <ul>
          {
            categoryList.map((category: any, idx: number) =>
              <li key={idx}>
                <Link
                  className='link'
                  href={{
                    pathname: `/order/[categoryId]`,
                    query: {
                      categoryId: idx + 1,
                    }
                }}
                >
                  <div className='category-list-box'>
                    <img src='' alt='' />
                    <span>{category.name}</span>
                  </div>
                </Link>
              </li>
            )
          }
        </ul>
      </div>
    </OrderPageContainer>
  )
}
export default OrderPage;
