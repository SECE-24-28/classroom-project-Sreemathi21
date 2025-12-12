
import "./App.css";

import Home from "./Home";
import Search from "./Search";
import AddPost from "./AddPost";
import { DataProvider } from "./context/DataContext";
import { Link ,Route,Routes} from "react-router-dom";
import EditPost from "./EditPost";


function App() {
  
  return (
   
   <>

 
  

      <DataProvider>

        <nav className="navv">
 <Link className="hii" to="/">Home  </Link>
 
  <Link  className="hii" to="/newpost">NewPost</Link>
 
   <Search/>
  
</nav>
<Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/newpost" element={<AddPost />}/>
  <Route path="/editpost/:id" element={<EditPost/>}/>
 
</Routes>

        
      </DataProvider>
    </>
  );
}

export default App;