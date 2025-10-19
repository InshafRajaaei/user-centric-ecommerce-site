// // // import React, { useEffect, useState } from "react";
// // // import axios from "axios";
// // // import { backendUrl, currency } from "../App";
// // // import { toast } from "react-toastify";
// // // import { assets } from "../assets/assets";
// // // // import { response } from "express";

// // // const Orders = ({ token }) => {
// // //   const [orders, setOrders] = useState([]);

// // //   const fetchAllOrders = async () => {
// // //     if (!token) {
// // //       return null;
// // //     }

// // //     try {
// // //       const response = await axios.post(
// // //         backendUrl + "/api/order/list",
// // //         {},
// // //         { headers: { token } }
// // //       );
// // //       if (response.data.success) {
// // //         setOrders(response.data.orders.reverse());
// // //       } else {
// // //         toast.error(response.data.message);
// // //       }
// // //     } catch (error) {
// // //       toast.error(error.message);
// // //     }
// // //   };

// // //   const statusHandler = async (event, orderId) => {
// // //     try {
// // //       const response = await axios.post(backendUrl + '/api/order/status' , {orderId, status:event.target.value},{headers:{token}})
// // //       if (response.data.success) {
// // //         await fetchAllOrders()
// // //       }
// // //     } catch (error) {
// // //       console.log(error)
// // //       toast.error(response.data.message)
      
// // //     }
// // //   }

// // //   useEffect(() => {
// // //     fetchAllOrders();
// // //   }, [token]);

// // //   return (
// // //     <div>
// // //       <h3>Order Page</h3>
// // //       <div>
// // //         {orders.map((order, index) => (
// // //           <div className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700" key={index}>
// // //             <img className="w-12" src={assets.parcel_icon} alt="" />
// // //             <div>
// // //               <div>
// // //                 {order.items.map((item, index) => {
// // //                   if (index === order.items.length - 1) {
// // //                     return (
// // //                       <p className="py-0.5" key={index}>
// // //                         {" "}
// // //                         {item.name} x {item.quantity} <span> {item.size} </span>{" "}
// // //                       </p>
// // //                     );
// // //                   } else {
// // //                     return (
// // //                       <p className="py-0.5" key={index}>
// // //                         {" "}
// // //                         {item.name} x {item.quantity} <span> {item.size} </span>{" "}
// // //                         ,
// // //                       </p>
// // //                     );
// // //                   }
// // //                 })}
// // //               </div>
// // //               <p className="mt-3 mb-2 font-medium">{order.address.firstName + " " + order.address.lastName}</p>
// // //               <div>
// // //                 <p>{order.address.street + ","}</p>
// // //                 <p>
// // //                   {order.address.city +
// // //                     ", " +
// // //                     order.address.state +
// // //                     ", " +
// // //                     order.address.country +
// // //                     ", " +
// // //                     order.address.zipcode}
// // //                 </p>
// // //               </div>
// // //               <p>{order.address.phone}</p>
// // //             </div>
// // //             <div>
// // //               <p className="text-sm sm:text-[15px]">Items : {order.items.length}</p>
// // //               <p className="mt-3">Method : {order.paymentMethod}</p>
// // //               <p>Payment : { order.payment ? 'Done' : 'Pending' }</p>
// // //               <p>Date : {new Date(order.date).toLocaleDateString()}</p>
// // //             </div>
// // //             <p className="text-sm sm:text-[15px]">{currency} {order.amount}</p>
// // //             <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} className="p-2 font-semibold">
// // //               <option value="Order Placed">Order Placed</option>
// // //               <option value="Packing">Packing</option>
// // //               <option value="Shipped">Shipped</option>
// // //               <option value="Out For Delivery">Out For Delivery</option>
// // //               <option value="Delivered">Delivered</option>
// // //             </select>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Orders;

// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import { backendUrl, currency } from "../App";
// // import { toast } from "react-toastify";
// // import { assets } from "../assets/assets";

// // const Orders = ({ token }) => {
// //   const [orders, setOrders] = useState([]);

// //   const fetchAllOrders = async () => {
// //     if (!token) {
// //       return null;
// //     }

// //     try {
// //       const response = await axios.post(
// //         backendUrl + "/api/order/list",
// //         {},
// //         { headers: { token } }
// //       );
// //       if (response.data.success) {
// //         setOrders(response.data.orders.reverse());
// //       } else {
// //         toast.error(response.data.message);
// //       }
// //     } catch (error) {
// //       toast.error(error.message);
// //     }
// //   };

