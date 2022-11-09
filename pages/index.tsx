import React from "react";
import Link from 'next/link'
import Head from "next/head";
import styled from '@emotion/styled'
import Image from 'next/image'
import coffeeImage from '../public/images/free-icon-coffee-cup-3361135.png'

const SplashContainer = styled.div`
  .contents {
    > h1 {
      border-top: 2px solid black;
      margin-top: 10px;
      padding-top: 2px;
    }
  }
`

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Coffee</title>
        <meta name="description" content="Generate by create next app" />
        {/*<link rel='icon' href='./public/images/free-icon-coffee-cup-3361135.png' />*/}
      </Head>

      <SplashContainer>
        <div className='contents'>
          <Image
            src={coffeeImage}
            alt='coffee image'
            width={75}
            height={75}
          />
          <h1>CoffeeTEK</h1>
        </div>
      </SplashContainer>
    </>
  );
}