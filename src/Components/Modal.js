import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Modal({
  setModalOn,
  name,
  setName,
  price,
  description,
  imageUrl,
  type,
  category,
  userEmail,
  isRent,
  isOld,
  isNew,
}) {
  const [rentDuration, setRentDuration] = useState("");
  const [rentAmount, setRentAmount] = useState("");

  const [addressModalOn, setAddressModalOn] = useState(false);

  const handleClickCancel = () => {
    setModalOn(false);
    setName("");
  };



  const OrderNow = async (duration, amount) => {
    try {
      const orderCollectionRef = collection(db, "Order");

      const orderDocRef = await addDoc(orderCollectionRef, {
        Name: name,
        Description: description,
        Price: price,
        Type: type,
        Category: category,
        imageUrl: imageUrl,
        rentDuration: duration,
        rentAmount: amount,
        userEmail: userEmail,
      });

      toast.success('Order Placesd successfully!', {
        position: "top-right",
        autoClose: 4998,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

        alert("order placed successfully");

        setModalOn(false);


    } catch (error) {
      console.log(error.message);
    }
  };

  if (isRent === true) {
    return (
      <div className="bg-zinc-200 opacity-[0.95] fixed inset-0 z-50">
        <div className="flex justify-center  h-screen items-center">
          <div className="card lg:card-side bg-gray-300 border-2 border-gray-800 shadow-xl w-[80rem]">
            <figure className="border-2 border-gray-800 rounded-2xl bg-base-100">
              <img src={imageUrl} alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-2xl text-gray-800">
                {name}
              </h2>
              <div className="flex justify-center  my-2">
                <div class="badge badge-ghost px-8 mx-8">{type}</div>
                <div class="badge badge-ghost px-8 mx-8">{category}</div>
              </div>
              <p className="text-gray-800 text-justify">{description}</p>
              <h1 className="rounded-xl text-white font-bold text-2xl bg-gray-600">
                Rent For
              </h1>

              <div className="flex justify-evenly bg-base-100 rounded-xl py-4">
                <div className="flex flex-col">
                  <button
                    className="btn btn-sm bg-blue-500 text-white"
                    onClick={() => OrderNow("1 Week", "50")}
                  >
                    1 Week
                  </button>
                  <h2 className="">&#8377;50</h2>
                </div>
                <div>
                  <button
                    className="btn btn-sm bg-blue-500 text-white"
                    onClick={() => OrderNow("1 Month", "100")}
                  >
                    1 Month
                  </button>
                  <h2 className="">&#8377;100</h2>
                </div>
                <div>
                  <button
                    className="btn btn-sm bg-blue-500 text-white"
                    onClick={() => OrderNow("3 Months", "250")}
                  >
                    3 Months
                  </button>
                  <h2 className="">&#8377;250</h2>
                </div>
              </div>
              <div className="card-actions justify-end">
                {/* <button className="btn btn-primary" onClick={buyNow}>
                    Buy Now
                  </button> */}
                <button className="btn btn-primary" onClick={handleClickCancel}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      
        <ToastContainer />
</div>
    );
  } else if (isOld === true) {
    return (
      <div className="bg-zinc-200 opacity-[0.95] fixed inset-0 z-50">
        <div className="flex justify-center  h-screen items-center">
          <div className="card lg:card-side bg-gray-300 border-2 border-gray-800 shadow-xl w-[80rem]">
            <figure className="border-2 border-gray-800 rounded-2xl bg-base-100">
              <img src={imageUrl} alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-2xl text-gray-800">
                {name}
              </h2>

              <div className="flex justify-center  my-4">
                <div class="badge badge-ghost px-8 mx-8">{type}</div>
                <div class="badge badge-ghost px-8 mx-8">{category}</div>
              </div>

              <p className="text-gray-800 text-justify">{description}</p>

             <div className="flex justify-start">
              <h1 className="font-bold text-xl text-gray-800">Price : </h1>
              <span className="mx-6 text-gray-700 font-bold text-xl">&#8377;{price}</span>
             </div>

              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  onClick={() => OrderNow("", "")}
                >
                  Buy Now
                </button>
                <button className="btn btn-primary" onClick={handleClickCancel}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />

</div>
    );
  } else {
    return (
      <div className="bg-zinc-200 opacity-[0.95] fixed inset-0 z-50">
        <div className="flex justify-center  h-screen items-center">
          <div className="card lg:card-side bg-gray-300 border-2 border-gray-800 shadow-xl w-[80rem]">
            <figure className="border-2 border-gray-800 rounded-2xl bg-base-100">
              <img src={imageUrl} alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-2xl text-gray-800">
                {name}
              </h2>
              <div className="flex justify-center  my-4">
                <div class="badge badge-ghost px-8 mx-8">{type}</div>
                <div class="badge badge-ghost px-8 mx-8">{category}</div>
              </div>
              <p className="text-gray-800 text-justify">{description}</p>

             

              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  onClick={() => OrderNow("", "")}
                >
                  Buy Now
                </button>
                <button className="btn btn-primary" onClick={handleClickCancel}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />

</div>
    );
  }
}

export default Modal;
