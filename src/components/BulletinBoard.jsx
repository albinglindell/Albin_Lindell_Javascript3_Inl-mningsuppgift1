import React from 'react'
import { useState } from 'react';
import ReactPost from './ReactPost';

let data = [
    {
      question: "Vad är tre fördelar med att använda React?",
      answer: "Första fördelen är att man kan återanvända kod i form av components, för det andra är att react har många bra hooks såsom useState och useEffect. Och för det tredje så är det väldigt lätt att lära sig och komma in i react.",
      liked: false
    },
    {
      question: "Vad betyder Single Page Application och vad skiljer det från en “vanlig” webbplats?",
      answer: "En single Page Application är en webbapplikation eller webbplats som interagerar med användaren genom att dynamiskt skriva om den aktuella webbsidan med ny data från webbservern, istället för standardmetoden för en webbläsare som laddar hela nya sidor.",
      liked: false
    },
    {
      question: "Nämn tre skillnader mellan React och Angular.",
      answer: "Första skillnaden är att react måste man ladda ner en hel del för att göra mer på, medan angular kommer med ett stort föråd av verktyg du kan använda dig av. För det andra så är angular typescript baserat medan react är javascript baserat. Och för det tredje så är react mycket lättare att lära sig, det går mycket fortare att komma igång med react.",
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
    <div className='container'>
      <h1>Bulletin Board</h1>
    {questions && questions.map((item, i)=><ReactPost likePost={likePost} id={i} data={item} />)}
    </div>
  )
}

export default BulletinBoard