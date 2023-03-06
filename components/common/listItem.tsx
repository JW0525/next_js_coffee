import styled from "@emotion/styled";
import { FC, ReactNode } from "react";

const ListItemContainer = styled.div`
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

  &:hover {
    background-color: #f4f4f4;
  }
`;

const ListItem: FC<{ children: ReactNode }> = ({ children }) => {
  return <ListItemContainer>{children}</ListItemContainer>;
};

export default ListItem;
