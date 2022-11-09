import {GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType} from 'next'
import { getAllPost } from '../lib/helper';
import {useRouter} from "next/router";

const Post = ({posts}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <article>
            <button onClick={() => router.push('/posts/user')}>
                post
            </button>
            {posts.map((post: any) => (
                <div key={post.id}>
                    <h1>{post.id}</h1>
                    <h1>{post.title}</h1>
                    <h1>{post.description}</h1>
                </div>
            ))}
        </article>
    )
}

export default Post;

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
    // https://kkj6670.github.io/board/typescript/getStaticProps-typescript 참조
    const id = params?.id?.toString() || '';
    const posts = getAllPost(id);

    return {
        props: {
            posts
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = getAllPost();
    const paths = posts.map(post => ({
        params: { id: post.id.toString() }
    }))

    return {
        paths,
        fallback: false
    }
}