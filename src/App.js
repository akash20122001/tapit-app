import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import wallPaper from "./assets/wallpaper.png";
import Rent from "./Pages/Rent";
import Old from "./Pages/Old";
import New from "./Pages/New";
import AllCategories from "./Pages/AllCategories";
import Product from "./Pages/Product";
import Admin from "./Pages/Admin";
import IIT from "./Pages/IIT";
import NEET from "./Pages/NEET";
import Kids from "./Pages/Kids";
import Novels from "./Pages/Novels";
import UPSC from "./Pages/UPSC";
import SSC from "./Pages/SSC";
import Banking from "./Pages/Banking";
import NCERT from "./Pages/NCERT";
import SellBooks from "./Pages/Sell";
import MyOrders from "./Pages/MyOrders";


function App() {
  return (
      <Router>
        {/* bg-[#1B2430] */}
        <div className="App bg-white w-full h-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rent" element={<Rent />} />
            <Route path="/old" element={<Old />} />
            <Route path="/new" element={<New />} />
            <Route path="/product" element={<Product />} />
            <Route path="/categories" element={<AllCategories />} />
            <Route path="/my-orders" element={<MyOrders />} />
            <Route path="/categories/IIT" element={<IIT />} />
            <Route path="/categories/NEET" element={<NEET />} />
            <Route path="/categories/Kids" element={<Kids />} />
            <Route path="/categories/Novels" element={<Novels />} />
            <Route path="/categories/UPSC" element={<UPSC />} />
            <Route path="/categories/SSC" element={<SSC />} />
            <Route path="/categories/Banking" element={<Banking />} />
            <Route path="/categories/NCERT" element={<NCERT />} />

            <Route path="/sell-your-book" element={<SellBooks />} />
            
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
