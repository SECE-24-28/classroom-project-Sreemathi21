import React, { useContext } from 'react'
import DataContext from './context/DataContext'
import { useParams } from 'react-router-dom'
import './EditPost.css'

const EditPost = () => {
    const{posts,handleDelete}=useContext(DataContext)
    const{id}=useParams()
    const post=posts.find((p)=>p.id==id)
    if(!post)
return (

    <div>
        <h1>there is no data...</h1>
    </div>
)
  return (
    <div className='edit'>
        <h1>Edit Post</h1>
        <input type="text" value={post.title} />
        <textarea value={post.body} />
        <button onClick={()=>handleDelete(post.id)}


        >Delete</button>
    </div>
  )
}

export default EditPost