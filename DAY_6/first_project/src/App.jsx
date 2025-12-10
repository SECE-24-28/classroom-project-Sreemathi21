/*import './App.css'
import Header from './Header.jsx'
import Content from './Content.jsx'


function App() {
let demo=(name)=>{
  console.log("Hello Sree" + name);
}

  return (
    <>
    <Header/>
    <Content/>  
<button onClick={()=>demo("sangee")}>Click Me</button>
    </>
  )
}

export default App*/

import React from "react";
import Counter from "./Counter";

const App = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default App;
