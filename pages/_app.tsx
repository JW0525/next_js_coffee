import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { global } from "../styles/global";
import { Global } from "@emotion/react";
import { Layout } from "@/components/layout/layout";
import { RecoilRoot } from "recoil";
import "antd/dist/reset.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={true} />
          <SessionProvider session={pageProps.session}>
            <Layout>
              <Global styles={global} />
              <Component {...pageProps} />
            </Layout>
          </SessionProvider>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}
