import styled from "@emotion/styled";
import React from "react";

const Button = styled.button`
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: #2D82E8;
  border-radius: 26px;
  font-size: 15px;
  color: white;
  cursor: pointer;

`

const ButtonBox = (props: {
  content: string;
  type: 'button' | 'submit' | 'reset';
}) => {
  const { content, type } = props;

  return (
    <Button type={type}>
      {content}
    </Button>
  )
}

export default ButtonBox;