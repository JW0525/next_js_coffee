import React, {useEffect, useState} from "react";
import { Loading } from "@/components/common/loading";
import HeadComponent from "@/components/common/head";
import styled from "@emotion/styled";
import Link from "next/link";


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


const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 44px;
  border-radius: 26px;
  background-color: ${(props) => props.color};
  color: white;
`

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
    if (loading) <Loading />

    return (
      <div className='btn-container'>
        <Link className='link' href='/login'>
          <Button color='green'>Log In</Button>
        </Link>
        <Link className='link' href='/login/register'>
          <Button color='green'>Register</Button>
        </Link>
      </div>
    )
  };

  return (
    <IndexContainer>
      <HeadComponent title='coffee' name='description' content='coffee app' />

      {
        main()
      }

    </IndexContainer>
  );
}

