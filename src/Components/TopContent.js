import React, {useContext} from "react";
import rent from "../assets/rentBooks.jpg";
import newBooks from "../assets/newBooks.jpg";
import old from "../assets/oldBooks.jpg";
import { useNavigate } from "react-router-dom";

function TopContent() {


  const navigate = useNavigate();
 
  return (
    <div className="flex pt-[1.5rem] bg-gradient-to-b from-[#1363DF] to-white justify-evenly items-center">
      <div className="rounded-full flex justify-center items-center w-52 h-52 bg-[#18978F] drop-shadow-lg border-2 border-green-800 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 cursor-pointer duration-200" onClick={() => navigate('/sell-your-book')}>
        <h1 className="text-white text-4xl">
          Sell <br />
          Books
        </h1>
        
      </div>

      <div className="card border-2 border-blue-700  w-96 bg-blue-400 text-white drop-shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-200">
        <figure>
          <img className="w-full border-b-2 border-blue-700 "
            src={rent}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-blue-900 text-3xl mx-auto">Book Rental</h2>
          <p>Don't want to buy books ? Don't worry, just rent, read and return.</p>
          <div className="card-actions pt-3 justify-end">
            <button className="btn btn-primary bg-blue-900 mx-auto hover:bg-[#18978F]" onClick={()=> navigate('/rent')}>Rent Now</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="card border-[3px] border-blue-300 m-4 w-96 bg-base-100 drop-shadow-xl image-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-200">
          <figure>
            <img
              src={newBooks}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold text-white mx-auto">Buy New Books</h2>
            <p className="text-gray-300 text-lg">Get New Books at great discounts !</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary bg-blue-900 mx-auto hover:bg-[#18978F]" onClick={()=> navigate('/new')}>Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card m-3 w-96 bg-white shadow-xl image-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-200">
          <figure>
            <img
              src={old}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
          <h2 className="card-title text-2xl font-bold text-white mx-auto">Buy Used Books</h2>
            <p className="text-gray-300 text-lg">Get good condition Used Books at great discounts !</p>
            <div className="card-actions justify-end">
              <button className="btn text-white bg-blue-900 mx-auto hover:bg-[#18978F]" onClick={()=> navigate('/old')}>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-full flex justify-center items-center w-52 h-52 bg-[#18978F] drop-shadow-lg border-2 border-green-800 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-200">
        <h1 className="text-white text-4xl">
          Free <br />
          Notes
        </h1>
      </div>
    </div>
  );
}

export default TopContent;
