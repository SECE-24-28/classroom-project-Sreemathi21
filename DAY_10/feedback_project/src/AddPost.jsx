import React, { useContext } from 'react'
import DataContext from './context/DataContext'
import './AddPost.css' 

const AddPost = () => {
    const {title,setTitle,desc,setDesc,handleSubmit}=useContext(DataContext)
  return (
    <div className="add-container">
<form action="" onSubmit={handleSubmit} className="add-form">
    <input type="text" name="" id="" placeholder='Titile'
                             value={title}
                             onChange={(e)=>setTitle(e.target.value)}
    />
    <textarea name="" id="" placeholder='Description' 

                          value={desc}
                          onChange={(e)=>setDesc(e.target.value)}
                             
    >
        </textarea> <br></br>
    < button type='submit'> save </button>
</form>

    </div>
  )
}

export default AddPost