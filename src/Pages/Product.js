import React from "react";
import Footer from "../Components/Footer";
import MainCategories from "../Components/MainCategories";
import Navbar from "../Components/Navbar";

function Product() {
  return (
    <div>
      <Navbar />
      <div className="p-6">
        <div className="card lg:card-side w-[80rem] mx-auto bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://api.lorem.space/image/album?w=400&h=400"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
        <div className=" my-12 mx-48 rounded-lg border-4 border-black ">
          <h1 className="text-gray-800 pt-4 font-bold text-3xl">Description</h1>
          <p className="p-12">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum molestiae voluptatibus dolore voluptates omnis saepe, veniam nemo est quisquam delectus harum debitis iusto. Commodi quasi debitis magnam, incidunt consectetur autem aliquam eum totam. Consequatur officia soluta delectus veritatis in, tenetur repellat, expedita, labore dolorum eaque enim.</p>
        </div>
      </div>
      <MainCategories />
      <Footer />
    </div>
  );
}

export default Product;
