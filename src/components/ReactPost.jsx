import React from 'react'
import PostLiked from './PostLiked'

function ReactPost({data, likePost, id}) {
  return (
    <div key={id} className='question'>
            <h2>{data.question}</h2>
            <h3>{data.answer}</h3>
            {!data.liked ?<button onClick={()=>{likePost(id)}}>Like this post</button>: <PostLiked />}
    </div>
  )
}

export default ReactPost