import React from "react";
import styled from "@emotion/styled";
import { IRegisterForm, ICheckTouched } from "../../pages/login/register";

const InputBoxContainer = styled.div`
  p {
    font-size: 20px;
    color: gray;
  } 
  
  input {
    width: 100%;
  }
`

const InputBox = (props: {
  title: string,
  type: string,
  name: string,
  setForm: Function,
  form: IRegisterForm,
  setTouched: Function,
  isTouched: ICheckTouched,
}) => {
  const { title, type, name, setForm, form, setTouched, isTouched } = props;

  const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    let { value } = e.currentTarget;
    setForm({
      ...form,
      [name]: value
    });
  };

  const blurHandler = (e: any) => {
    let { name } = e.currentTarget;
    setTouched({
      ...isTouched,
      [name]: true,
    })
  }

  return (
    <InputBoxContainer>
      <p>{title}</p>
      <input
        type={type}
        name={name}
        onChange={ changeHandler }
        onBlur={ blurHandler }
      />
    </InputBoxContainer>
  )
}

export default  InputBox;