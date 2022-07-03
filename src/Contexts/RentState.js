// import RentContext from "./RentContext";
// import React, { useState } from "react";
// import {collection, getDocs } from "firebase/firestore"; 
// import {db} from "../firebase-config";

// const RentState = (props) => {

//     // const navigate = useNavigate();
//     const [rentBooks, setRentBooks] = useState([]);
//     const rentCollectionRef = collection(db, "Rent");

//     const state = {
//         "name" : "Akash"
//     }

//     const getRentBooks = async () => {
//         const data = await getDocs(rentCollectionRef);
//         console.log(data);
//         setRentBooks(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
//         console.log(rentBooks);
//       }
    


//     const hello = () => {
//         console.log("hadfhdkfhdfh vjdsbfdsds vds f");
//     }




//     return (
//         <UserContext.Provider value = {{rentBooks, getRentBooks}} >
//             {props.children}
//         </UserContext.Provider>
//     )
// }

// export default UserState;

