import styled from "@emotion/styled";
import Image from "next/image";
import coffeeImage from "../../public/asset/images/free-animated-icon-coffee-cup-6172528.gif";
import React from "react";

const LoadingContainer = styled.div`
  .contents {
    > h1 {
      border-top: 2px solid black;
      margin-top: 10px;
      padding-top: 2px;
    }
  }
`

export const Loading = () => {
  return (
    <LoadingContainer>
      <div className='contents'>
        <Image
          src={coffeeImage}
          alt='coffee image'
          width={75}
          height={75}
          priority
        />
        <h1>CoffeeTEK</h1>
      </div>
    </LoadingContainer>
  )
}

