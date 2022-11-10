import styled from "@emotion/styled";
import InputBox from "@/components/common/inputBox";
import {Layout} from "@/components/layout/layout";
import {IRegisterForm, useForm} from "@/hooks/useForm";
import {regExp} from "../../utils/regExp";

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

const Register = () => {
  const validate = (values: IRegisterForm) => {
    const errors = { email: "", pwd: "", pwdCheck: "", name: "" }

    if (!values.email) errors.email = "이메일을 입력하세요"
    if (!regExp.email.test(values.email)) errors.email = "이메일은 aws@snaps.com 형식으로 입력해주세요"
    if (!values.pwd) errors.pwd = "비밀번호를 입력하세요"
    if (!regExp.pwd.test(values.pwd)) errors.pwd = "비밀번호는 8자 이상 영문, 숫자, 특수문자 조합으로 입력해주세요"
    if (!values.pwdCheck) errors.pwdCheck = "비밀번호를 입력해주세요"
    if (values.pwd !== values.pwdCheck) errors.pwdCheck = "비밀번호가 일치하지 않습니다"
    if (!values.name) errors.name = "사명을 입력하세요"
    if (!regExp.eng.test(values.name as string)) errors.name = "영어 이름을 입력해주세요"

    return errors
  }

  const { form, errors, isTouched, submitHandler, getFieldProps } = useForm({
  initialForm: { email: '', pwd: '', pwdCheck: '', name: ''},
    initialError: { email: '', pwd: '', pwdCheck: '', name: ''},
    initialIsTouched: { email: false, pwd: false, pwdCheck: false, name: false},
    validate
  });

  return (
    <Layout>
      <RegisterContainer>
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

          <SubmitBtn type="submit">Register</SubmitBtn>
        </form>
      </RegisterContainer>
    </Layout>

  )
}

export default Register;