// // import axios from 'axios'
// // import React, { useEffect, useState } from 'react'
// // import { backendUrl, currency } from '../App'
// // import { toast } from 'react-toastify'

// // const List = ({token}) => {

// //   const [list,setList] = useState([])

// //   const fetchList = async () => {
// //     try {
      
// //       const response = await axios.get(backendUrl + '/api/product/list')
// //       if (response.data.success) {
// //         setList(response.data.products);
// //       }
// //       else {
// //         toast.error(response.data.message)
// //       }
      

// //     } catch (error) {
// //       console.log(error)
// //       toast.error(error.message)
// //     }
// //   }

// //   const removeProduct = async (id) => {
// //     try {
      
// //       const response = await axios.post(backendUrl + '/api/product/remove', {id} , {headers:{token}})

// //       if (response.data.success) {
// //         toast.success(response.data.message)
// //         await fetchList();
// //       } else {
// //         toast.error(response.data.message)
// //       }

// //     } catch (error) {
// //       console.log(error)
// //       toast.error(error.message)
// //     }
// //   }

// //   useEffect(()=>{
// //     fetchList()
// //   },[])

// //   return (
// //     <>
// //       <p className='mb-2'>All Products List</p>
// //       <div className='flex flex-col gap-2'>

// //       {/* ---------------List Table Title ---------------------- */}

// //       <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
// //         <b>Image</b>
// //         <b>Name</b>
// //         <b>Category</b>
// //         <b>Price</b>
// //         <b>Action</b>
// //       </div>

// //       {/* ----------------Product List------------------------ */}

// //       {
// //         list.map((item,index) => (
// //           <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm' key={index}>
// //             <img className='w-12' src={item.image[0]} alt="" />
// //             <p>{item.name}</p>
// //             <p>{item.category}</p>
// //             <p>{currency}{item.price}</p>
// //             <p onClick={()=>removeProduct(item._id)} className='text-right md:text-center cursor-pointer text-lg'>X</p>
// //           </div>
// //         ))
// //       }

// //       </div>
// //     </>
// //   )
// // }

// // export default List

// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { backendUrl, currency } from '../App'
// import { toast } from 'react-toastify'

// const List = ({token}) => {

//   const [list,setList] = useState([])

//   const fetchList = async () => {
//     try {
//       const response = await axios.get(backendUrl + '/api/product/list')
//       if (response.data.success) {
//         setList(response.data.products);
//       }
//       else {
//         toast.error(response.data.message)
//       }
//     } catch (error) {
//       console.log(error)
//       toast.error(error.message)
//     }
//   }

//   const removeProduct = async (id) => {
//     try {
//       const response = await axios.post(backendUrl + '/api/product/remove', {id} , {headers:{token}})
//       if (response.data.success) {
//         toast.success(response.data.message)
//         await fetchList();
//       } else {
//         toast.error(response.data.message)
//       }
//     } catch (error) {
//       console.log(error)
//       toast.error(error.message)
//     }
//   }

//   useEffect(()=>{
//     fetchList()
//   },[])

//   return (
//     <div className="space-y-4">
//       <p className="text-lg font-semibold text-slate-800">All Products</p>

//       <div className="card overflow-hidden">
//         <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-3 px-4 bg-gradient-to-r from-rose-50 to-pink-50 text-sm text-slate-600 font-semibold border-b border-pink-100">
//           <b className="font-semibold">Image</b>
//           <b className="font-semibold">Name</b>
//           <b className="font-semibold">Category</b>
//           <b className="font-semibold">Price</b>
//           <b className="font-semibold">Action</b>
//         </div>

//         <div className="divide-y divide-slate-100">
//           {list.map((item,index) => (
//             <div
//               className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-3 px-4 text-sm hover:bg-slate-50/60 transition"
//               key={index}
//             >
//               <img className="w-12 h-12 object-cover rounded-md border" src={item.image[0]} alt="" />
//               <p className="text-slate-700 truncate">{item.name}</p>
//               <p className="text-slate-600">{item.category}</p>
//               <p className="text-slate-800 font-medium">{currency}{item.price}</p>
//               <div className="text-right md:text-center">
//                 <button
//                   onClick={()=>removeProduct(item._id)}
//                   className="inline-flex items-center justify-center rounded-md px-2.5 py-1.5 text-red-600 border border-red-200 hover:bg-red-50 transition"
//                   title="Remove"
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   )
// }

// export default List

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'

const List = ({ token }) => {
    const [list, setList] = useState([])

    const fetchList = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/product/list')
            if (response.data.success) {
                setList(response.data.products);
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const removeProduct = async (id) => {
        try {
            const response = await axios.post(backendUrl + '/api/product/remove', { id }, { headers: { token } })
            if (response.data.success) {
                toast.success(response.data.message)
                await fetchList();
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        fetchList()
    }, [])

    return (
        <div className="space-y-4">
            <p className='text-lg font-semibold text-dark'>All Products List</p>
            <div className='card overflow-hidden'>
                <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-3 px-4 bg-light/70 text-sm text-medium font-semibold border-b border-subtle/50'>
                    <b>Image</b>
                    <b>Name</b>
                    <b>Category</b>
                    <b>Price</b>
                    <b className="text-center">Action</b>
                </div>
                <div className="divide-y divide-subtle/30">
                    {list.map((item, index) => (
                        <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-3 px-4 text-sm hover:bg-light/50 transition' key={index}>
                            <img className='w-12 h-12 object-cover rounded-md border border-subtle/30' src={item.image[0]} alt="" />
                            <p className="text-medium truncate">{item.name}</p>
                            <p className="text-medium/80">{item.category}</p>
                            <p className="text-dark font-medium">{currency}{item.price}</p>
                            <div className='text-right md:text-center'>
                                <button onClick={() => removeProduct(item._id)} className='text-red-600 hover:text-red-800 text-xl font-bold transition'>
                                    &#x2715;
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default List