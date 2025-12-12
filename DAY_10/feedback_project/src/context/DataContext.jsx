import { Children, createContext, useEffect, useState } from "react";
import { format } from "date-fns";
import api from "../api/Post";
import { useNavigate } from "react-router-dom";

const DataContext=createContext();
export const DataProvider=({children})=>
{
const [posts, setPosts] = useState([]);
  const [search,setSearch] =useState("");
  const [searchRes,setSearchRes] = useState([])
  const [title,setTitle] =useState("")
  const [desc,setDesc] =useState("")

//another new hook function useNavigate()
const nav=useNavigate()


  //to fetch intial info
  //it will load only once
  useEffect(() => {
    const fetData = async () => {
      const res = await api.get("/feedback");
      setPosts(res.data);
    };

    fetData();
  }, []);



  
  useEffect(()=>
  {
     const demo=()=>
     {
            const filtered=posts.filter((post)=> (post.title).includes(search))
            setSearchRes(filtered.reverse())
     }

     demo()

  },[posts,search]
  )


  const handleSubmit=(e)=>{
    e.preventDefault();

    const id=(posts.length)?String((Number(posts[posts.length-1].id)+1)):(1)
    const datetime=format(new Date(),"MMM dd,yyy pp")

    const newObj={id:id,title:title,datetime:datetime,body:desc}
    //const newObj={id,title,datetime,desc} --> this didnt work becuz my key and value name are different if they are same means thil will work . i have body as key and the value I saved as desc , if I had saved the desc as body then that would have worked 
    api.post("/feedback",newObj)
    const newList=[...posts,newObj]
    setPosts(newList)
setTitle('')
setDesc('')

alert("Data Inserted Successfully...")
nav("/")
  }


  //delete 
  const handleDelete=async (id)=>{
   
    //it will delete only if the id is string as we have given it inside string``
  //so better we can change the id by default to string when we arer adding a new post                                                              
   await api.delete(`/feedback/${id}`)
 
   alert("Post deleted successfully")
   const newList=posts.filter((post)=>post.id!=id)
   setPosts(newList)
     nav("/")
  }

    return(
        <DataContext.Provider value={{posts, search,setSearch,searchRes,title,setTitle,desc,setDesc,handleSubmit,handleDelete}}>
{children}
        </DataContext.Provider>
    )
}

export default DataContext