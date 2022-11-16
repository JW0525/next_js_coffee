import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import { Loading } from "@/components/common/loading";
import HeadComponent from "@/components/common/head";

export default function IndexPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [firstPage, setFirstPage] = useState('home');

  useEffect(() => {
    // Hydration failed because the initial UI does not match what was rendered on the server.
    // 위의 문구를 피하기 위해서는 useState 를 이용해 초기값을 설정하고, 후에 useEffect 안에서 바꿔주는 방법을 택해야 한다.
    if (true) setFirstPage('home');

    const timer = setTimeout(() =>
      setLoading(false), 1000
    );

    return () => {
      clearTimeout(timer);
      setLoading(true);
    }
  },[]);

  const main = () => {
    if (loading) return <Loading />

    router.push(firstPage).then();
  };


  return (
    <div>
      <HeadComponent title='coffee' name='description' content='coffee app' />
      { main() }
    </div>
  );
}

