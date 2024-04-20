"use client"
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'
import { FaCopy } from "react-icons/fa6";
import styles from './PromptCard.module.css'
const PromptCard = ({post, handleTagClick, handleEdit, handleDelete}) => {
  const [copied, setCopied] = useState("")
  const { data: session } = useSession();
  const handlecopy = () =>{
    setCopied(post.prompt)
    navigator.clipboard.writeText(post.prompt)
    setTimeout(() => setCopied(""), 3000)

  }
  return (
    
    <div className={styles.container}>
      
        <div className={styles.cards}>
            <div className={styles.card}>
              <Image src={post.creator.image} alt = "user image" width={40} height={40} className={styles.userImage}/>
              <div className={styles.user}>
                  <h3 className={styles.title}>{post.creator.username}</h3>
                  <p className={styles.email}>{post.creator.email}</p>
              </div>
            </div>
            <div className={styles.copybtn} onClick={handlecopy}>
                 {copied === post.prompt ? <FaCopy/> : <FaCopy/>}
                 {copied && <div>Copied</div>}
            </div>
        </div>
        <p className={styles.prompt}>{post.prompt}</p>
        <p className={styles.tag} onClick={() => handleTagClick && handleTagClick(post.tag)}>{post.tag}</p>
    </div>
  )
  
}

export default PromptCard