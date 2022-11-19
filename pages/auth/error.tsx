import {useEffect} from "react";
import { Loading } from "@/components/common/loading";
import {useRouter} from "next/router";
import {useSession} from "next-auth/react";


const Error = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated') {
      alert('등록되지 않은 아이디이거나 아이디 또는 비밀번호를 잘못 입력했습니다.')
      router.push('/login').then();
    }
  },[status]);

  return <Loading />
}

export default Error;