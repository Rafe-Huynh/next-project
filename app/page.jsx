import React from 'react'
import styles from "./page.module.css"
import Feed from '../components/Feed/Feed'
const Home = () => {
  
  return (
    <section className={styles.container}>
        <h1 className= {styles.head_text}>
        Create - Discover - Share
        </h1>
        <p className={styles.desc}>
        PromptVille is your gateway to endless possibilities. 
        So, what will you create today? Let your imagination soar and embark on your next creative journey in the heart of PromptVille
        </p>
      <Feed/>
    </section>
  )
}

export default Home