import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Navbar from "@/components/layout/navbar";
import {useSession} from "next-auth/react";
import getData from "../api/lib/getData";
import {API} from "../../config";
import React, {useEffect} from "react";
import {Loading} from "@/components/common/loading";

const MyPageContainer = styled.div`
  .user-info-container {
    margin-top: 90px;
  }
`

const MyPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { data: userData, isLoading, isError } = getData(`${API.USER}`);
  const { data: orderData } = getData(`${API.ORDER_HISTORY}`);

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
  if (!userData || !session || ! orderData) return;

  const { email } = session.user!;
  const userInfo = userData?.find((user: any) => user.email === email);
  const userOrder = orderData?.filter((order: any) => order.userEmail === email).reverse();

  return (
    <MyPageContainer className='page-container'>
      <Navbar text='my Page'/>

      <div className='user-info-container'>
        <p>이메일: {userInfo.email}</p>
        <p>사명: {userInfo.name}</p>
        <p>생일: {userInfo.birthDate}</p>
        <p>쿠폰: {userInfo.coupon}</p>
        <p>구매금액: {userInfo.amounts} (쿠폰으로 구매한 금액은 제외됩니다.)</p>
      </div>

      <div>
        <h1>주문 내역</h1>
        {
          userOrder.map((order: any, idx: number) => {
            return (
              <div key={idx}>
                <div>{order.createdAt}</div>
                <div>{order.menuName}, {order.option}</div>
                <div>{order.quantity}</div>
                <div>{order.totalPrice}</div>
                <div>{order.status}</div>
              </div>
            )
          })
        }
      </div>
    </MyPageContainer>
  )
}
export default MyPage;
