import useSWR from "swr";
import fetcher from "./fetch";

export default function getData (url: string) {
  const { data, error } = useSWR(url, fetcher, {
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      if (error.status === 404) return;
      if (key === '/api/user') return;
      if (retryCount >= 10) return;
      setTimeout(() => revalidate({ retryCount }), 5000);
    }
  });
  return {
    user: data,
    isLoading: (!error && !data),
    isError: error
  }
}