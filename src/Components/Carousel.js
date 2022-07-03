import React from 'react'
import banner1 from "../assets/rentBanner.png";
import banner2 from "../assets/newBanner.png";
import banner3 from "../assets/oldBanner.png";

function Carousel() {
  return (
    <div className=" m-6 mx-12 bg-gradient-to-r from-[#18978F] via-white to-[#18978F] rounded-xl ">
    <div className="carousel rounded-xl mx-auto py-8 w-[80rem]">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src={banner1}
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src={banner2}
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src={banner3}
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          
        </div></div>
  )
}

export default Carousel