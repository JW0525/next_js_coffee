import Head from "next/head";
import React from "react";

const HeadComponent = (props: {title: string, name: string, content: string}) => {
  const { title, name, content } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name={name} content={content} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com"  />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet" />
    </Head>
  )
}

export default HeadComponent;