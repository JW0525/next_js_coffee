import styled from "@emotion/styled";
import React from "react";

const Button = styled.button`
  justify-content: center;
  width: 90%;
  height: 50px;
  border-radius: 26px;
  background-color: #2D82E8;
  color: white;
  cursor: pointer;
  position: fixed;
  bottom: 25px;
  left: 5%;
  font-size: 15px;
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