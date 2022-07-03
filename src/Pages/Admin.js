import React, {useState} from "react";
import {collection, addDoc } from "firebase/firestore"; 
import {db} from "../firebase-config";
import {storage} from "../firebase-config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; 
import {v4} from "uuid";

function Admin() {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [type, setType] = useState("");
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    
   
    const uploadImage = async () => {
        if(image == null) return ;
        
        const imageRef = ref(storage, `images/${image.name + v4()}`);
        try {

            const imageDoc = await uploadBytes(imageRef, image);
            alert("image UPLOADED");
            // console.log(imageDoc.id);
            getDownloadURL( imageRef ).then( async (url)=>{

              // await delay(1000);
                console.log("pehla - "+url);
                 setImageUrl(url);
                console.log("0th - "+ imageUrl);
            })
            console.log("first - " + imageUrl);

        } catch (error) {
            console.log(error.message);
        }       
        
    }
    
    const create = async () => {
        const categoryCollectionRef = collection(db, category);
        const typeCollectionRef = collection(db, type);
        
          // await  uploadImage();
        //     if(image == null) return ;
        
        // const imageRef = ref(storage, `images/${image.name + v4()}`);
        // try {

        //     const imageDoc = await uploadBytes(imageRef, image);
        //     alert("image UPLOADED");
        //     // console.log(imageDoc.id);
        //     getDownloadURL( imageRef ).then( async (url)=>{
        //       await delay(1000);
        //         console.log("pehla - "+url);
        //          setImageUrl(url);
        //         console.log("0th - "+ imageUrl);
        //     })
        //     console.log("first - " + imageUrl);

        // } catch (error) {
        //     console.log(error.message);
        // }       
        






            console.log("second - " + imageUrl);

            const categoryDocRef = await addDoc(categoryCollectionRef, {Name: name, Description: description, Price: price, Type: type, Category: category, imageUrl : imageUrl });

            const typeDocRef = await addDoc(typeCollectionRef, {Name: name, Description: description, Price: price, Type: type, Category: category, imageUrl : imageUrl });

        
    }


  return (
    <div className="bg-yellow-600 w-[50rem] py-24 mx-auto ">
      <div className="form-control px-56 ">
        <div className="px-0">
          <label className="label">
            <span className="label-text text-white">Name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
              onChange={(event) => {
                setName(event.target.value);
              }}
            className="input input-bordered input-secondary w-full max-w-xs"
          />
        </div>

        <div className="px-0">
          <label className="label">
            <span className="label-text text-white">Price</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            className="input input-bordered input-secondary w-full max-w-xs"
          />
        </div>
        <div className="px-0">
          <label className="label">
            <span className="label-text text-white">Description</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            className="input input-bordered input-secondary w-full max-w-xs"
          />
        </div>

        <div className="px-0">
        <label
            for="countries"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Category
          </label>
          <select
            id="countries"
            onChange={(event) => {
                setCategory(event.target.value);
              }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option selected >Choose a Category</option>
            <option value="UPSC">UPSC</option>
            <option value="NCERT">NCERT</option>
            <option value="NEET">NEET</option>
            <option value="IIT">IIT JEE</option>
            <option value="SSC">SSC</option>
            <option value="Kids">KIDS</option>
            <option value="Novels">NOVELS</option>
            <option value="Banking">BANKING</option>

          </select>
        </div>
        <div className="px-0">
          <label
            for="countries"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Select an option
          </label>
          <select
            id="countries"
            onChange={(event) => {
                setType(event.target.value);
              }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option selected >Choose Type</option>
            <option value="Rent">Rent</option>
            <option value="Old">Old</option>
            <option value="New">New</option>
                      

          </select>
        </div>

        <div className="px-0">
          <label className="label">
            <span className="label-text text-white">Image</span>
          </label>
          <input
            type="file"
            placeholder="Upload Image"
              onChange={(event) => {
                setImage(event.target.files[0]);
              }}
            className="input input-bordered input-secondary w-full max-w-xs"

          />
          <button className="btn-primary btn" onClick={uploadImage}>Upload</button>
        </div>
        <button
          className="btn btn-primary my-4 mx-10"
            onClick={create}
        >
          Create Item
        </button>
        <p
          className="cursor-pointer"
          // onClick={() => {
          //   navigate("/");
          // }}
        >
          Already have an account? Signup Here
        </p>
      </div>
    </div>
  );
}

export default Admin;
