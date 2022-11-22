import React from "react";
import styled from "@emotion/styled";

const InputBoxContainer = styled.div`
  input {
    width: 100%;
    height: 39px;
    border-bottom: 1px solid #a1a1a1;
    margin-bottom: 5px;
    color:#5F5E5E;
    font-size: 13px;
  }
`

const InputBox = (props: any) => {
  const { title, type, name, getFieldProps } = props;
  const { value, blurHandler, changeHandler } = getFieldProps(name);

  return (
    <InputBoxContainer>
      <input
        type={type}
        name={name}
        placeholder={title}
        value={value}
        onChange={ changeHandler }
        onBlur={ blurHandler }
      />
    </InputBoxContainer>
  )
}

export default  InputBox;