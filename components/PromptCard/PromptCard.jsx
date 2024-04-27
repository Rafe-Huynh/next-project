"use client"
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'
import { FaCopy } from "react-icons/fa6";
import styles from './PromptCard.module.css'
import { FaRegTrashAlt } from "react-icons/fa";
import { TiEdit } from "react-icons/ti";
const PromptCard = ({post, handleTagClick, handleEdit, handleDelete}) => {
  const [copied, setCopied] = useState("")
  const pathName =usePathname()
  const router = useRouter()
  const { data: session } = useSession();
  const handlecopy = () =>{
    setCopied(post.prompt)
    navigator.clipboard.writeText(post.prompt)
    setTimeout(() => setCopied(""), 3000)

  }
  const handleProfileClick = () =>{
    if (post.creator._id === session?.user.id) return router.push("/profile")
    router.push(`/profile/${post.creator._id}?name=${post.creator.username}`)
  }
  return (
    
    <div className={styles.container}>
      
        <div className={styles.cards}>
            <div className={styles.card} onClick={handleProfileClick}
            >
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
        
        {session?.user.id === post.creator._id && pathName === '/profile' && (
          <div className={styles.btn}> 
            <button className={styles.editbtn} onClick={handleEdit} data-message="Edit">
              <TiEdit size={20}/>
            </button>
            <button className={styles.deletebtn} onClick={handleDelete} data-message={"Delete"}>
              <FaRegTrashAlt size={20} />
            </button>
             </div>
        ) } 
    </div>

  )
  
}

export default PromptCard