import React, { useContext } from 'react'
import './Home.css'
import DataContext from './context/DataContext'
import Search from './Search'
import { Link } from 'react-router-dom'
import { SquarePen } from 'lucide-react';

const Home = () => {
  
    const {searchRes}=useContext(DataContext)
    
  return (
    
    <div>
     
        {
      searchRes.map((post) => 
        (
        <div className="home"key={post.id}>
          <Link to={`/editpost/${post.id}`}>
          <SquarePen/>
          
         
          <hr/>
          </Link>
           <h3>{post.title}</h3>
          <p>{post.datetime}</p>
          <p>{post.body}</p>

        </div>
      ))
      }
    </div>
  )
}

export default Home