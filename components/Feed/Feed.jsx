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
  const [searchText, setSearchText] = useState("")
  const [searchTimeout, setSearchTimeout] = useState(null)
  const [searchedResults, setSearchedResults] = useState([])
  
  const fetchPosts = async () => {
    const response = await fetch("/api/prompt");
    const data = await response.json();

    setAllPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  const filterPrompts = (searchText) => {
    const regex = new RegExp(searchText, "i")// i flag for case insensitive search
    return allPosts.filter((item) => 
      regex.test(item.creator.username) || regex.test(item.tag) || regex.test(item.prompt)
    )
  }
  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout)
    setSearchText(e.target.value)
    setSearchTimeout(
      setTimeout(() => {
        const searchResults = filterPrompts(e.target.value)
        setSearchedResults(searchResults)
      },500)
    )
  }
  const handleTagClick = (tagName) => {
    setSearchText(tagName)
    const result = filterPrompts(tagName)
    setSearchedResults(result)
  };
  return (
    <section className={styles.container}>
      <form className={styles.form}>
            <input type='text'
            placeholder='Search for a tag ...'
            required
            onChange={handleSearchChange}
            className={styles.input}
            />
      </form>
      {searchText? (<PromptCardList 
      data = {searchedResults}
      handleTagClick={handleTagClick}
        />
    ):
      <PromptCardList 
      data = {allPosts}
      handleTagClick = {handleTagClick}
      />}
    </section>
  )
}

export default Feed