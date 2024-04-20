"use client"
import { useState, useEffect } from 'react'
import React from 'react'
import styles from "./Feed.module.css"
import PromptCard from '../PromptCard/PromptCard'
const PromptCardList = ({data, handleTagClick}) =>{
  return (
    <div className={styles.cards}>
{data.map((post) => (
  <PromptCard 
  key={post._id}
  post = {post}
  handleTagClick={handleTagClick}
  />
))}

    </div>
  )
 }

const Feed = () => {
  
  const [allPosts, setAllPosts] = useState([])
  const handleTagClick = () => {
    
  };
  const fetchPosts = async () => {
    const response = await fetch("/api/prompt");
    const data = await response.json();

    setAllPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <section className={styles.container}>
      <form className={styles.form}>
            <input type='text'
            placeholder='Search for a tag ...'
            required
            className={styles.input}
            />
      </form>
      <PromptCardList 
      data = {allPosts}
      handleTagClick = {handleTagClick}
      />
    </section>
  )
}

export default Feed