// //   const statusHandler = async (event, orderId) => {
// //     try {
// //       const response = await axios.post(backendUrl + '/api/order/status' , {orderId, status:event.target.value},{headers:{token}})
// //       if (response.data.success) {
// //         await fetchAllOrders()
// //       }
// //     } catch (error) {
// //       console.log(error)
// //       // Keeping same behavior; styling only
// //       toast.error(response.data?.message)
// //     }
// //   }

// //   useEffect(() => {
// //     fetchAllOrders();
// //   }, [token]);

// //   return (
// //     <div className="space-y-4">
// //       <h3 className="text-lg font-semibold text-slate-800">Orders</h3>
// //       <div className="space-y-3">
// //         {orders.map((order, index) => (
// //           <div
// //             className="card grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-4 items-start p-5 md:p-6"
// //             key={index}
// //           >
// //             <img className="w-12" src={assets.parcel_icon} alt="" />
// //             <div>
// //               <div className="text-slate-700">
// //                 {order.items.map((item, idx) => {
// //                   const content = (
// //                     <span key={idx}>
// //                       {item.name} x {item.quantity} <span className="text-slate-500">{item.size}</span>
// //                     </span>
// //                   )
// //                   return (
// //                     <p className="py-0.5" key={idx}>
// //                       {content}{idx === order.items.length - 1 ? '' : ','}
// //                     </p>
// //                   )
// //                 })}
// //               </div>
// //               <p className="mt-3 mb-2 font-medium text-slate-800">
// //                 {order.address.firstName + " " + order.address.lastName}
// //               </p>
// //               <div className="text-slate-600">
// //                 <p>{order.address.street + ","}</p>
// //                 <p>
// //                   {order.address.city +
// //                     ", " +
// //                     order.address.state +
// //                     ", " +
// //                     order.address.country +
// //                     ", " +
// //                     order.address.zipcode}
// //                 </p>
// //               </div>
// //               <p className="text-slate-700 mt-1">{order.address.phone}</p>
// //             </div>

// //             <div className="text-slate-700">
// //               <p className="text-sm sm:text-[15px]">Items: <span className="font-medium">{order.items.length}</span></p>
// //               <p className="mt-3">Method: <span className="font-medium">{order.paymentMethod}</span></p>
// //               <p>
// //                 Payment:{" "}
// //                 <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${order.payment ? 'text-green-700 bg-green-50 border-green-200' : 'text-amber-700 bg-amber-50 border-amber-200'}`}>
// //                   { order.payment ? 'Done' : 'Pending' }
// //                 </span>
// //               </p>
// //               <p>Date: <span className="font-medium">{new Date(order.date).toLocaleDateString()}</span></p>
// //             </div>

// //             <p className="text-sm sm:text-[15px] font-semibold text-slate-800">{currency} {order.amount}</p>

// //             <select
// //               onChange={(event)=>statusHandler(event,order._id)}
// //               value={order.status}
// //               className="input font-semibold"
// //             >
// //               <option value="Order Placed">Order Placed</option>
// //               <option value="Packing">Packing</option>
// //               <option value="Shipped">Shipped</option>
// //               <option value="Out For Delivery">Out For Delivery</option>
// //               <option value="Delivered">Delivered</option>
// //             </select>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Orders;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { backendUrl, currency } from "../App";
// import { toast } from "react-toastify";
// import { assets } from "../assets/assets";

// const Orders = ({ token }) => {
//     const [orders, setOrders] = useState([]);

//     const fetchAllOrders = async () => {
//         if (!token) return null;
//         try {
//             const response = await axios.post(`${backendUrl}/api/order/list`, {}, { headers: { token } });
//             if (response.data.success) {
//                 setOrders(response.data.orders.reverse());
//             } else {
//                 toast.error(response.data.message);
//             }
//         } catch (error) {
//             toast.error(error.message);
//         }
//     };

//     const statusHandler = async (event, orderId) => {
//         try {
//             const response = await axios.post(`${backendUrl}/api/order/status`, { orderId, status: event.target.value }, { headers: { token } });
//             if (response.data.success) {
//                 await fetchAllOrders();
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(response.data?.message || "Status update failed");
//         }
//     }

//     useEffect(() => {
//         fetchAllOrders();
//     }, [token]);

