/* eslint-disable react-refresh/only-export-components */
/*import { createContext ,useState} from "react";  

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [name, setname] = useState("sree");
  const [count, setcount] = useState(100);
  const demo=()=>{
    return "hello world";
  }
  return (
    <DataContext.Provider value={{ name, setname, count, setcount ,demo}}>
      {children}
    </DataContext.Provider>
  );
};  
export default DataProvider;*/


import { createContext ,useState} from "react";  


export const DataContext = createContext();
export const DataProvider = ({ children }) => {

   const [stuList,setStuList]=useState([
      {id:1,sname:"Jack",fee:true},
      {id:2,sname:"Smith",fee:false},
      {id:3,sname:"Victor",fee:true}
    ])

    const handleDelete=(id)=>
    {
      const newList=stuList.filter((stu)=>stu.id!==id)
      setStuList(newList)
    }
    const handleChange=(id)=>
    {
      const newList=stuList.map((stu)=>(stu.id===id)?({...stu,fee:!stu.fee}):(stu))
      setStuList(newList)
    }
   const addItem=(item)=>
   {
    const sz=stuList.length-1;
     const nid=(stuList.length)?(stuList[sz].id+1):(1)
     const newObj={id:nid,sname:item,fee:false}
     const newList=[...stuList,newObj]
     setStuList(newList)
   }
   const handleSubmit=(e)=>
   {
    e.preventDefault()
    addItem(newstu)
    setNewStu('')
   }
    const [newstu,setNewStu]=useState('')
    const [search,setSearch]=useState('')
  return (
    <DataContext.Provider value={{stuList,handleChange,handleDelete,newstu,setNewStu,handleSubmit,search,setSearch}}>
      {children}
    </DataContext.Provider>
  );
};  
export default DataProvider;
