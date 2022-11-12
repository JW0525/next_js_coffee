import styled from "@emotion/styled";
import React from "react";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border-radius: 26px;
  background-color: gray;
  color: white;
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