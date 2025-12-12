
import { useEffect, useState } from "react";
import "./App.css";

import api from "./api/Stu_api"

function App() {
  const [SList, setSList] = useState([]);

 useEffect(() => {
  const fetData = async () => {
    try {
      const res = await api.get("/students");
     
      console.log("res.data:", res.data);
      setSList(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  fetData();
}, []);

return (
  <>
    <h1>Student List</h1>
    
    {
    SList.map((stu) => (
      <p key={stu.id}>
        {stu.id} - {stu.name} - {stu.marks}
      </p>
    ))
    }
  </>
);

}

export default App;
