import styled from "@emotion/styled";
import {Layout} from "../../components/layout/layout";
import React, { useState } from "react";
import InputBox from "../../components/common/inputBox";

const LoginContainer = styled.div`
  width: 400px;
  padding: 0 20px;
  
  .find-password {
    margin-top: 10px;

    p {
      text-align: right;
      color: green;
    }
  }
`

const LoginBtn = styled.button`
  margin: 30px 0;
  padding: 15px 0;
  width: 100%;
  height: 100%;
  
`

const LoginPage = () => {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');

  return (
    <Layout>
      <LoginContainer>
        {/*<InputBox title='Email' type='id' setText={setId}/>*/}
        {/*<InputBox title='password' type='password' setText={setPwd}/>*/}

        <div className='find-password'>
          <p>Forgot password?</p>
        </div>

        <LoginBtn>
          안녕
        </LoginBtn>


      </LoginContainer>
    </Layout>
  )
};

export default LoginPage