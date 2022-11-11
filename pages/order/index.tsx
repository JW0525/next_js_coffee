import {InferGetStaticPropsType} from "next";
import styled from "@emotion/styled";
import Link from "next/link";

const ListBox = styled.div`
  .link {
    display: grid;
    grid-template-columns: 1fr 3fr 20px;
    align-items: center;
    height: 70px;
    cursor: pointer;

    background-color: yellow;

    .arrow {
      width: 20px;
    }
  }
`

const OrderPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { categoryList } = data;

  return (
    <div>
      {
        categoryList.map((category: any, idx: number) => {
          return (
            <ListBox key={idx}>
              <Link
                className='link'
                href={{
                  pathname: `/order/menu`,
                  query: { idx: idx, categoryName: `${category.name}` },
                }}
                as={`/order/menu?type=${category.name}`}
              >
                <img src='' alt='' />
                <p>{category.name}</p>
                <div className='arrow'> 이동 </div>
              </Link>
            </ListBox>
          )
        })
      }
    </div>
  )
}
export default OrderPage;

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/menu');
  const data = await res.json();

  return {
    props: {
      data
    }
  }
}

