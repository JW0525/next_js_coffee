import styled from "@emotion/styled";
import { FC, ReactNode } from "react";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 100%;
  padding: 5px 20px 0;
  overflow: scroll;
`;
const List: FC<{ children: ReactNode }> = ({ children }) => {
  return <ListContainer>{children}</ListContainer>;
};

export default List;
