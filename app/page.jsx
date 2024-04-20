import React from 'react'
import styles from "./page.module.css"
import Feed from '../components/Feed/Feed'
const Home = () => {
  return (
    <section className={styles.container}>
        <h1 className={`${styles.title} ${styles.head_text}`}>
          Discover And Share
        </h1>
        <p className={styles.desc}>
          Open-source AI prompting tool, Create and share creative prompts
        </p>
      <Feed/>
    </section>
  )
}

export default Home