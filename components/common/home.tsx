const Home = (props: {posts: {title: string, description: string}}) => {
   const { posts } = props;
   return (
      <>
        <h1>{posts.title}</h1>
        <p>{posts.description}</p>
      </>
   )
}
export default Home;

export async function getStaticProps() {
    const posts = { title: "New Post", description: "Post data From Server"}

    return {
        props: {
            posts
        }
    }
}

