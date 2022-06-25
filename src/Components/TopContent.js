import React from "react";

function TopContent() {
  return (
    <div className="flex bg-gray-200 justify-evenly items-center">
      <div className="rounded-full flex justify-center items-center w-52 h-52 bg-blue-400">
        <h1 className="text-white text-4xl">
          Sell <br />
          Books
        </h1>
      </div>

      <div className="card  w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="card m-4 w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card m-3 w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-full flex justify-center items-center w-52 h-52 bg-blue-400">
        <h1 className="text-white text-4xl">
          Free <br />
          Notes
        </h1>
      </div>
    </div>
  );
}

export default TopContent;
