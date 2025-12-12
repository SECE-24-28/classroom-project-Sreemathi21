import React, { useContext } from 'react'
import DataContext from './context/DataContext'
const Demo = () => {
    const {num}=useContext(DataContext)
  return (
    <div>
<h1>{num}</h1>
    </div>
  )
}

export default Demo