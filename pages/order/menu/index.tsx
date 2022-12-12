import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { API } from "../../../config";
import Navbar from "@/components/layout/navbar";
import { Loading } from "@/components/common/loading";
import getData from "../../api/lib/getData";
import { ICategoryData, IMenuData } from "../index";
import { IUserData } from "../../home";
import MenuBox from "./Components/MenuBox";

const OrderMenuPage = () => {
  const router = useRouter();
  const { categoryId, menuId } = router.query;
  const { data: session, status } = useSession();
  const { data: userData } = getData(`${API.USER}`);
  const { data: categoryData, isLoading} = getData(`${API.ORDER}`);

  // 로그인하지 않았을 시에는 로딩화면을 띄우고, 이후 login 페이지로 이동한다.
  useEffect(() => {
    switch (status) {
      case('loading'): return;

      case('unauthenticated'):
        const timer = setTimeout(() => {
          router.push('/login').then();
        }, 500);
        return () => clearTimeout(timer);

      default: return;
    }
  },[status]);

  if (status === 'unauthenticated' || isLoading) return <Loading/>

  const categoryList = categoryData[0].categoryList;

  const category = categoryList.find((list: ICategoryData) => list.id === Number(categoryId));
  const menu = category['list'].find((menu: IMenuData) => menu.id === Number(menuId));
  const [isCoupon, setIsCoupon] = useState(false);

  const submitFormHandler = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    const { email } = session?.user!;
    const userInfo = userData?.find((user: IUserData) => user.email === email);
    const minimumCoupon = 1;

    // 유저 정보에 쿠폰이 1 이하로 남아 있는 경우, 쿠폰으로 구매할 수 없다.
    if (userInfo.coupon < minimumCoupon && isCoupon) {
      alert('사용 가능한 쿠폰이 없습니다.');
      return;
    }

    await alert('구매가 완료되었습니다.');

    const reqBody = {
      menuId: menu.id,
      menuName: menu.name,
      option: 'ice',
      quantity: 1,
      totalPrice: isCoupon ? 0 : menu.price,
      status: 'preparing',
      userEmail: email,
      isCoupon
    }

    await fetch('/api/order/menu', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())

    router.push('/home').then()
  }

  return (
    <div className='page-container'>
      <Navbar text='안녕' />
      <MenuBox
        menu={menu as IMenuData}
        isCoupon={isCoupon}
        setIsCoupon={setIsCoupon}
        submitFormHandler={submitFormHandler}
      />
    </div>
  )
}

export default OrderMenuPage;



