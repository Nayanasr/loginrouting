import logo from './logo.svg';
// import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/login" element = {<Login />} />
          <Route path = "/signup" element = {<Signup />} />


        </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
