
import './App.css'
import DataProvider from './context/DataContext'
import React from 'react'
import StudentInfo from './StudentInfo.jsx'
import AddStudents from './AddStudents.jsx'
import SearchStudents from './SearchStudents.jsx'




function App() {
  

  return (
    <>
        <DataProvider>
          
    
            <StudentInfo />   
            <AddStudents/>
            <SearchStudents />
            
       </DataProvider>


    </>
  )
}

export default App
