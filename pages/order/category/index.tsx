import {useRouter} from "next/router";
import Link from "next/link";
import styled from "@emotion/styled";
import { InferGetStaticPropsType, NextApiResponse } from "next";
import { API } from "config";
import Navbar from "@/components/layout/navbar";
import getData from "../../lib/getData";


const OrderCategoryContainer = styled.div`
  .menu-list-container {
    margin-top: 70px;

    .menu-list-box {
      display: grid;
      grid-template-columns: 100px 1fr;
      align-items: center;
      height: 100px;
      border-bottom: 1px solid wheat;
      cursor: pointer;
    }
  }
`

const OrderCategory = () => {
  const { data: categoryList, isLoading, isError } = getData(`${API.ORDER}`);
  const router = useRouter();
  const query = router.query;
  const { categoryIdx } = query;

  const category = categoryList[`${categoryIdx}`];
  if (!category) return;

  const { list } = category;
  const pathname = '/order/category/menu';

  return (
    <OrderCategoryContainer className='page-container'>
      <Navbar text={category.name.toUpperCase()} />
      <div className='menu-list-container'>
        {
          list.map((menu: any, idx: number) => {
            return (
              <Link
                className='link'
                href={{
                  pathname: pathname,
                  query: {
                    categoryIdx: categoryIdx,
                    menuIdx: idx
                  },
                }}
                as={`/order/category?type=${category.name}/menu?name=${menu.name}`}
                key={idx}
              >
                <div className='menu-list-box'>
                  <img src='' alt='' />
                  <p>{menu.name}</p>
                </div>
              </Link>
            )
          })
        }
      </div>
    </OrderCategoryContainer>
  )
}

export default OrderCategory;