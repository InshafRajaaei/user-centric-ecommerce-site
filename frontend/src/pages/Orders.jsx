// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import Title from "../components/Title";
// import axios from "axios";

// const Orders = () => {
//   const { backendUrl, token, currency } = useContext(ShopContext);

//   const [orderData, setorderData] = useState([]);

//   const loadOrderData = async () => {
//     try {
//       if (!token) {
//         return null;
//       }

//       const response = await axios.post(
//         backendUrl + "/api/order/userorders",
//         {},
//         { headers: { token } }
//       );
//       if (response.data.success) {
//         let allOrderItem = [];
//         response.data.orders.map((order) => {
//           order.items.map((item) => {
//             item["status"] = order.status;
//             item["payment"] = order.payment;
//             item["paymentMethod"] = order.paymentMethod;
//             item["date"] = order.date;
//             allOrderItem.push(item);
//           });
//         });
//         setorderData(allOrderItem.reverse());
//       }
//     } catch (error) {}
//   };

//   useEffect(() => {
//     loadOrderData();
//   }, [token]);

//   return (
//     <div className="border-t pt-16">
//       <div className="text-2xl">
//         <Title text1={"MY"} text2={"ORDERS"}></Title>
//       </div>

//       <div>
//         {orderData.map((item, index) => (
//           <div
//             key={index}
//             className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
//           >
//             <div className="flex items-start gap-6 text-sm">
//               <img className="w-16 sm:w-20" src={item.image[0]} alt="" />
//               <div>
//                 <p className="sm:text-base font-medium">{item.name}</p>
//                 <div className="flex items-center gap-3 mt-1 text-base text-gray-700">
//                   <p>{currency}{item.price}</p>
//                   <p>Quantity: {item.quantity}</p>
//                   <p>Size: {item.size}</p>
//                 </div>
//                 <p className="mt-1">
//                   Date: <span className="text-gray-400">{new Date(item.date).toDateString()}</span>
//                 </p>
//                  <p className="mt-1">
//                   Payment: <span className="text-gray-400">{item.paymentMethod}</span>
//                 </p>
//               </div>
//             </div>
//             <div className="md:w-1/2 flex justify-between">
//               <div className="flex items-center gap-2">
//                 <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
//                 <p className="text-sm md:text-base">{item.status}</p>
//               </div>
//               <button onClick={loadOrderData} className="border px-4 py-2 text-sm font-medium rounded-sm">
//                 Track Order
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Orders;

import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orders, setOrders] = useState([]);

  const loadOrderData = async () => {
    if (!token) return;
    try {
      const response = await axios.post(`${backendUrl}/api/order/userorders`, {}, { headers: { token } });
      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      }
    } catch (error) {
      console.error("Failed to load orders:", error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t pt-16">
      <div className="text-2xl mb-8">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      <div className="space-y-6">
        {orders.length > 0 ? (
          orders.map((order) => (
            <div key={order._id} className="bg-white border border-slate-200 rounded-lg p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 border-b">
                <div>
                  <h3 className="font-semibold text-slate-800">Order #{order._id.slice(-6)}</h3>
                  <p className="text-sm text-slate-500">Date: {new Date(order.date).toLocaleDateString()}</p>
                </div>
                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  <span className={`h-2.5 w-2.5 rounded-full ${order.status === 'Delivered' ? 'bg-green-500' : 'bg-amber-500'}`}></span>
                  <p className="text-sm font-medium text-slate-700">{order.status}</p>
                </div>
              </div>
              <div className="divide-y divide-slate-100">
                {order.items.map((item, index) => (
                   <div key={index} className="py-4 flex gap-4">
                      <img className="w-16 h-16 object-cover rounded-md" src={item.image[0]} alt={item.name} />
                      <div className="flex-1">
                          <p className="font-medium text-slate-800">{item.name}</p>
                          <p className="text-sm text-slate-500">Size: {item.size} | Qty: {item.quantity}</p>
                      </div>
                      <p className="font-semibold text-slate-700">{currency}{item.price}</p>
                   </div>
                ))}
              </div>
              <div className="pt-4 text-right">
                <p className="text-lg font-semibold text-slate-900">Total: {currency}{order.amount}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold text-slate-800">No Orders Yet</h3>
            <p className="mt-2 text-slate-500">You haven't placed any orders with us. Let's change that!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;