//     return (
//         <div className="space-y-4">
//             <h3 className="text-lg font-semibold text-dark">Customer Orders</h3>
//             <div className="space-y-4">
//                 {orders.map((order, index) => (
//                     <div className="card grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-4 items-start p-5 md:p-6" key={index}>
//                         <img className="w-12" src={assets.parcel_icon} alt="" />
//                         <div>
//                             <div className="text-medium">
//                                 {order.items.map((item, idx) => (
//                                     <p className="py-0.5" key={idx}>
//                                         {item.name} x {item.quantity}
//                                         <span className="text-subtle ml-1">({item.size})</span>
//                                         {idx < order.items.length - 1 ? ',' : ''}
//                                     </p>
//                                 ))}
//                             </div>
//                             <p className="mt-3 mb-2 font-medium text-dark">{order.address.firstName} {order.address.lastName}</p>
//                             <div className="text-medium text-sm">
//                                 <p>{order.address.street},</p>
//                                 <p>{order.address.city}, {order.address.state}, {order.address.zipcode}</p>
//                             </div>
//                             <p className="text-dark mt-1 text-sm">{order.address.phone}</p>
//                         </div>
//                         <div className="text-medium space-y-1 text-sm">
//                             <p>Items: <span className="font-medium text-dark">{order.items.length}</span></p>
//                             <p>Method: <span className="font-medium text-dark">{order.paymentMethod}</span></p>
//                             <p>Payment: <span className={`status-chip ${order.payment ? 'status-green' : 'status-amber'}`}>{order.payment ? 'Done' : 'Pending'}</span></p>
//                             <p>Date: <span className="font-medium text-dark">{new Date(order.date).toLocaleDateString()}</span></p>
//                         </div>
//                         <p className="text-[15px] font-semibold text-dark">{currency} {order.amount}</p>
//                         <select onChange={(event) => statusHandler(event, order._id)} value={order.status} className="input font-semibold">
//                             <option value="Order Placed">Order Placed</option>
//                             <option value="Packing">Packing</option>
//                             <option value="Shipped">Shipped</option>
//                             <option value="Out For Delivery">Out For Delivery</option>
//                             <option value="Delivered">Delivered</option>
//                         </select>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Orders;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({ token }) => {
    const [orders, setOrders] = useState([]);

    const fetchAllOrders = async () => {
        if (!token) return null;
        try {
            const response = await axios.post(`${backendUrl}/api/order/list`, {}, { headers: { token } });
            if (response.data.success) {
                setOrders(response.data.orders.reverse());
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    const statusHandler = async (event, orderId) => {
        try {
            const response = await axios.post(`${backendUrl}/api/order/status`, { orderId, status: event.target.value }, { headers: { token } });
            if (response.data.success) {
                await fetchAllOrders();
            }
        } catch (error) {
            console.log(error);
            toast.error(response.data?.message || "Status update failed");
        }
    }

    useEffect(() => {
        fetchAllOrders();
    }, [token]);

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold text-dark">Customer Orders</h3>
            <div className="space-y-4">
                {orders.map((order, index) => (
                    <div className="card grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-4 items-start p-5 md:p-6" key={index}>
                        <img className="w-12" src={assets.parcel_icon} alt="" />
                        <div>
                            <div className="text-medium">
                                {order.items.map((item, idx) => (
                                    <p className="py-0.5" key={idx}>
                                        {item.name} x {item.quantity}
                                        <span className="text-subtle ml-1">({item.size})</span>
                                        {idx < order.items.length - 1 ? ',' : ''}
                                    </p>
                                ))}
                            </div>
                            <p className="mt-3 mb-2 font-medium text-dark">{order.address.firstName} {order.address.lastName}</p>
                            <div className="text-medium text-sm">
                                <p>{order.address.street},</p>
                                <p>{order.address.city}, {order.address.state}, {order.address.zipcode}</p>
                            </div>
                            <p className="text-dark mt-1 text-sm">{order.address.phone}</p>
                        </div>
                        <div className="text-medium space-y-1 text-sm">
                            <p>Items: <span className="font-medium text-dark">{order.items.length}</span></p>
                            <p>Method: <span className="font-medium text-dark">{order.paymentMethod}</span></p>
                            <p>Payment: <span className={`status-chip ${order.payment ? 'status-green' : 'status-amber'}`}>{order.payment ? 'Done' : 'Pending'}</span></p>
                            <p>Date: <span className="font-medium text-dark">{new Date(order.date).toLocaleDateString()}</span></p>
                        </div>
                        <p className="text-[15px] font-semibold text-dark">{currency} {order.amount}</p>
                        <select onChange={(event) => statusHandler(event, order._id)} value={order.status} className="input font-semibold">
                            <option value="Order Placed">Order Placed</option>
                            <option value="Packing">Packing</option>
                            <option value="Shipped">Shipped</option>
                            <option value="Out For Delivery">Out For Delivery</option>
                            <option value="Delivered">Delivered</option>
                        </select>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Orders;