import React,{useState, useEffect, useContext} from "react";
import Navbar from "../Components/Navbar";
import banner from "../assets/rentBanner.png";
import Footer from "../Components/Footer";
import {collection, getDocs } from "firebase/firestore"; 
import {db} from "../firebase-config";
import { useNavigate } from "react-router-dom";
import Modal from "../Components/Modal";

import { UserContext } from "../Contexts/UserContext";

function SSC() {

    const currentUserrr = useContext(UserContext);


  const [SSCBooks, setSSCBooks] = useState([]);
  const SSCBooksCollectionRef = collection(db, "SSC");

  useEffect(() => {
    
    const getSSCBooks = async () => {
      const data = await getDocs(SSCBooksCollectionRef);
      console.log(data);
      setSSCBooks(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      console.log(SSCBooks);
    }
  
    getSSCBooks();
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
      <Navbar currentUserrr={currentUserrr?.email} />
      <img className="mx-auto mt-4 w-[90rem]" src={banner} alt="" />
      <div className="bg-gray-200 my-4">
        <h1 className="text-black text-3xl p-6 font-bold">
          Available SSC Books
        </h1>
        <div className="grid grid-cols-5 gap-4 px-12">
          {SSCBooks.map((SSCBook, i) => {
            return (
              <div
                key={i}
                className="card m-3 bg-base-100 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-200"
                onClick={() =>
                  clicked(
                    SSCBook.Name,
                    SSCBook.Price,
                    SSCBook.Description,
                    SSCBook.imageUrl,
                    SSCBook.Type,
                    SSCBook.Category,
                    currentUserrr?.email
                  )
                }
              >
                <figure className="w-full">
                  <img className="w-full" src={SSCBook.imageUrl} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title w-[20rem]">
                    {SSCBook.Name?.substring(0, 15) + "..."}
                    <div className="badge badge-secondary">
                      &#8377; {SSCBook.Price}
                    </div>
                  </h2>
                  <p>{SSCBook.Description?.substring(0, 25) + "..."}</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">
                      {SSCBook.Category}
                    </div>
                    <div className="badge badge-outline">{SSCBook.Type}</div>
                  </div>
                </div>
              </div>
            );
          })}

          {modalOn && (
            <Modal
              setModalOn={setModalOn}
              name={name}
              setName={setName}
              price={price}
              description={description}
              imageUrl={imageUrl}
              type={type}
              category={category}
              userEmail={userEmail}
              isRent={type==='Rent'?true:false}
              isNew={type==='New'?true:false}
              isOld={type==='Old'?true:false}
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}


export default SSC