// // import React, { useEffect, useState } from "react";
// // import Navbar from "./components/Navbar";
// // import Sidebar from "./components/Sidebar";
// // import { Routes, Route } from "react-router-dom";
// // import Add from "./pages/Add";
// // import List from "./pages/List";
// // import Orders from "./pages/Orders";
// // import Login from "./components/Login";
// // import { ToastContainer } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css'

// // export const backendUrl = import.meta.env.VITE_BACKEND_URL
// // export const currency = 'Rs.'

// // const App = () => {
// //   const [token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):'');

// //   useEffect(()=>{
// //     localStorage.setItem('token',token)
// //   },[token])

// //   return (
// //     <div className="bg-gray-50 min-h-screen">
// //       <ToastContainer/>
// //       {token === "" ? (
// //         <Login setToken={setToken} />
// //       ) : (
// //         <>
// //           <Navbar setToken={setToken}></Navbar>
// //           <hr />
// //           <div className="flex w-full">
// //             <Sidebar></Sidebar>
// //             <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 to-gray-600 text-base">
// //               <Routes>
// //                 <Route path="/add" element={<Add token={token} />}></Route>
// //                 <Route path="/list" element={<List token={token} />}></Route>
// //                 <Route path="/orders" element={<Orders token={token} />}></Route>
// //               </Routes>
// //             </div>
// //           </div>
// //         </>
// //       )}
// //     </div>
// //   );
// // };

// // export default App;

// import React, { useEffect, useState } from "react";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
// import { Routes, Route } from "react-router-dom";
// import Add from "./pages/Add";
// import List from "./pages/List";
// import Orders from "./pages/Orders";
// import Login from "./components/Login";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'

// export const backendUrl = import.meta.env.VITE_BACKEND_URL
// export const currency = 'Rs.'

// const App = () => {
//   const [token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):'');

//   useEffect(()=>{
//     localStorage.setItem('token',token)
//   },[token])

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-white text-slate-700">
//       <ToastContainer position="top-right" />

//       {token === "" ? (
//         <Login setToken={setToken} />
//       ) : (
//         <>
//           <Navbar setToken={setToken} />
//           <div className="flex w-full">
//             <Sidebar />
//             <div className="flex-1 px-6 sm:px-10 py-8">
//               <div className="max-w-[1200px] mx-auto">
//                 <Routes>
//                   <Route path="/add" element={<Add token={token} />}></Route>
//                   <Route path="/list" element={<List token={token} />}></Route>
//                   <Route path="/orders" element={<Orders token={token} />}></Route>
//                 </Routes>
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default App;

import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import Login from "./components/Login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = 'Rs.';

const App = () => {
    const [token, setToken] = useState(localStorage.getItem('token') || '');

    useEffect(() => {
        localStorage.setItem('token', token);
    }, [token]);

    return (
        <div className="min-h-screen bg-light text-medium">
            <ToastContainer position="top-right" autoClose={3000} />
            {token === "" ? (
                <Login setToken={setToken} />
            ) : (
                <>
                    <Navbar setToken={setToken} />
                    <div className="flex w-full">
                        <Sidebar />
                        <main className="flex-1 px-6 sm:px-10 py-8">
                            <div className="max-w-7xl mx-auto">
                                <Routes>
                                    <Route path="/add" element={<Add token={token} />} />
                                    <Route path="/list" element={<List token={token} />} />
                                    <Route path="/orders" element={<Orders token={token} />} />
                                </Routes>
                            </div>
                        </main>
                    </div>
                </>
            )}
        </div>
    );
};

export default App;