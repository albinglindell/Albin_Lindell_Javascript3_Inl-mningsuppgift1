import React from 'react'
import { useState } from 'react';
import ReactPost from './ReactPost';

let data = [
    {
      question: "Vad är tre fördelar med att använda React?",
      answer: "lorem ipsum dolor amet",
      liked: false
    },
    {
      question: "Vad betyder Single Page Application och vad skiljer det från en “vanlig” webbplats?",
      answer: "lorem ipsum dolor amet",
      liked: false
    },
    {
      question: "Nämn tre skillnader mellan React och Angular.",
      answer: "lorem ipsum dolor amet",
      liked: false
    },
  ]


function BulletinBoard() {
    let [questions, setQuestions]= useState(data)
  
    let likePost = (index)=>{
      data[index].liked = true
      setQuestions([...data])
      console.log(questions)
    }
  return (
    <div>
    {questions && questions.map((item, i)=><ReactPost likePost={likePost} id={i} data={item} />)}
    </div>
  )
}

export default BulletinBoard