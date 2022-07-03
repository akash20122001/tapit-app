import React from "react";
import Footer from "../Components/Footer";
import MainCategories from "../Components/MainCategories";
import Navbar from "../Components/Navbar";
import upsc from "../assets/upscCategory.jpg";
import iit from "../assets/iitJEECat.png";
import ssc from "../assets/sscCat.png";
import novels from "../assets/novelsCat.png";
import ncert from "../assets/ncertCat.png";
import neet from "../assets/neetCat.png";
import kids from "../assets/kids.png";
import banking from "../assets/bankingCat.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function AllCategories() {

  

  const navigate = useNavigate();
  
  return (
    <div>
        
      <Navbar />
      <div className="bg-gray-300  ">
        <h1 className="text-gray-800 pt-6 font-bold text-3xl mx-auto">
          All Categories
        </h1>
        <div className="px-16 py-8 flex justify-center">
          <div className=" grid grid-cols-4 gap-4">
            <div className="card w-72 my-3 bg-base-100 shadow-xl">
              <figure className="h-[12rem]">
                <img className="h-full" src={upsc} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="mx-auto font-bold card-title">
                  UPSC BOOKS
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>Best books for preparation of all PSC exams</p>
                <div className="card-actions pt-3 justify-end">
                  <button
                    className="btn btn-primary bg-blue-900 mx-auto hover:bg-[#18978F] image-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-200"
                    onClick={() => navigate("/categories/upsc")}
                  >
                    View Books
                  </button>
                </div>
              </div>
            </div>
            <div className="card w-72 my-3 bg-base-100 shadow-xl">
              <figure className="h-[12rem]">
                <img className="h-full" src={ncert} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="mx-auto font-bold card-title">
                  NCERT BOOKS
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>All NCERT books for class 1st to 12th</p>
                <div className="card-actions pt-3 justify-end">
                  <button
                    className="btn btn-primary bg-blue-900 mx-auto hover:bg-[#18978F] image-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-200"
                    onClick={() => navigate("/categories/ncert")}
                  >
                    View Books
                  </button>
                </div>
              </div>
            </div>
            <div className="card w-72 my-3 bg-base-100 shadow-xl">
              <figure className="h-[12rem]">
                <img className="h-full" src={iit} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="mx-auto font-bold card-title">
                  IIT/JEE BOOKS
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>Best books for preparation of all Engineering Entrance exams</p>
                <div className="card-actions pt-3 justify-end">
                  <button
                    className="btn btn-primary bg-blue-900 mx-auto hover:bg-[#18978F] image-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-200"
                    onClick={() => navigate("/categories/iit")}
                  >
                    View Books
                  </button>
                </div>
              </div>
            </div>
            <div className="card w-72 my-3 bg-base-100 shadow-xl">
              <figure className="h-[12rem]">
                <img className="h-full" src={ssc} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="mx-auto font-bold card-title">
                  SSC BOOKS
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>Best books for preparation of all SSC exams</p>
                <div className="card-actions pt-3 justify-end">
                  <button
                    className="btn btn-primary bg-blue-900 mx-auto hover:bg-[#18978F] image-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-200"
                    onClick={() => navigate("/categories/ssc")}
                  >
                    View Books
                  </button>
                </div>
              </div>
            </div>
            <div className="card w-72 my-3 bg-base-100 shadow-xl">
              <figure className="h-[12rem]">
                <img className="h-full" src={neet} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="mx-auto font-bold card-title">
                  NEET/AIIMS BOOKS
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>Best books for preparation of NEET/AIIMS Exam</p>
                <div className="card-actions pt-3 justify-end">
                  <button
                    className="btn btn-primary bg-blue-900 mx-auto hover:bg-[#18978F] image-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-200"
                    onClick={() => navigate("/categories/neet")}
                  >
                    View Books
                  </button>
                </div>
              </div>
            </div>
            <div className="card w-72 my-3 bg-base-100 shadow-xl">
              <figure className="h-[12rem]">
                <img className="h-full" src={banking} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="mx-auto text-lg font-bold card-title">
                  BANKING BOOKS
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>Best books for preparation of all Bank Entrance exams</p>
                <div className="card-actions pt-3 justify-end">
                  <button
                    className="btn btn-primary bg-blue-900 mx-auto hover:bg-[#18978F] image-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-200"
                    onClick={() => navigate("/categories/banking")}
                  >
                    View Books
                  </button>
                </div>
              </div>
            </div>
            <div className="card w-72 my-3 bg-base-100 shadow-xl">
              <figure className="h-[12rem]">
                <img className="h-full" src={novels} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="mx-auto font-bold card-title">
                  NOVELS
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>Get world famous novels written by renowned writers.</p>
                <div className="card-actions pt-3 justify-end">
                  <button
                    className="btn btn-primary bg-blue-900 mx-auto hover:bg-[#18978F] image-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-200"
                    onClick={() => navigate("/categories/novels")}
                  >
                    View Books
                  </button>
                </div>
              </div>
            </div>
            <div className="card w-72 my-3 bg-base-100 shadow-xl">
              <figure className="h-[12rem]">
                <img className="h-full" src={kids} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="mx-auto font-bold card-title">
                  KIDS BOOKS
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>Get all kinds of books for kids of age 1-4 years</p>
                <div className="card-actions pt-3 justify-end">
                  <button
                    className="btn btn-primary bg-blue-900 mx-auto hover:bg-[#18978F] image-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-200"
                    onClick={() => navigate("/categories/kids")}
                  >
                    View Books
                  </button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <MainCategories />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default AllCategories;
