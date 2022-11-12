import {useRouter} from "next/router";
import styled from "@emotion/styled";
import {InferGetStaticPropsType} from "next";
import Navbar from "@/components/common/navbar";
import MenuContainer from "./components/menuContainer";

const OrderMenuContainer = styled.div`
  .menu-container {
    margin-top: 70px;
  }
  
  .image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .menu-box {
    display: grid;
    grid-template-columns: 100px 1fr;
    align-items: center;
    height: 100px;
    border-bottom: 1px solid wheat;
    cursor: pointer;
    text-align: center;
    
    ul {
      display: flex;
      justify-content: space-between;
    }
  }
`

const OrderMenu = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const query = router.query;
  const { categoryIdx, menuIdx } = query;

  const category = data.categoryList[`${categoryIdx}`];
  if (!category) return;
  const menu = category.list[`${menuIdx}`];

  return (
    <OrderMenuContainer className='page-container'>
      <Navbar text='preference' />
      <MenuContainer menu={menu} />
    </OrderMenuContainer>
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

