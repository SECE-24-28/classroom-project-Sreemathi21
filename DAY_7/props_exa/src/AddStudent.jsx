import React from 'react'
import { useRef } from 'react'
//uisng useRef hook to focus the input field after submitting the form(control moves from submit button to input field after clicking submit button)
const AddStudent = ({newstu,setNewStu,handleSubmit}) => {
  const inputRef=useRef();

  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='New Student'
                               ref={inputRef}
                               value={newstu}
                               onChange={(e)=>setNewStu(e.target.value)}

            />

            <button type='submit' onClick={()=>inputRef.current.focus()}>Submit</button>
        </form>
    </div>
  )
}

export default AddStudent