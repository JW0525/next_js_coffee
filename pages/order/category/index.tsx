import {useRouter} from "next/router";
import {InferGetStaticPropsType, NextApiResponse} from "next";
import styled from "@emotion/styled";
import Link from "next/link";
import Navbar from "@/components/common/navbar";
import { API } from "config";

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

const OrderCategory = ({ categoryList }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const query = router.query;
  const { categoryIdx} = query;

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
                as={`/order/category/?type=${category.name}/menu?name=${menu.name}`}
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

export async function getStaticProps() {
  const res = await fetch(`${API.ORDER}`);
  const categoryList = await res.json();

  return {
    props: {
      categoryList
    }
  }
}

