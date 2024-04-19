"use client"
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'
import styles from './PromptCard.module.css'
const PromptCard = ({post, handleTagClick, handleEdit, handleDelete}) => {
  const [copied, setCopied] = useState("")
  const { data: session } = useSession();
  return (
    <div className={styles.container}>
        <div className={styles.cards}>
            <div className={styles.card}>
              <Image src={post.creator?.image} alt = "user image" width={40} height={40} className={styles.userImage}/>
              <div className={styles.user}>
                  <h3 className={styles.title}>{post.creator?.username}</h3>
                  <p className={styles.email}>{post.creator?.email}</p>
              </div>
            </div>
            <div className={styles.copybtn} onClick={() => {}}>
                <Image src={copied === post.prompt ? '/assets/icons/tick.svg': '/assets/icons/copy.svg'} width={12} height={12}/>
            </div>
        </div>
    </div>
  )
}

export default PromptCard