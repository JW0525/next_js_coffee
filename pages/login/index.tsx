import React from "react";
import styled from "@emotion/styled";
import ButtonBox from "@/components/common/btn";
import {Layout} from "../../components/layout/layout";
import {IRegisterForm, useForm} from "@/hooks/useForm";
import {regExp} from "../../utils/regExp";
import InputBox from "@/components/common/inputBox";

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

const LoginPage = () => {
  const validate = (values: IRegisterForm) => {
    const errors = { email: "", pwd: "", pwdCheck: "", name: "" }

    if (!values.email) errors.email = "이메일을 입력하세요"
    if (!regExp.email.test(values.email)) errors.email = "이메일은 aws@snaps.com 형식으로 입력해주세요"
    if (!values.pwd) errors.pwd = "비밀번호를 입력하세요"

    return errors
  }

  const { form, errors, isTouched, submitHandler, getFieldProps } = useForm({
    initialForm: { email: '', pwd: ''},
    initialError: { email: '', pwd: ''},
    initialIsTouched: { email: false, pwd: false},
    validate
  });

  return (
    <Layout>
      <LoginContainer>
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

          {/*<div className='find-password'>*/}
          {/*  <p>Forgot password?</p>*/}
          {/*</div>*/}
          <ButtonBox content='Log In' type="submit" />
        </form>
      </LoginContainer>
    </Layout>
  )
};

export default LoginPage