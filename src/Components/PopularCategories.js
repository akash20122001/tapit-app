import React from 'react'
import popular from "../assets/popular.png";
import upsc from "../assets/upsc.png";
import iit from "../assets/IIT.png";
import ncert from "../assets/ncert.png";
import novel from "../assets/novel.png";

function PopularCategories() {
  return (
    <div>
        <div className="bg-gray-400 p-4 py-10">
          <div className="card lg:card-side w-[85rem] mx-auto bg-base-100 shadow-xl">
            <figure>
              <img className="w-[30rem]" src={popular} />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-gray-300 mx-auto text-3xl mb-6">Most Popular Categories</h2>
              <div className="grid grid-cols-4 gap-4 pr-4">

                <div className="card m-3 bg-white w-44 h-64 rounded-full shadow-xl image-full">
                 
                  <div className="card-body">
                    <h2 className="card-title text-white mx-auto">UPSC</h2>
                    
                    <div className="rounded-full">
                      <img className="rounded-full w-36 h-28" src={upsc} alt="" />
                      </div>
                    <div className="card-actions justify-end">
                      <button className="btn btn-sm mx-auto mt-2 btn-primary">Buy Now</button>
                    </div>
                  </div>
                </div>

                <div className="card m-3 bg-white w-44 h-64 rounded-full shadow-xl image-full">
                 
                 <div className="card-body">
                   <h2 className="card-title mx-auto">UPSC</h2>
                   
                   <div className="rounded-full">
                     <img className="rounded-full w-36 h-28" src={ncert} alt="" />
                     </div>
                   <div className="card-actions justify-end">
                     <button className="btn btn-sm mx-auto mt-2 btn-primary">Buy Now</button>
                   </div>
                 </div>
               </div>

               <div className="card m-3 bg-white w-44 h-64 rounded-full shadow-xl image-full">
                 
                 <div className="card-body">
                   <h2 className="card-title mx-auto">UPSC</h2>
                   
                   <div className="rounded-full">
                     <img className="rounded-full p-1 w-36 h-28" src={iit} alt="" />
                     </div>
                   <div className="card-actions justify-end">
                     <button className="btn btn-sm mx-auto mt-2 btn-primary">Buy Now</button>
                   </div>
                 </div>
               </div>

               <div className="card m-3 bg-white w-44 h-64 rounded-full shadow-xl image-full">
                 
                 <div className="card-body">
                   <h2 className="card-title mx-auto">UPSC</h2>
                   
                   <div className="rounded-full">
                     <img className="rounded-full w-36 h-28" src={novel} alt="" />
                     </div>
                   <div className="card-actions justify-end">
                     <button className="btn btn-sm mx-auto mt-2 btn-primary">Buy Now</button>
                   </div>
                 </div>
               </div>
               
              </div>
              <div className="card-actions justify-end">
                <button className="btn mx-auto mt-8 btn-primary">View All Categories</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PopularCategories