import React from 'react'
import PromptCard from '../PromptCard/PromptCard'
import styles from "./Profile.module.css"
const Profile = ({name, desc, data, handleEdit, handleDelete}) => {
  return (
    <section className={styles.container}>
        <h1 className={styles.title}>{name} Profile </h1>
        <p className={styles.desc}>
           {desc}
        </p>
        <div className={styles.cards}>
            {data.map((post) => (
            <PromptCard 
            key={post._id}
            post = {post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
            />
                ))}

            </div>
    </section>
  )
}

export default Profile