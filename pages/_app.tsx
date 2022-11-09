import Head from "next/head";
import type { AppProps } from 'next/app'
import Navbar from "./components/navbar";
import { Layout } from "./components/layout";
import { Global } from '@emotion/react';
import { global } from "../styles/global";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={global} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
