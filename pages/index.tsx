import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import { Loading } from "@/components/common/loading";
import HeadComponent from "@/components/common/head";

export default function IndexPage() {
  const router = useRouter();
  const [firstPage, setFirstPage] = useState('login');

  // useEffect(() => {
  //
  //
  //
  //
  //   const timer = setTimeout(() =>
  //     router.push(firstPage).then(), 1000
  //   );
  //
  //   return () => {
  //     clearTimeout(timer);
  //   }
  // },[]);


  return (
    <div>
      <HeadComponent title='coffee' name='description' content='coffee app' />
      <Loading />
    </div>
  );
}

