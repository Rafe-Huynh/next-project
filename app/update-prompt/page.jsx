"use client"

import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import Form from '../../components/Form/Form'
import { Suspense } from "react";
const EditPrompt = () => {
    const router = useRouter()
    const SearchParam = useSearchParams()
    const promptId = SearchParam.get('id')
    const [submitting, setSubmitting] = useState(false)
    const [post, setPost] = useState({
        prompt: "",
        tag: "",
    })
    useEffect(() => {
        const getPrompt = async () =>{
            const response = await fetch(`/api/prompt/${promptId}`)
            const data = await response.json()
        setPost({
            prompt: data.prompt,
            tag: data.tag
        })
        }
        if(promptId) getPrompt()
    },[promptId])
    const editPrompt = async (e) => {
        e.preventDefault();
        setSubmitting(true)
    
    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }
        )
      })
      if(response.ok){
        router.push('/')
      }
    } catch (error) {
      console.log(error)
    } finally {
      setSubmitting(false)
    }
  }
  return (
    <Form type="Edit" post={post} setPost={setPost} submitting={submitting} handleSubmit={editPrompt}/>
  )
}
const Page = () => {
  return (
      <Suspense>
          <EditPrompt />
      </Suspense>
  )
}

export default Page