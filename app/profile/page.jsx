'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Profile from '../../components/Profile/Profile'
const MyProfile = () => {
    const {data : session} = useSession()
    const [posts, setPosts] = useState([])

    const fetchPosts = async () => {
        const response = await fetch(`/api/users/${session?.user.id}/posts`);
        const data = await response.json();
    
        setPosts(data);
      };
    useEffect(() => {
        if(session?.user.id) fetchPosts()
    },[session?.user.id])
    const handleEdit = () => {

    }
    const handleDelete = async () => {

    }

  return (
    <Profile 
    name = {session?.user.name}
    desc = "Welcome to my Page"
    data = {posts}
    handleEdit={handleEdit}
    handleDelete={handleDelete}
    />

  )
}

export default MyProfile