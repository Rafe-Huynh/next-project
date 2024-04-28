'use client'
import React from 'react'
import styles from "./page.module.css"
import Feed from '../components/Feed/Feed'
import Typewriter from 'typewriter-effect'
const Home = () => {
  
  return (
    <section className={styles.container}>
        <h1 className= {styles.head_text}>
        <Typewriter 
        onInit={(typeWriter) => {
          typeWriter
            .typeString('Welcome to PromptVille')
            .pauseFor(2000)
            .deleteAll()
            .typeString('Create - Discover - Share')
            .pauseFor(2000)
            .deleteAll()
            .start();
        }}
        options={{ loop: true }}
        />
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