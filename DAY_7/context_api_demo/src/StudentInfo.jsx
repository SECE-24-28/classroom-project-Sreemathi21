import React, { useContext } from 'react'
import { DataContext } from './context/DataContext'

const StudentInfo = () => {
    const { stuList, search, handleDelete, handleChange } = useContext(DataContext)

    const filteredList = stuList.filter(stu =>
        stu.sname.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div>
            <ul>
                {
                    filteredList.map((stu) =>
                        <li key={stu.id}>
                            <input
                                type="checkbox"
                                checked={stu.fee}
                                onChange={() => handleChange(stu.id)}
                            />
                            <label>{stu.sname}</label>
                            <button onClick={() => handleDelete(stu.id)}>Delete</button>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default StudentInfo
