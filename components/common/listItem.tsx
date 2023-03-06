import styled from "@emotion/styled";
import { FC, MouseEvent, ReactNode } from "react";

const ListItemContainer = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 50px;
  margin: 5px 0;
  padding: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  background-color: white;

  &:hover {
    background-color: #f4f4f4;
  }
`;

interface IListItemProps {
  children: ReactNode;
  onclick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const ListItem = (props: IListItemProps) => {
  return (
    <ListItemContainer onClick={props.onclick}>
      {props.children}
    </ListItemContainer>
  );
};

export default ListItem;
