import {useRouter} from "next/router";
import {InferGetStaticPropsType} from "next";
import styled from "@emotion/styled";
import Link from "next/link";

const ListBox = styled.div`
  display: grid;
  grid-template-columns: 3.5fr 6.5fr;
  align-items: center;
  height: 85px;
  cursor: pointer;

  background-color: skyblue;
`

const OrderCategory = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const query = router.query;
  const { categoryIdx } = query;

  const category = data.categoryList[`${categoryIdx}`];
  if (!category) return;

  const { list } = category;
  const pathname = '/order/menu';

  return (
    <div>
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
              as={`${pathname}?name=${menu.name}`}
              key={idx}
            >
              <ListBox>
                <img src='' alt='' />
                <p>{menu.name}</p>
              </ListBox>
            </Link>
          )
        })
      }
    </div>
  )
}

export default OrderCategory;

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/menu');
  const data = await res.json();

  return {
    props: {
      data
    }
  }
}

