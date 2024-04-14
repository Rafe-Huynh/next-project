"use client";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import {signIn, signOut, useSession, getProviders} from 'next-auth/react'
import styles from "./Nav.module.css"
const Nav = () => {
    const isUserLogined = true
    const [provider, setProvider] = useState(null)
    const [dropDown, setDropDown] = useState(false)
    //sign in google 
    useEffect(() =>{
        const setProvider = async() =>{
            const response = await getProviders()
            setProvider(response)
        }
    setProvider
    },[])
  return (
    <nav className={styles.container}> 
        <Link href="/" className={styles.link} >
            <Image 
            src ="/images/logo.svg"
            alt ="logo"
            width={30}
            height={30}
            className={styles.image}
            />
            <p className={styles.logo_text}>Promptopia</p>
        </Link>
        <div className={styles.small}>
            {isUserLogined ? (<div className={styles.UserLogined}><Link href="/create-promp" className={styles.btn}> Create Post
            </Link>
            <button type='button' onClick={signOut} className={styles.btn_signout}>Sign Out</button>
            <Link href="/profile">
                <Image src="/images/logo.svg" width={37} height={37} className={styles.profileImg} alt="profile" />
            </Link>
            </div>) 
            
            : ( <>
            {
                provider && Object.values(provider).map((provider) =>{
                    <button type="button" key={provider.name} onClick={() => signIn(provider.id)} className={styles.btn}>
                        Sign In
                    </button>
                })
            }
            </>)}
        </div>
        <div className={styles.mobile}>
            {isUserLogined ? 
            (<div className={styles.flex}>
                <Image src="/images/logo.svg" width={37} height={37} className={styles.profileImg} alt="profile"
                onClick={() =>setDropDown((prev) => !prev)}
                />
                {
                    dropDown && (
                        <div className={styles.dropdown}>
                            <Link href="/profile" className={styles.dropdown_link} onClick={() => setDropDown(false)}>
                            My Profile
                            </Link>
                            <Link href="/create-prompt" className={styles.dropdown_link} onClick={() => setDropDown(false)}>
                            Create Prompt
                            </Link>
                            <button type='button' onClick={() => {setDropDown(false); signOut()}} className={styles.btn} >
                                Sign Out
                            </button>
                        </div>
                    )
                }
                 </div>):
                ( <>
                    {
                        provider && Object.values(provider).map((provider) =>{
                            <button type="button" key={provider.name} onClick={() => signIn(provider.id)} className={styles.btn}>
                                Sign In
                            </button>
                        })
                    }
                    </>)
        
        }
        </div>
    </nav>
  )
}

export default Nav