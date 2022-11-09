import React from "react";
import Link from 'next/link'
import Head from "next/head";
import styled from '@emotion/styled'

const SplashContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 100%;
  
  background-color: yellow;

`

export default function IndexPage() {
  return (
    <SplashContainer>
      <Head>
        <title>Coffee</title>
        <meta name="description" content="Generate by create next app" />
        <link rel='icon' href='./public/images/free-icon-coffee-cup-3361135.png' />
      </Head>
      <div>
        안녕하세요
      </div>
    </SplashContainer>
  );
}