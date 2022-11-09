import Head from "next/head";
import type { AppProps } from 'next/app'
import Navbar from "./posts/navbar";
import {Home_nav, Layout} from "./layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Home_nav />
        {/*<Navbar />*/}
        <Component {...pageProps} />
      </Layout>


    </>
  );
}
