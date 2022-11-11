export interface IHome {
  title: string,
  description: string
}


const HomePage = (props: {
  posts: IHome
}) => {
  const { posts } = props;

  return (
    <>
      <h1>{posts.title}</h1>
      <p>{posts.description}</p>
    </>
  )
}
export default HomePage;

export async function getStaticProps() {
  const posts = { title: "New Post", description: "Post data From Server"}
  //   const res = await fetch('http://localhost:3000/api/users');
  //   const users = await res.json();

  return {
    props: {
      posts
    }
  }
}
