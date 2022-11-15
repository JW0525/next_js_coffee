import {InferGetStaticPropsType} from "next";
import styled from "@emotion/styled";
import Link from "next/link";
import Navbar from "@/components/common/navbar";
import { API } from "config";
import getData from "pages/lib/getData";

const OrderPageContainer = styled.div`
  .category-list-container {
    margin-top: 70px;

    .category-list-box {
      display: grid;
      grid-template-columns: 120px 1fr 20px;
      align-items: center;
      height: 120px;
      border-bottom: 1px solid wheat;
      cursor: pointer;

      .arrow {
        width: 20px;
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
      <Navbar text='MENU'/>
      <div className='category-list-container'>
        {
          categoryList.map((category: any, idx: number) => {
            return (
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
                  <p>{category.name}</p>
                  <div className='arrow'> 이동 </div>
                </div>
              </Link>
            )
          })
        }
      </div>
    </OrderPageContainer>
  )
}
export default OrderPage;