import type { AppProps } from 'next/app'
import { Global } from '@emotion/react';
import { global } from "../styles/global";
import {Layout} from "@/components/layout/layout";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Global styles={global} />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
