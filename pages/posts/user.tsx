import useSWR from 'swr';
import {GetStaticProps, InferGetStaticPropsType} from "next";

// const fetcher = (...args: Parameters<typeof fetch>) =>
//   fetch(...args).then(res => res.json())

const fetcher = async (url: string) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error: any = new Error("An Error");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
}

const Users = ({ users }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { user, isLoading, isError } = getData();

  if (isError) return <div>Error fetching data</div>
  if (isLoading) return <div>...loading</div>

  return (
    <article>
      {
        users.map((u: {id: number, name: string}, idx: number) => (
          <div key={idx}>
            <h1>{u.name}</h1>
          </div>
        ))
      }
    </article>
  )
}

export default Users;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/users');
  const users = await res.json();

  return {
    props: {
      users
    }
  }
}

const getData = () => {
  const { data, error } = useSWR('http://localhost:3000/api/users', fetcher, {
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