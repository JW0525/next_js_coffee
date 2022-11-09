import React from "react";
import styled from "@emotion/styled";

const InputBoxContainer = styled.div`
  padding: 0 30px;
  
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
  setText: Function
}) => {
  const { title, type, setText } = props;

  const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value;
    console.log(value);
    setText(value);
  };

  return (
    <InputBoxContainer>
      <p>{title}</p>
      <input
        type={type}
        onChange={changeHandler}
      />
    </InputBoxContainer>
  )
}

export default  InputBox;