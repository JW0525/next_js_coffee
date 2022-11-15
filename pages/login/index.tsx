import React from "react";
import styled from "@emotion/styled";
import ButtonBox from "@/components/common/btn";
import {regExp} from "../../utils/regExp";
import InputBox from "@/components/common/inputBox";
import Navbar from "@/components/common/navbar";
import {IRegisterForm, useForm} from "utils/hooks/useForm";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/dist/client/router";

const LoginPageContainer = styled.div`
  display: flex;
  align-items: center;

  form {
    width: 100%;

    .find-password {
      margin-top: 10px;

      p {
        text-align: right;
        color: green;
      }
    }
  }
`

const LoginPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const validate = (values: IRegisterForm) => {

    const errors = { email: "", pwd: "" }

    if (!values.email) errors.email = "이메일을 입력하세요"
    if (!regExp.email.test(values.email)) errors.email = "이메일은 aws@snaps.com 형식으로 입력해주세요"
    if (!values.pwd) errors.pwd = "비밀번호를 입력하세요"
    if (!regExp.pwd.test(values.pwd)) errors.pwd = "비밀번호는 8자 이상 영문, 숫자, 특수문자 조합으로 입력해주세요"

    return errors
  }

  const { form, errors, isTouched, submitHandler, getFieldProps } = useForm({
    initialForm: { email: '', pwd: '' },
    initialError: { email: '', pwd: '' },
    initialIsTouched: { email: false, pwd: false },
    validate
  });


  if (status === "authenticated") {
    router.push("/order");
    return (
      <div>
        <h1>Sign Up</h1>
        <div>You are already signed up.</div>
        <div>Now redirect to main page.</div>
      </div>
    );
  }

  return (
    <LoginPageContainer className='page-container'>
      <Navbar text='LogIn' />
      <form onSubmit={ submitHandler }>
        <InputBox
          title='이메일'
          type='email'
          name='email'
          getFieldProps={getFieldProps}
        />
        {isTouched.email && errors.email && <span>{errors.email}</span>}
        <InputBox
          title='비밀번호'
          type='password'
          name='pwd'
          getFieldProps={getFieldProps}
        />
        {isTouched.pwd && errors.pwd && <span>{errors.pwd}</span>}
        <div className='find-password'>
          <p>Forgot password?</p>
        </div>
        <ButtonBox content='Log In' type="submit" />
      </form>
    </LoginPageContainer>
  )
};

export default LoginPage