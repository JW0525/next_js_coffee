import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { API } from "../../../config";
import { InferGetStaticPropsType } from "next";
import MenuContainer from "./components/menuContainer";
import Navbar from "@/components/layout/navbar";
import { useSession } from "next-auth/react";
import { Loading } from "@/components/common/loading";
import {useEffect} from "react";

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
  let { categoryId, menuId } = router.query;
  const { data: session, status } = useSession();

  const category = categoryList.find((list:any) => list.id === Number(categoryId));
  if (!category) return;

  const { list } = category;
  const menu = list.find((menu:any) => menu.id === Number(menuId));

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

  if (status === 'unauthenticated') return <Loading/>

  return (
    <OrderMenuContainer className='page-container'>
      <Navbar text='안녕' />
      <MenuContainer menu={menu} />
    </OrderMenuContainer>
  )
}

export default OrderMenu;

export async function getStaticProps() {
  const res = await fetch(`${API.ORDER}`);
  const data = await res.json();

  return {
    props: {
      categoryList: data[0].categoryList
    }
  }
}

