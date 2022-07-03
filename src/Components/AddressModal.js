import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddressModal({ setModalOn }) {
  const navigate = useNavigate();

  const handleClickOK = () => {
    setModalOn(false);
    navigate("/");

    
  };

  return (
    <div className="bg-zinc-200 opacity-[0.95] fixed inset-0 z-50">
      <div className="flex justify-center  h-screen items-center">
        <div className="bg-white p-16 rounded-2xl">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your bio</span>
              <span className="label-text-alt">Alt label</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
            <label className="label">
              <span className="label-text-alt">Your bio</span>
              <span className="label-text-alt">Alt label</span>
            </label>
            <button
              className=" btn bg-green-600 text-white m-6 mx-auto"
              onClick={handleClickOK}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddressModal;
