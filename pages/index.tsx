import React, {useEffect, useState} from "react";
import { Loading } from "@/components/common/loading";
import HeadComponent from "@/components/common/head";
import styled from "@emotion/styled";
import Link from "next/link";
import ButtonBox from "@/components/common/btn";


const IndexContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 400px;
  
  .btn-container {
    width: 80%;
    display: flex;
    flex-direction: column;
  }
`;

export default function IndexPage() {
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

    return (
      <div className='btn-container'>
        <Link className='link' href='/login'>
          <ButtonBox content='Log In' type='button'/>
        </Link>
        <Link className='link' href='/login/register'>
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

