import React,{useState, useEffect, useContext} from "react";
import Navbar from "../Components/Navbar";
import banner from "../assets/newBanner.png";
import Footer from "../Components/Footer";
import {collection, getDocs } from "firebase/firestore"; 
import {db} from "../firebase-config";
import Modal from "../Components/Modal";

import { UserContext } from "../Contexts/UserContext";

function New() {

  const currentUserrr = useContext(UserContext);


  const [newBooks, setNewBooks] = useState([]);
  const newCollectionRef = collection(db, "New");

  useEffect(() => {
    
    const getNewBooks = async () => {
      const data = await getDocs(newCollectionRef);
      console.log(data);
      setNewBooks(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      console.log(newBooks);
    }
  
    getNewBooks();
  }, [])


  const [modalOn, setModalOn] = useState(false);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");

  const [userEmail, setUserEmail] = useState("");

  const clicked = (n,p,d,i,t,c,e) => {
    setName(n);
    setPrice(p);
    setDescription(d);
    setImageUrl(i);
    setType(t);
    setCategory(c);
    setUserEmail(e);

    setModalOn(true);
  }



  return (
    <div>
        <Navbar currentUserrr = {currentUserrr?.email}/>
      <img className="mx-auto mt-4 w-[90rem]" src={banner} alt="" />
      <div className="bg-gray-200 my-4">
        <h1 className="text-black text-3xl p-6 font-bold">Available New Books</h1>
        <div className="grid grid-cols-5 gap-4 px-12">
        {newBooks.map((newBook,i) => {
          return  <div key={i} className="card m-3 bg-base-100 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-200" onClick={() => clicked(newBook.Name, newBook.Price, newBook.Description, newBook.imageUrl, newBook.Type, newBook.Category, currentUserrr?.email )}>
          <figure className = "w-full">
            <img  className = "w-full"
              src={newBook.imageUrl}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title w-[20rem]">
              
              {newBook.Name?.substring(0, 15)+"..."}
              <div className="badge badge-secondary">&#8377; {newBook.Price}</div>
            </h2>
            <p>{newBook.Description?.substring(0, 25)+"..."}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{newBook.Category}</div>
              <div className="badge badge-outline">{newBook.Type}</div>
            </div>
          </div>
        
          </div>
         })}
         
         {modalOn && <Modal setModalOn = {setModalOn} name={name} setName = {setName} price={price} description = {description} imageUrl={imageUrl} type={type} category={category} userEmail = {userEmail} isRent = {false} isNew = {true} isOld = {false}  />}
      
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default New