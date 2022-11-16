import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { API } from "../../../../config";
import { InferGetStaticPropsType } from "next";
import MenuContainer from "./components/menuContainer";

const OrderMenuContainer = styled.div`
  .menu-container {
    //margin-top: 70px;
    
  }
  
  .image {
    width: 100%;
    height: 300px;
    object-fit: cover;
    background-color: #f9394e;
  }
  
  .menu-box {
    display: grid;
    grid-template-columns: 100px 1fr;
    align-items: center;
    height: 100px;
    border-bottom: 1px solid wheat;
    text-align: center;
    
    ul {
      display: flex;
      justify-content: space-between;
    }
  }
`

const OrderMenu = ({ categoryList }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const query = router.query;
  const { categoryIdx, menuIdx } = query;

  const category = categoryList[`${categoryIdx}`];
  if (!category) return;
  const menu = category.list[`${menuIdx}`];

  return (
    <OrderMenuContainer className='page-container'>
      <MenuContainer menu={menu} />
    </OrderMenuContainer>
  )
}
export default OrderMenu;

export async function getStaticProps() {
  const res = await fetch(`${API.ORDER}`);
  const categoryList = await res.json();

  return {
    props: {
      categoryList
    }
  }
}

