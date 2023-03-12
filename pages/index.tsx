import { useEffect } from "react";
import { useRouter } from "next/router";

export default function IndexPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/signin").then();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <p>로그인 페이지로 이동합니다.</p>
    </div>
  );
}
