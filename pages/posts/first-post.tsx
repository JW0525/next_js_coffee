import Head from "next/head";
import { useEffect, useState } from "react";

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const FirstPost = () => {
  const [posts, setPosts] = useState({title: '', description: ''});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    // make some delay with sleep function.
    setLoading(true);
    sleep(1000).then(() => {
      setPosts({title: "New Post", description: "Post data From Server"})
      setLoading(false);
    })
  },[]);

  if (isLoading) return <p>Loading...</p>
  if (!posts.title) return <p>No Data Avaliable</p>

  return (
    <div>
      <Head>
        <title>Next.js Firt-post</title>
      </Head>
      <h1>{posts.title}</h1>
      <p>{posts.description}</p>
    </div>
  )
}

export default FirstPost;