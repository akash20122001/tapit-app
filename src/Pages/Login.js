import React, { useState, useEffect } from "react";
import wallPaper from "../assets/wallpaper.png";
import log from "../assets/log.png";
import logo from "../assets/logo2.png";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase-config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {

  const navigate = useNavigate();


  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const notify = () => toast.success('Logged in successfully!', {
    position: "top-right",
    autoClose: 4998,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      notify();
      navigate("/");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "top-right",
        autoClose: 4998,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
  };

  if (user) {
    navigate("/");
  } else {
    return (
      <div className="w-screen h-screen bg-white">
        <img className="mx-auto w-64 pt-16" src={logo} alt="" />
        <div className="w-[40rem] mx-auto pt-[4rem]">
          <div className="card card-side bg-base-100 shadow-xl">
            <figure>
              <img className="w-full h-full" src={log} alt="Movie" />
            </figure>
            <div className="card-body w-[40rem]">
              <h2 className="card-title mx-auto">Login</h2>
              <div className="form-control ">
                <div className="px-0">
                  <label className="label">
                    <span className="label-text">Email address</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    onChange={(event) => {
                      setLoginEmail(event.target.value);
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
                      setLoginPassword(event.target.value);
                    }}
                    className="input input-bordered input-secondary w-full max-w-xs"
                  />
                </div>
                <button className="btn btn-primary my-4 mx-10" onClick={login}>
                  Login
                </button>
                <p
                  className="cursor-pointer"
                  onClick={() => navigate("/signup")}
                >
                  Don't have an account? Signup Here
                </p>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />

      </div>
    );
  }
}

// }

export default Login;
