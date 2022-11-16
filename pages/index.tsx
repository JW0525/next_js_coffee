import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import HeadComponent from "@/components/common/head";
import { Loading } from "@/components/common/loading";

export default function IndexPage() {
  const router = useRouter();
  const { data: session, status } = useSession();

  const CheckLogin = () => {
    if (status === 'authenticated') {
      router.push('/home').then();
    } else {
      router.push('/home').then();
    }
  }

  useEffect(() => {
    if (status === 'loading') return;

    const timer = setTimeout(() => {
      CheckLogin();
    }, 1000);

    return () => clearTimeout(timer);
  },[status]);

  return (
    <div>
      <HeadComponent title='coffee' name='description' content='coffee app' />
      <Loading />
    </div>
  );
}

