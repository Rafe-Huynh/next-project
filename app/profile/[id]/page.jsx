"use client"

import React from 'react'
import { useState, useEffect } from 'react'
import Profile from '../../../components/Profile/Profile'
import { useSearchParams } from 'next/navigation'
const UserProfile = ({params}) => {
    const searchParams = useSearchParams()
    const userName = searchParams.get("name")
    const [userPosts, setUserPosts] = useState([])
    useEffect(() =>{
        const fetchPosts = async() =>{
            const response = await fetch(`/api/users/${params?.id}/posts`)
            const data = await response.json()
            setUserPosts(data)
        }
        if (params?.id) fetchPosts()
    },[params.id])
  return (
    <Profile 
    name = {userName}
    desc = {`welcome to ${userName}'s Page`}
    data = {userPosts}
    />
  )
}

export default UserProfile