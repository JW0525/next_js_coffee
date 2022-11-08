import React from "react";
import Link from 'next/link'
import Head from "next/head";

export default function IndexPage() {
  return (
    <div>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generate by create next app" />
            <link rel='icon' href='/favicon.ico' />
        </Head>

        <Link href="posts/first-post">
            Learn Next.JS.
        </Link>
    </div>
  );
}