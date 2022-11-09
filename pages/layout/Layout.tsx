import Head from "next/head";
import navLinks from "../lib/navLinks";
import Link from "next/link";
import {FC, ReactNode} from "react";


export const Layout: FC<{children: ReactNode}> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <header>
        <div>Home Page Header</div>
        <main>{ children }</main>
        <footer>Footer</footer>
      </header>
    </div>
  )
}

export const Home_nav = () => {
  return (
    <nav>
      {
        navLinks.map((link, index) => {
          return (
            <ul key={link.name}>
              <Link href={
                { pathname: link.path,
                  query: {id: "2"}
                }}
              >
                <li>{link.name}</li>
              </Link>
            </ul>
          )
        })
      }
    </nav>
  )
}