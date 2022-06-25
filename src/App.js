import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import wallPaper from './assets/wallpaper.png'
import Rent from './Pages/Rent';
import Old from './Pages/Old';
import New from './Pages/New';
import AllCategories from './Pages/AllCategories';
import Product from './Pages/Product';

function App() {
  return (
    <Router>
      {/* bg-[#1B2430] */}
      <div className="App bg-white w-full h-full">
      
        <Routes>
           <Route path="/home" element = {<Home/>}/>
           <Route path="/rent" element = {<Rent/>}/>
           <Route path="/old" element = {<Old/>}/>
           <Route path="/new" element = {<New/>}/>
           <Route path="/product" element = {<Product/>}/>
           <Route path="/categories" element = {<AllCategories/>}/>
           <Route path="/" element = {<Login/>}/>
           <Route path="/signup" element = {<Signup/>}/>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
