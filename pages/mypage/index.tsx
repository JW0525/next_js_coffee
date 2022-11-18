import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Navbar from "@/components/layout/navbar";
import {useSession} from "next-auth/react";
import getData from "@/lib/getData";
import {API} from "../../config";
import React, {useEffect} from "react";
import {Loading} from "@/components/common/loading";

const MyPageContainer = styled.div`
  .user-info-container {
    margin-top: 90px;
  }
`

const OrderPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { data, isLoading, isError } = getData(`${API.MYPAGE}`);

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

  if (!data || !session) return;
  const { user } = session;
  const userInfo = data?.find((user: any) => user.email === user.email)

  return (
    <MyPageContainer className='page-container'>
      <Navbar text='my Page'/>
      <div className='user-info-container'>

        <p>{userInfo.email}</p>
        <p>{userInfo.name}</p>
        <p>{userInfo.birthDate}</p>
        <p>{userInfo.coupon}</p>

      </div>
    </MyPageContainer>
  )
}
export default OrderPage;
