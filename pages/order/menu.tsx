import {useRouter} from "next/router";
import {InferGetStaticPropsType} from "next";
import styled from "@emotion/styled";
import Link from "next/link";


const OrderMenu = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const query = router.query;
  const { categoryIdx, menuIdx } = query;

  const category = data.categoryList[`${categoryIdx}`];
  if (!category) return;
  const menu = category.list[`${menuIdx}`];

  return (
    <div>
      <div>{menu.name}</div>
      <ul>
        {
          menu.option.map((option: string, idx: number) => {
            return <li key={idx}>{option}</li>
          })
        }
      </ul>
      <div>{menu.price}</div>
    </div>
  )
}

export default OrderMenu;

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/menu');
  const data = await res.json();

  return {
    props: {
      data
    }
  }
}

