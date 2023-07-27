import React from 'react';
import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//component imports
import Home from './components/home';
import NavBar from './components/navbar';
import Search from './components/search';
import signup from './components/signup';
import BookContainer from './components/BookContainer';
 
function App() {
  const[user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/books" element={<BookContainer />}/>
          <Route path="/page" element={<BookCard />}/>
          <Route path ="*" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
