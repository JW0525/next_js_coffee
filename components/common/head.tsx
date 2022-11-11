import Head from "next/head";
import React from "react";

const HeadComponent = (props: {title: string, name: string, content: string}) => {
  const { title, name, content } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name={name} content={content} />
      {/*<link rel='icon' href='./public/images/free-icon-coffee-cup-3361135.png' />*/}
    </Head>
  )
}

export default HeadComponent;