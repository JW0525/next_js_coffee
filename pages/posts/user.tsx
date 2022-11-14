import {GetStaticProps, InferGetStaticPropsType} from "next";
import getData from "pages/lib/getData";
import {Loading} from "@/components/common/loading";

// const Users = ({ users }: InferGetStaticPropsType<typeof getStaticProps>) => {
const Users = () => {
  const { data, isLoading, isError } = getData('http://localhost:3000/api/users');

  if (isError) return <div>Error fetching data</div>
  if (isLoading) return <Loading />

  return (
    <article>
      {
        data.map((u: {id: number, name: string}, idx: number) => (
          <div key={idx}>
            <h1>{u.name}</h1>
          </div>
        ))
      }
    </article>
  )
}

export default Users;