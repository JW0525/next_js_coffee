import styled from "@emotion/styled";
import { MouseEvent, ReactNode } from "react";

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
  background-color: white;

  ${(props: IListItemContainerProps) =>
    props.isclickable
      ? {
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "#f4f4f4",
          },
        }
      : {}};
`;

interface IListItemContainerProps {
  isclickable: boolean;
}

interface IListItemProps {
  children: ReactNode;
  onclick?: (event: MouseEvent<HTMLButtonElement>) => void;
  isclickable?: boolean;
}

const ListItem = (props: IListItemProps) => {
  return (
    <ListItemContainer
      onClick={props.onclick}
      isclickable={props.isclickable ?? false}
    >
      {props.children}
    </ListItemContainer>
  );
};

export default ListItem;
