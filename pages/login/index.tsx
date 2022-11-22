import React from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import styled from "@emotion/styled";
import { IRegisterForm, useValidateForm } from "utils/hooks/useValidateForm";
import { regExp } from "../../utils/regExp";
import ButtonBox from "@/components/common/btn";
import InputBox from "@/components/common/inputBox";
import Navbar from "@/components/layout/navbar";
import { Loading } from "@/components/common/loading";
import Link from "next/link";

const LoginPageContainer = styled.div`
  display: block;
  padding:  0 30px;

  .login_title {
    margin-top: 94px;

    > h2 {
      width: 100%;
      height: 62px;
      font-size: 26px;
      font-weight: bold;
      text-align: left;
      color: #000000;
    }

    > span {
      display: block;
      font-size: 26px;
      line-height: 30px;

      &:last-child {
        font-size: 12px;
        padding-top: 10px;
      }
    }

  }

  form {
    width: 100%;
    margin-top: 70px;

    .find-password {
      margin-top: 10px;
      text-align: center;

     > a {
        color:#000;
       font-size: 14px;
       text-decoration: auto;
       
      }
      
      > span {
        padding: 0 12px;
      }
    }

    .error {
      color: #f02222 !important;
      font-size: 12px;
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

  const { form, errors, isTouched, submitHandler, getFieldProps } = useValidateForm({
    initialForm: { email: '', pwd: '' },
    initialError: { email: '', pwd: '' },
    initialIsTouched: { email: false, pwd: false },
    validate,
    type: 'logIn'
  });

  if (status === "authenticated") router.push("/home").then();
  if (status !== 'unauthenticated') return <Loading />

  return (
    <LoginPageContainer className='page-container'>
      {/*<Navbar text='LogIn' />*/}
      <div className="login_title">
        <h2>로그인</h2>
        <span>안녕하세요 <br/>아미벅스 입니다. </span>
        <span>회원 서비스 이용을 위해 로그인 해주세요.</span>
      </div>
      <form onSubmit={ submitHandler }>
        <InputBox
          title='이메일'
          type='email'
          name='email'
          getFieldProps={getFieldProps}
        />
        {isTouched.email && errors.email && <span className="error">{errors.email}</span>}
        <InputBox
          title='비밀번호'
          type='password'
          name='pwd'
          getFieldProps={getFieldProps}
        />
        {isTouched.pwd && errors.pwd && <span className="error">{errors.pwd}</span>}
        <div className='find-password'>
          <Link href="">아이디 찾기</Link>
          <span>|</span>
          <Link href="">비밀번호 찾기</Link>
          <span>|</span>
          <Link href="/login/register">회원가입 하기</Link>
        </div>
        <ButtonBox content='로그인' type="submit" />
      </form>
    </LoginPageContainer>
  )
};

export default LoginPage
