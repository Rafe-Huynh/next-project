import React from 'react'
import Link from 'next/link'
import styles from "./Form.module.css"
const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}><span>{type} Post</span></h1>
            <p className={styles.desc}>
                {type} prompt

            </p>
            <form onSubmit={handleSubmit} className={` ${styles.form} ${styles.glassmorphism}`}>
                <label>
                    <span className={styles.label}>
                        Your Prompt
                    </span>
                    <textarea value={post.prompt} onChange={(e) => setPost({ ...post, prompt: e.target.value })} placeholder="write your prompt..."
                    required className={styles.textarea}/>
                </label>
                <label>
                    <span className={styles.label}>
                        Tag
                    </span>
                    <input value={post.tag} onChange={(e) => setPost({ ...post, tag: e.target.value })} placeholder="#Tag"
                    required className={styles.tag}/>
                </label>
                <div className={styles.btn}>
                    <button className={styles.submitbtn}>
                    <Link href="/"className={styles.link} >
                        Cancel 
                    </Link>
                    </button>
                    <button type="submit" disabled={submitting} className={styles.submitbtn}>
                        {submitting ? `${type}...`:type}
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Form
