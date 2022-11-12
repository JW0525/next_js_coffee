import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import { Loading } from "@/components/common/loading";
import HeadComponent from "@/components/common/head";
import styled from "@emotion/styled";
import Link from "next/link";
import ButtonBox from "@/components/common/btn";

const IndexContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 30px;

  .btn-container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export default function IndexPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() =>
      setLoading(false), 1000
    );

    return () => {
      clearTimeout(timer);
      setLoading(true);
    }
  },[]);


  const main = () => {
    if (loading) return <Loading />

    // 로그인이 되어 있다면 주문페이지로 이동한다.
    if (true) router.push('order');

    return (
      <div className='btn-container'>
        <Link className='link' href='login' style={{marginBottom: '20px'}}>
          <ButtonBox content='Log In' type='button' />
        </Link>
        <Link className='link' href='login/register'>
          <ButtonBox content='Register' type='button'/>
        </Link>
      </div>
    )
  };

  return (
    <IndexContainer>
      <HeadComponent title='coffee' name='description' content='coffee app' />
      { main() }
    </IndexContainer>
  );
}

