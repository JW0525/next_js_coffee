import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { API } from "../../../config";
import Navbar from "@/components/layout/navbar";
import { Loading } from "@/components/common/loading";
import getData from "../../../lib/getData";
import { IMenuData } from "../index";
import { IUserData } from "../../home";
import MenuBox from "./Components/MenuBox";

const OrderMenuPage = () => {
  const router = useRouter();
  const { categoryId, menuId } = router.query;
  const { data: session, status } = useSession();
  const { data: userData } = getData(`${API.USER}`);
  const { data: categoryData } = getData(`${API.ORDER}`);
  const categoryList = categoryData[0].categoryList;
  const [isCoupon, setIsCoupon] = useState(false);

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

  if (status === 'unauthenticated') {
    return (
      <Loading/>
    )
  }

  const category = categoryList.find((list:any) => {
    return list.id === Number(categoryId)
  });
  const menu = category['list'].find((menu:any) => menu.id === Number(menuId));

  const submitFormHandler = async (event: React.MouseEvent<HTMLElement>) => {
    const { email } = session?.user!;
    event.preventDefault();

    const userInfo = userData?.find((user: IUserData) => user.email === email);
    // 유저 정보에 쿠폰이 1 이하로 남아 있는 경우, 쿠폰으로 구매할 수 없다.
    if (userInfo.coupon < 1 && isCoupon) {
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
      .then(data => console.log(data))

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



