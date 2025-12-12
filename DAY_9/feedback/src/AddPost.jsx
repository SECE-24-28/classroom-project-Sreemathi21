import React, { useContext } from 'react'
import DataContext from './context/DataContext'
 

const AddPost = () => {
  const { title, setTitle, desc, setDesc, handleSubmit } = useContext(DataContext)

  return (
    <div className="add-container">
      <form onSubmit={handleSubmit} className="add-form">
        
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>

        <br />

        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default AddPost
