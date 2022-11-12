import Link from "next/link";
import ButtonBox from "@/components/common/btn";
import React from "react";
import styled from "@emotion/styled";

const MainPageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  .btn-container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const MainPage = () => {

  return (
    <MainPageContainer>
      <div className='btn-container'>
        <Link className='link' href='login' style={{marginBottom: '20px'}}>
          <ButtonBox content='Log In' type='button' />
        </Link>
        <Link className='link' href='login/register'>
          <ButtonBox content='Register' type='button'/>
        </Link>
      </div>
    </MainPageContainer>
  )
}

export default MainPage;