import styled from "@emotion/styled";
import Image from "next/image";
import coffeeImage from "../../public/asset/img/free-animated-icon-coffee-cup-6172528.gif";
import React from "react";

const LoadingContainer = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-items: center;
  align-items: center;
  justify-content: center;

  .contents {
    > h2 {
      border-top: 2px solid black;
      margin-top: 10px;
      padding-top: 2px;
    }
  }
`;

export const Loading = () => {
  return (
    <LoadingContainer>
      <div className="contents">
        <Image
          src={coffeeImage}
          alt="coffee image"
          width={75}
          height={75}
          priority
        />
        <h2>loading...</h2>
      </div>
    </LoadingContainer>
  );
};
