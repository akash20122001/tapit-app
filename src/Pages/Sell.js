import React, { useState, useEffect, useContext } from "react";
import Navbar from "../Components/Navbar";
import banner from "../assets/rentBanner.png";
import Footer from "../Components/Footer";
import { db } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import Modal from "../Components/Modal";
import { collection, addDoc } from "firebase/firestore";
import { storage } from "../firebase-config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

import { UserContext } from "../Contexts/UserContext";
import Modal2 from "../Components/Modal2";

function SellBooks() {
  const currentUserrr = useContext(UserContext);

  const [modalOn, setModalOn] = useState(false);

  const [sellerName, setSellerName] = useState("");
  const [sellerAddress, setSellerAddress] = useState("");
  const [sellerEmailID, setSellerEmailID] = useState("");
  const [sellerPhone, setSellerPhone] = useState("");

  const [bookName, setBookName] = useState("");
  const [bookMRP, setBookMRP] = useState("");
  const [bookCondition, setBookCondition] = useState("");
  const [image, setImage] = useState(null);

  const clicked = () => {
    setModalOn(true);
  };

  const uploadImage = async () => {
    if (image == null) return;

    const imageRef = ref(storage, `images/${image.name + v4()}`);
    try {
      const imageDoc = await uploadBytes(imageRef, image);
      alert("image UPLOADED");
      // console.log(imageDoc.id);
      getDownloadURL(imageRef).then(async (url) => {
        // await delay(1000);
        console.log("pehla - " + url);
        setImage(url);
        console.log("0th - " + image);
      });
      console.log("first - " + image);
      
    } catch (error) {
      console.log(error.message);
    }
  };

  const uploadBookToSell = async () => {
    const sellCollectionRef = collection(db, "Sell");

    console.log("second - " + image);

    try {
      const sellDocRef = await addDoc(sellCollectionRef, {
        sellerName: sellerName,
        sellerAddress: sellerAddress,
        sellerEmailID: sellerEmailID,
        sellerPhone: sellerPhone,
        bookName: bookName,
        bookMRP: bookMRP,
        bookCondition: bookCondition,
      });
      clicked();
    } catch (error) {
      console.log(error.message)
    }
    

  };
  return (
    <div>
      <Navbar currentUserrr={currentUserrr?.email} />

      <div className=" py-8 px-44 ">
        <div className="bg-blue-400 p-6 rounded-2xl justify-evenly items-center  ">
          <div className="flex-col">
            <h2 className="font-bold text-gray-100 mb-8 text-4xl">
              Seller Details
            </h2>
            <div className="form-control px-44 ">
              <div className="px-0 my-3 flex justify-center ">
                <label className="label mr-12">
                  <span className="label-text text-white">Seller Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  onChange={(event) => {
                    setSellerName(event.target.value);
                  }}
                  className="input input-bordered input-secondary w-full max-w-xs"
                />
              </div>

              <div className="px-0 my-3 flex justify-center ">
                <label className="label mr-[2.3rem]">
                  <span className="label-text text-white">Seller Address</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  onChange={(event) => {
                    setSellerAddress(event.target.value);
                  }}
                  className="input input-bordered input-secondary w-full max-w-xs"
                />
              </div>
              <div className="px-0 my-3 flex justify-center ">
                <label className="label mr-10">
                  <span className="label-text text-white">Seller Email ID</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  onChange={(event) => {
                    setSellerEmailID(event.target.value);
                  }}
                  className="input input-bordered input-secondary w-full max-w-xs"
                />
              </div>
              <div className="px-0 my-3 flex justify-center ">
                <label className="label mr-[1.7rem]">
                  <span className="label-text text-white">
                    Seller Phone No.
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  onChange={(event) => {
                    setSellerPhone(event.target.value);
                  }}
                  className="input input-bordered input-secondary w-full max-w-xs"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-400 mt-8 p-6 rounded-2xl justify-evenly items-center  ">
          <div className="flex-col">
            <h2 className="font-bold text-gray-100 mb-8 text-4xl">
              Book Details
            </h2>
            <div className="form-control px-44 ">
              <div className="px-0 my-3 flex justify-center ">
                <label className="label mr-[2.8rem]">
                  <span className="label-text text-white">Book Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  onChange={(event) => {
                    setBookName(event.target.value);
                  }}
                  className="input input-bordered input-secondary w-full max-w-xs"
                />
              </div>

              <div className="px-0 my-3 flex justify-center ">
                <label className="label mr-[3rem]">
                  <span className="label-text text-white">Book MRP</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  onChange={(event) => {
                    setBookMRP(event.target.value);
                  }}
                  className="input input-bordered input-secondary w-full max-w-xs"
                />
              </div>

              <div className="px-0 my-3 flex justify-center ">
                <label
                  className="label mr-[2.3rem] block mb-2 text-sm font-medium text-white"
                  for="condition"
                >
                  Select book <br />
                  condition
                </label>
                <select
                  id="condition"
                  onChange={(event) => {
                    setBookCondition(event.target.value);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[20rem] p-2.5"
                >
                  <option selected>Choose Condition</option>
                  <option value="New">New</option>
                  <option value="Old/Used-Good condition">
                    Old/Used-Good condition
                  </option>
                  <option value="Old/Used-Bad condition">
                    Old/Used-Good condition
                  </option>
                </select>
              </div>

              <div className="px-0 my-3 flex justify-center ">
                <button className="btn-primary btn mr-6" onClick={uploadImage}>
                  Upload
                  <br />
                  Image
                </button>
                <input
                  type="file"
                  placeholder="Upload Image"
                  onChange={(event) => {
                    setImage(event.target.files[0]);
                  }}
                  className="input input-bordered input-secondary w-full max-w-xs"
                />
              </div>
              <button
                className="btn btn-primary bg-blue-900  w-[30rem] my-4 mx-auto"
                onClick={uploadBookToSell}
              >
                Upload Book
              </button>
            </div>
          </div>
        </div>
      </div>
      {modalOn && <Modal2 setModalOn={setModalOn} />}
      <Footer />
    </div>
  );
}

export default SellBooks;
