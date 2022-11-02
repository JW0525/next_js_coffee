import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {

  const title = `이것은 SEO 용 타이틀`;

  useEffect(() => {
    fetch('api/hello')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(`json ==>`, json);
      })
  }, [])


  return (
    <div className={styles.container}>
      Hello Next.js !
    </div>
  )
}
