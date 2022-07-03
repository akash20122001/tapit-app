import React, {useContext, useState, useEffect} from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import { UserContext } from "../Contexts/UserContext";
import {db} from "../firebase-config";

function MyOrders() {

    const currentUserrr = useContext(UserContext);

    const [orders, setOrders] = useState([]);
    const orderRef = collection(db, "Order");

    




    var user = currentUserrr?currentUserrr.email : "";
    // console.log(user);

    const fetchAllOrders = async () => {
        const q =  query(orderRef, where("userEmail", "==", user));
      const data = await getDocs(q);
    //   console.log(data);
      setOrders(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    //   console.log(orders);
    }

    useEffect(() => {
        
        
    fetchAllOrders();
  }, [fetchAllOrders])

  return (
    <div>MyOrders
        {orders.map((order,i) => {

          return <div key={i} className="card m-3 bg-base-100 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-200" >
            <figure className="border-2 border-gray-800 rounded-2xl bg-base-100">
              <img src={order.imageUrl}
               alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-2xl text-gray-800">
              {order.Name}

              </h2>

              <div className="flex justify-center  my-4">
                <div class="badge badge-ghost px-8 mx-8">{order.type}</div>
                <div class="badge badge-ghost px-8 mx-8">{order.category}</div>
              </div>

              <p className="text-gray-800 text-justify">{order.description}</p>

             <div className="flex justify-start">
              <h1 className="font-bold text-xl text-gray-800">Price : </h1>
              <span className="mx-6 text-gray-700 font-bold text-xl">&#8377;{order.price}</span>
             </div>

              
            </div>
          </div>





         
         })}
    </div>
  )
}

export default MyOrders