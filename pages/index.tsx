import { useEffect } from "react";
import { useRouter } from "next/router";
import { Loading } from "@/components/common/loading";

export default function IndexPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/signin").then();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return <Loading />;
}
