import React, { useState, useEffect, useContext } from "react";
import log from "../assets/log.png";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase-config";
import { UserContext } from "../Contexts/UserContext";
import logo from "../assets/logo2.png";

export default function Signup() {
  const navigate = useNavigate();

  const currentUserrr = useContext(UserContext);

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

 

  const signup = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  if (!currentUserrr) {
    return (
      <div className="w-screen h-screen bg-white">
        <img className="mx-auto w-64 pt-16" src={logo} alt="" />
        <div className="w-[40rem] mx-auto pt-[4rem]">
          <div className="card card-side bg-base-100 shadow-xl">
            <figure>
              <img className="w-full h-full" src={log} alt="Movie" />
            </figure>
            <div className="card-body w-[40rem]">
              <h2 className="card-title mx-auto">Create Account</h2>
              <div className="form-control ">
                <div className="px-0">
                  <label className="label">
                    <span className="label-text">Email address</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    onChange={(event) => {
                      setRegisterEmail(event.target.value);
                    }}
                    className="input input-bordered input-secondary w-full max-w-xs"
                  />
                </div>

                <div className="px-0">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    onChange={(event) => {
                      setRegisterPassword(event.target.value);
                    }}
                    className="input input-bordered input-secondary w-full max-w-xs"
                  />
                </div>
                <button className="btn btn-primary my-4 mx-10" onClick={signup}>
                  Signup
                </button>

                <p
                  className="cursor-pointer"
                  onClick={() => {
                    navigate("/login");
                    // UserState.hello
                  }}
                >
                  Already have an account? Signup Here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      // <div>{currentUserrr.email}</div>
      navigate("/home")
    );
  }
}
