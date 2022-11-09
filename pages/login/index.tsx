import styled from "@emotion/styled";
import {Layout} from "../components/layout";
import React, { useState } from "react";
import InputBox from "../components/InputBox";

const LoginContainer = styled.div`
  width: 400px;
  
  .find-password {
    margin-top: 10px;

    p {
      text-align: right;
      color: green;
    }
  }
`

const LoginPage = () => {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');

  return (
    <Layout>
      <LoginContainer>
        <InputBox title='Email' type='id' setText={setId}/>
        <InputBox title='password' type='password' setText={setPwd}/>

        <div className='find-password'>
          <p>Forgot password?</p>
        </div>

      </LoginContainer>
    </Layout>
  )
};

export default LoginPage