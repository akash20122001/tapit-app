import React,{useState} from 'react'
import wallPaper from "../assets/wallpaper.png";
import log from "../assets/log.png";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase-config";

function Login() {

    const navigate = useNavigate();

    const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // const [user, setUser] = useState({});

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };



    return (
  
      <div>
        
        <div className="w-[40rem] mx-auto pt-[10rem]">
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
                    onChange={(event)=>{setLoginEmail(event.target.value)}}
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
                    onChange={(event)=>{setLoginPassword(event.target.value)}}
                    className="input input-bordered input-secondary w-full max-w-xs"
                  />
                </div>
                <button
                className="btn btn-primary my-4 mx-10"
                onClick={login}
              >
                Login
              </button>
              <p className="cursor-pointer" onClick={() => navigate("/signup")}>
                Don't have an account? Signup Here
              </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
}

export default Login