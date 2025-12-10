
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Gallary from './Gallary';
import NewPost from './NewPost';
import Pst_pg from './Pst_pg';
import PostPagee from './PostPagee';
import Post from './Post';


function App() {
  

  return (
    <>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/gallary">Gallary</Link></li>
        <li><Link to="/postpage">PostPage</Link></li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallary" element={<Gallary />} />
        <Route path="/postpage" element={<PostPagee /> }/>
        <Route path="/postpage/:id" element={<Post/>}/>

        <Route path="/postpage/new" element={<NewPost />}/>
        

      
        
      </Routes>
    </>
  );
}

export default App;