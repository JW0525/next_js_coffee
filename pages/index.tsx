import React, { useEffect } from "react";
import {useRouter} from "next/router";
import { Loading } from "@/components/common/loading";
import HeadComponent from "@/components/common/head";
import { useSession } from "next-auth/react";

export default function IndexPage() {
  const router = useRouter();
  const { data: session, status } = useSession();

  const CheckLogin = () => {
    // if (session) {
    //   router.push('/order').then();
    // } else {
      router.push('/login').then();
    // }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      CheckLogin();
    }, 1000);

    return () => clearTimeout(timer);
  },[]);

  return (
    <div>
      <HeadComponent title='coffee' name='description' content='coffee app' />
      <Loading />
    </div>
  );
}

