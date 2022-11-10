import React from "react";
import styled from "@emotion/styled";

const InputBoxContainer = styled.div`
  p {
    font-size: 20px;
    color: gray;
  } 
  
  input {
    width: 100%;
  }
`

const InputBox = (props: any) => {
  const { title, type, name, getFieldProps } = props;
  const { value, blurHandler, changeHandler } = getFieldProps(name);

  return (
    <InputBoxContainer>
      <p>{title}</p>
      <input
        type={type}
        name={name}
        value={value}
        onChange={ changeHandler }
        onBlur={ blurHandler }
      />
    </InputBoxContainer>
  )
}

export default  InputBox;