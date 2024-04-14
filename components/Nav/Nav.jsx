"use client";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import {signIn, signOut, useSession, getProviders} from 'next-auth/react'
import styles from "./Nav.module.css"
const Nav = () => {
  return (
    <nav className={styles.container}> 
        <Link href="/" className={styles.link} >
            <Image 
            src ="public/images/logo.svg"
            alt ="logo"
            width={30}
            height={30}
            className={styles.image}
            />
            <p className={styles.logo_text}>Promptopia</p>
        </Link>
    </nav>
  )
}

export default Nav