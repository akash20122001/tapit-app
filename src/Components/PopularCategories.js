import React from 'react'
import popular from "../assets/popular.png";
import upsc from "../assets/upsc.png";
import iit from "../assets/IIT.png";
import ncert from "../assets/ncert.png";
import novel from "../assets/novel.png";
import { useNavigate } from 'react-router-dom';

function PopularCategories() {

  const navigate = useNavigate();

  return (
    <div>
        <div className="  p-4 py-10">
          <div className="card lg:card-side w-[85rem] mx-auto bg-base-100 shadow-xl">
            <figure>
              <img className="w-[30rem]" src={popular} />
            </figure>
            <div className="card-body bg-gradient-to-b from-[#18978F] to-white">
              <h2 className="card-title text-green-100 font-bold mx-auto text-3xl mb-6 ">Most Popular Categories</h2>
              <div className="grid grid-cols-4 gap-4 pr-4">

                <div className="card m-3 bg-white w-44 h-64 rounded-full shadow-xl image-full">
                 
                  <div className="card-body">
                    <h2 className="card-title text-gray-100  mx-auto">UPSC</h2>
                    
                    <div className="rounded-full">
                      <img className="rounded-full w-36 h-28" src={upsc} alt="" />
                      </div>
                    <div className="card-actions justify-end">
                      <button className="btn btn-sm mx-auto mt-2 text-white bg-blue-800 hover:bg-[#18978F]" onClick={()=>navigate('/categories/upsc')}>Buy Now</button>
                    </div>
                  </div>
                </div>

                <div className="card m-3 bg-white w-44 h-64 rounded-full shadow-xl image-full">
                 
                 <div className="card-body">
                   <h2 className="card-title mx-auto text-gray-100 ">NCERT</h2>
                   
                   <div className="rounded-full">
                     <img className="rounded-full w-36 h-28" src={ncert} alt="" />
                     </div>
                   <div className="card-actions justify-end">
                     <button className="btn btn-sm text-white bg-blue-800 mx-auto hover:bg-[#18978F] mt-2 " onClick={()=>navigate('/categories/ncert')}>Buy Now</button>
                   </div>
                 </div>
               </div>

               <div className="card m-3 bg-white w-44 h-64 rounded-full shadow-xl image-full">
                 
                 <div className="card-body">
                   <h2 className="card-title mx-auto text-gray-100 ">IIT/JEE</h2>
                   
                   <div className="rounded-full">
                     <img className="rounded-full p-1 w-36 h-28" src={iit} alt="" />
                     </div>
                   <div className="card-actions justify-end">
                     <button className="btn btn-sm text-white bg-blue-800 mx-auto hover:bg-[#18978F] mt-2 " onClick={()=>navigate('/categories/iit')}>Buy Now</button>
                   </div>
                 </div>
               </div>

               <div className="card m-3 bg-white w-44 h-64 rounded-full shadow-xl image-full">
                 
                 <div className="card-body">
                   <h2 className="card-title text-gray-100 mx-auto">NOVELS</h2>
                   
                   <div className="rounded-full">
                     <img className="rounded-full w-36 h-28" src={novel} alt="" />
                     </div>
                   <div className="card-actions justify-end">
                     <button className="btn btn-sm text-white bg-blue-800 mx-auto hover:bg-[#18978F] mt-2 " onClick={()=>navigate('/categories/novels')}>Buy Now</button>
                   </div>
                 </div>
               </div>
               
              </div>
              <div className="card-actions justify-end">
                <button className="btn mx-auto mt-8 text-white bg-blue-800 hover:bg-[#18978F]" onClick={()=>navigate('/categories')}>View All Categories</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PopularCategories