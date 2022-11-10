import {useCallback, useEffect, useState} from "react";
import InputBox from "@/components/common/inputBox";
import {Layout} from "@/components/layout/layout";
import styled from "@emotion/styled";

const RegisterContainer = styled.div`
  width: 400px;
  padding: 0 20px;
`

const SubmitBtn = styled.button`
  margin: 30px 0;
  padding: 15px 0;
  width: 100%;
  height: 100%;
`

export interface IRegisterForm {
  email: string,
  pwd: string,
  pwdCheck?: string,
  name?: string
}

export interface ICheckTouched {
  email: boolean,
  pwd: boolean,
  pwdCheck?: boolean,
  name?: boolean
}

const Register = () => {
  const [form, setForm] = useState<IRegisterForm>({
    email: '',
    pwd: '',
    pwdCheck: '',
    name: ''
  });

  const [errors, setErrors] = useState({
    email: "",
    pwd: "",
    pwdCheck: "",
    name: ""
  });

  const [isTouched, setTouched] = useState<ICheckTouched>({
    email: false,
    pwd: false,
    pwdCheck: false,
    name: false
  })

  // 필드값을 검증한다.
  const validate = (values: IRegisterForm) => {
    const errors = { email: "", pwd: "", pwdCheck: "", name: "" }

    if (!values.email) errors.email = "이메일을 입력하세요"
    if (!values.pwd) errors.pwd = "비밀번호를 입력하세요"
    if (!values.pwdCheck) errors.pwdCheck = "비밀번호를 한 번 더 입력해주세요"
    if (!values.name) errors.name = "사명을 입력하세요"

    return errors
  }

  const submitHandler = useCallback(
    (e: any) => {
      e.preventDefault();

      const errors = validate(form);
      // 에러 값을 설정하고,
      setErrors(errors);
      // 잘못된 값이면 제출 처리를 중단한다.
      if (Object.values(errors).some(v => v)) {
        return
      }
    }, [form]
  );

  // 입력값에 따라 검증 함수를 실행하는 함수를 정의한다
  const runValidator = useCallback(() => validate(form), [form]);

  useEffect(() => {
    const errors = runValidator();
    setErrors(errors)
  }, [runValidator]);

  return (
    <Layout>
      <RegisterContainer>
        <form onSubmit={ submitHandler }>
          <InputBox
            title='email'
            type='email'
            name='email'
            setForm={setForm}
            form={form}
            setTouched={setTouched}
            isTouched={isTouched}
          />
          {isTouched.email && errors.email && <span>{errors.email}</span>}
          <InputBox
            title='비밀번호'
            type='password'
            name='pwd'
            setForm={setForm}
            form={form}
            setTouched={setTouched}
            isTouched={isTouched}
          />
          {isTouched.pwd && errors.pwd && <span>{errors.pwd}</span>}

          {/*<InputBox title='비밀번호 확인' type='password' keyName='pwdCheck' setForm={setForm} form={form} />*/}
          {/*<InputBox title='사명' type='text' keyName='name' setForm={setForm} form={form} />*/}
          <SubmitBtn type="submit">Register</SubmitBtn>
        </form>
      </RegisterContainer>
    </Layout>

  )
}

export default Register;