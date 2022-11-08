const postData = [
    { id: 1, title: "New Post", description: "Post data From Server"},
    { id: 2, title: "New Post", description: "Post data From Server"}
];

export default function Post(post: any) {
    return (
        <article>
            {post.map((p: any) => (
                <div>
                    <h1>{p.id}</h1>
                    <h1>{p.title}</h1>
                    <h1>{p.description}</h1>
                </div>
            ))}
        </article>
    )
}

export async function getStaticProps() {
    const post = postData;

    return {
        props: { post }
    }
}

export async function getStaticPaths() {

}