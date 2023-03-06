import styled from "@emotion/styled";
import React from "react";

export const Button = styled.button`
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: #2d82e8;
  border-radius: 26px;
  font-size: 15px;
  color: white;
  cursor: pointer;
  margin: 20px 0 0 0;
`;

const ButtonBox = (props: {
  content: string;
  type: "button" | "submit" | "reset";
}) => {
  const { content, type } = props;

  return <Button type={type}>{content}</Button>;
};

export default ButtonBox;
