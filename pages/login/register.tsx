import React from "react";
import styled from "@emotion/styled";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { regExp } from "../../utils/regExp";
import { IRegisterForm, useValidateForm } from "@/hooks/useValidateForm";
import InputBox from "@/components/common/inputBox";
import ButtonBox from "@/components/common/btn";
import Navbar from "@/components/layout/navbar";
import {Loading} from "@/components/common/loading";

const LoginRegisterPageContainer = styled.div`
  display: flex;
  align-items: center;

  form {
    width: 100%;
  }
`

const LoginRegisterPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const validate = (values: IRegisterForm) => {
    const errors = { email: "", pwd: "", pwdCheck: "", name: "", birthDate: "" }

    if (!values.email) errors.email = "이메일을 입력하세요"
    if (!regExp.email.test(values.email)) errors.email = "이메일은 aws@snaps.com 형식으로 입력해주세요"
    if (!values.pwd) errors.pwd = "비밀번호를 입력하세요"
    if (!regExp.pwd.test(values.pwd)) errors.pwd = "비밀번호는 8자 이상 영문, 숫자, 특수문자 조합으로 입력해주세요"
    if (!values.pwdCheck) errors.pwdCheck = "비밀번호를 입력해주세요"
    if (values.pwd !== values.pwdCheck) errors.pwdCheck = "비밀번호가 일치하지 않습니다"
    if (!values.name) errors.name = "사명을 입력하세요"
    if (!regExp.eng.test(values.name as string)) errors.name = "영어 이름을 입력해주세요"
    if (!values.birthDate) errors.birthDate = "생일을 입력하세요"

    return errors
  }

  const { form, errors, isTouched, submitHandler, getFieldProps } = useValidateForm({
  initialForm: { email: '', pwd: '', pwdCheck: '', name: '', birthDate: "" },
    initialError: { email: '', pwd: '', pwdCheck: '', name: '', birthDate: "" },
    initialIsTouched: { email: false, pwd: false, pwdCheck: false, name: false, birthDate: false },
    validate,
    type: 'register'
  });

  if (status === "authenticated") router.push("/home").then();
  if (status !== 'unauthenticated') return <Loading />

  return (
    <LoginRegisterPageContainer className='page-container'>
      <Navbar text='Register' />
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
        <InputBox
          title='비밀번호 확인'
          type='password'
          name='pwdCheck'
          getFieldProps={getFieldProps}
        />
        {isTouched.pwdCheck && errors.pwdCheck && <span>{errors.pwdCheck}</span>}
        <InputBox
          title='사명'
          type='text'
          name='name'
          getFieldProps={getFieldProps}
        />
        {isTouched.name && errors.name && <span>{errors.name}</span>}
        <InputBox
          title='생일'
          type='date'
          name='birthDate'
          getFieldProps={getFieldProps}
        />
        {isTouched.birthDate && errors.birthDate && <span>{errors.birthDate}</span>}

        <ButtonBox content='Register' type="submit" />
      </form>
    </LoginRegisterPageContainer>
  )
}

export default LoginRegisterPage;