import {GetStaticProps, InferGetStaticPropsType} from "next";
import getData from "pages/lib/getData";

// const Users = ({ users }: InferGetStaticPropsType<typeof getStaticProps>) => {
const Users = () => {
  const { user, isLoading, isError } = getData('http://localhost:3000/api/users');

  if (isError) return <div>Error fetching data</div>
  if (isLoading) return <div>...loading</div>

  return (
    <article>
      {
        user.map((u: {id: number, name: string}, idx: number) => (
          <div key={idx}>
            <h1>{u.name}</h1>
          </div>
        ))
      }
    </article>
  )
}

export default Users;

// export const getStaticProps: GetStaticProps = async () => {
//   const res = await fetch('http://localhost:3000/api/users');
//   const users = await res.json();
//
//   return {
//     props: {
//       users
//     }
//   }
// }
