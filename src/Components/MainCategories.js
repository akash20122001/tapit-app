import React from 'react'
import rent from "../assets/rentBooks.jpg";
import old from "../assets/oldBooks.jpg";
import newCat from "../assets/newBooks.jpg";
import { useNavigate } from "react-router-dom";

function MainCategories() {

  const navigate = useNavigate();
  
  return (
    <div>
        <div className="flex justify-evenly px-32 pb-16">
          <div className="card m-4 w-96 bg-base-100 shadow-xl  image-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-200">
            <figure>
              <img
                src={rent}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title mx-auto font-bold text-gray-200 text-3xl">Books Rental</h2>
              <p className="text-lg text-gray-300">Rent Books, Read and Return !</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary mx-auto" onClick={() => navigate("/rent")}>Explore</button>
              </div>
            </div>
          </div>
          <div className="card m-4 w-96 bg-base-100 shadow-xl image-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-200">
            <figure>
              <img
                src={old}
                alt="old"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title mx-auto font-bold text-gray-200 text-3xl">Old/Used Books</h2>
              <p className="text-gray-300 text-lg">Buy Used/Old books in great condition.</p>
              <div className="card-actions justify-end">
                <button className="btn mx-auto btn-primary" onClick={() => navigate("/old")}>Explore</button>
              </div>
            </div>
          </div>
          <div className="card m-3 w-96 bg-base-100 shadow-xl image-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-200">
            <figure>
              <img
                src={newCat}
                alt="new"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title mx-auto text-gray-200 text-3xl">New Books</h2>
              <p className="text-gray-300 text-lg mx-auto">Buy New Books at great Discounts !</p>
              <div className="card-actions justify-end">
                <button className="btn mx-auto btn-primary" onClick={() => navigate("/new")}>Explore</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default MainCategories