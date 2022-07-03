import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Modal2({setModalOn}) {
  const navigate = useNavigate();

  const handleClickOK = () => {
    setModalOn(false);
    navigate("/");
  };

  return (
    <div className="bg-zinc-200 opacity-[0.95] fixed inset-0 z-50">
      <div className="flex justify-center  h-screen items-center">
        <div className="bg-white p-16 rounded-2xl">
          <h1 className="text-gray-800 text-lg">Your Book has been submitted for Approval. We will contact you shortly</h1>
          <div className="flex">
            <button className=" btn bg-green-600 text-white m-6 mx-auto" onClick={handleClickOK}>OK</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal2;
