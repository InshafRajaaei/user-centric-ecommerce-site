// // import axios from 'axios'
// // import React, { useState } from 'react'
// // import { backendUrl } from '../App'
// // import { toast } from 'react-toastify'

// // const Login = ({setToken}) => {

// //     const [email,setEmail] = useState('')
// //     const [password,setPassword] = useState('')

// //     const onSubmitHandler = async (e) => {
// //         try {
// //             e.preventDefault();
// //             const response = await axios.post(backendUrl + '/api/user/admin',{email,password})
// //             if (response.data.success) {
// //                 setToken(response.data.token)
// //             } else {
// //                 toast.error(response.data.message)
// //             }
            
// //         } catch (error) {
// //             console.log(error);
// //             toast.error(response.message)
// //         }
// //     }

// //   return (
// //     <div className='min-h-screen flex items-center justify-center w-full'>
// //       <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
// //         <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>
// //         <form onSubmit={onSubmitHandler}>
// //             <div className='mb-3 min-w-72'>
// //                 <p className='text-sm font-medium text-gray-700 mb-2'>Email Address</p>
// //                 <input onChange={(e)=>setEmail(e.target.value)} value={email} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="email" placeholder='your@email.com' required />
// //             </div>
// //             <div className='mb-3 min-w-72'>
// //                 <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
// //                 <input onChange={(e)=>setPassword(e.target.value)} value={password} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="password" placeholder='Enter your password' required />
// //             </div>
// //             <button className='mt-2 w-full py-2 px-4 rounded-md text-white bg-black' type="submit">Login  </button>
// //         </form>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Login

// import axios from 'axios'
// import React, { useState } from 'react'
// import { backendUrl } from '../App'
// import { toast } from 'react-toastify'

// const Login = ({setToken}) => {

//   const [email,setEmail] = useState('')
//   const [password,setPassword] = useState('')

//   const onSubmitHandler = async (e) => {
//     try {
//       e.preventDefault();
//       const response = await axios.post(backendUrl + '/api/user/admin',{email,password})
//       if (response.data.success) {
//         setToken(response.data.token)
//       } else {
//         toast.error(response.data.message)
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(response.message)
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-white flex items-center justify-center px-6">
//       <div className="card w-full max-w-md p-8">
//         <div className="mb-6 text-center">
//           <h1 className="text-2xl font-semibold text-slate-800">Rynza Admin</h1>
//           <p className="text-slate-500 mt-1 text-sm">Sign in to manage products and orders</p>
//         </div>

//         <form onSubmit={onSubmitHandler} className="space-y-4">
//           <div>
//             <label className="label mb-2">Email address</label>
//             <input
//               onChange={(e)=>setEmail(e.target.value)}
//               value={email}
//               className="input"
//               type="email"
//               placeholder="you@example.com"
//               required
//             />
//           </div>

//           <div>
//             <label className="label mb-2">Password</label>
//             <input
//               onChange={(e)=>setPassword(e.target.value)}
//               value={password}
//               className="input"
//               type="password"
//               placeholder="Enter your password"
//               required
//             />
//           </div>

//           <button className="btn-primary w-full py-2.5" type="submit">
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Login

import axios from 'axios'
import React, { useState } from 'react'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Login = ({ setToken }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(backendUrl + '/api/user/admin', { email, password })
            if (response.data.success) {
                setToken(response.data.token)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    return (
        <div className='min-h-screen flex items-center justify-center w-full bg-light px-4'>
            <div className='card w-full max-w-md p-8'>
                <div className='mb-6 text-center'>
                    <h1 className='text-2xl font-semibold text-dark'>Rynza Admin Panel</h1>
                    <p className='text-medium mt-1 text-sm'>Welcome back, please sign in.</p>
                </div>
                <form onSubmit={onSubmitHandler} className="space-y-4">
                    <div>
                        <label className='label mb-2'>Email Address</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className='input'
                            type="email"
                            placeholder='your@email.com'
                            required
                        />
                    </div>
                    <div>
                        <label className='label mb-2'>Password</label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className='input'
                            type="password"
                            placeholder='Enter your password'
                            required
                        />
                    </div>
                    <button className='btn-primary w-full py-2.5 mt-2' type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login