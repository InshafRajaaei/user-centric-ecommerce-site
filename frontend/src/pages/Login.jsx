// // import React, { useContext, useEffect, useState } from 'react'
// // import { ShopContext } from '../context/ShopContext';
// // import axios from 'axios';
// // import { toast } from 'react-toastify';

// // const Login = () => {

// //   const [currentState, setCurrentState] = useState('Login');
// //   const {token, setToken, navigate, backendUrl} = useContext(ShopContext)

// //   const [name,setName] = useState('')
// //   const [password,setPassword] = useState('')
// //   const [email,setEmail] = useState('')

// //   const onSubmitHandler = async (event) => {
// //       event.preventDefault();
// //       try {

// //         if (currentState === 'Sign Up') {

// //           const response = await axios.post(backendUrl + '/api/user/register',{name,email,password})
// //           if (response.data.success) {
// //             setToken(response.data.token)
// //             localStorage.setItem('token',response.data.token)
// //           } else {
// //             toast.error(response.data.message)
// //           }
          
          
// //         } else {
// //           const response = await axios.post(backendUrl + '/api/user/login', {email,password})
// //           if (response.data.success) {
// //             setToken(response.data.token)
// //             localStorage.setItem('token',response.data.token)
// //           } else {
// //             toast.error(response.data.message)
// //           }
          
// //         }
        
// //       } catch (error) {
// //         console.log(error)
// //         toast.error(error.message)
        
// //       }
// //   }

// //   useEffect(()=>{
// //     if (token) {
// //       navigate('/')
// //     }
// //   },[token])

// //   return (
// //     <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
// //       <div className='inline-flex items-center gap-2 mb-2 mt-10'>
// //         <p className='prata-regular text-3xl'>{currentState}</p>
// //         <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
// //       </div>
// //       {currentState === 'Login' ? '' : <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required/>}
// //       <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required/>
// //       <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required/>
// //       <div className='w-full flex justify-between text-sm mt-[-8px]'>
// //         <p className='cursor-pointer'>Forgot your password?</p>
// //         {
// //           currentState === 'Login'
// //           ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p>
// //           : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
// //         }
// //       </div>
// //       <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
// //     </form>
// //   )
// // }

// // export default Login

// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const Login = () => {
//   const [currentState, setCurrentState] = useState('Login');
//   const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//     try {
//       if (currentState === 'Sign Up') {
//         const response = await axios.post(backendUrl + '/api/user/register', { name, email, password });
//         if (response.data.success) {
//           setToken(response.data.token);
//           localStorage.setItem('token', response.data.token);
//         } else {
//           toast.error(response.data.message);
//         }
//       } else {
//         const response = await axios.post(backendUrl + '/api/user/login', { email, password });
//         if (response.data.success) {
//           setToken(response.data.token);
//           localStorage.setItem('token', response.data.token);
//         } else {
//           toast.error(response.data.message);
//         }
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message);
//     }
//   };

//   useEffect(() => {
//     if (token) {
//       navigate('/');
//     }
//   }, [token]);

//   return (
//     <form
//       data-testid="auth-form"
//       onSubmit={onSubmitHandler}
//       className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
//     >
//       <div className="inline-flex items-center gap-2 mb-2 mt-10">
//         <p className="prata-regular text-3xl">{currentState}</p>
//         <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
//       </div>
//       {currentState === 'Login' ? '' : (
//         <input
//           data-testid="register-name"
//           onChange={(e) => setName(e.target.value)}
//           value={name}
//           type="text"
//           className="w-full px-3 py-2 border border-gray-800"
//           placeholder="Name"
//           required
//         />
//       )}
//       <input
//         data-testid="login-email"
//         onChange={(e) => setEmail(e.target.value)}
//         value={email}
//         type="email"
//         className="w-full px-3 py-2 border border-gray-800"
//         placeholder="Email"
//         required
//       />
//       <input
//         data-testid="login-password"
//         onChange={(e) => setPassword(e.target.value)}
//         value={password}
//         type="password"
//         className="w-full px-3 py-2 border border-gray-800"
//         placeholder="Password"
//         required
//       />
//       <div className="w-full flex justify-between text-sm mt-[-8px]">
//         <p className="cursor-pointer">Forgot your password?</p>
//         {currentState === 'Login'
//           ? <p data-testid="toggle-signup" onClick={() => setCurrentState('Sign Up')} className="cursor-pointer">Create account</p>
//           : <p data-testid="toggle-login" onClick={() => setCurrentState('Login')} className="cursor-pointer">Login Here</p>}
//       </div>
//       <button data-testid="auth-submit" className="bg-black text-white font-light px-8 py-2 mt-4">
//         {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
//       </button>
//     </form>
//   );
// };

// export default Login;

import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const endpoint = currentState === 'Login' ? '/api/user/login' : '/api/user/register';
    const payload = currentState === 'Login' ? { email, password } : { name, email, password };
    try {
      const response = await axios.post(backendUrl + endpoint, payload);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || 'An error occurred');
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-8 sm:p-10 border border-slate-200 rounded-2xl shadow-sm">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-slate-900">
            {currentState === 'Login' ? 'Welcome Back' : 'Create an Account'}
          </h2>
          <p className="mt-2 text-center text-sm text-slate-600">
            {currentState === 'Login' ? (
              <>
                Or{' '}
                <button onClick={() => setCurrentState('Sign Up')} className="font-medium text-slate-700 hover:text-slate-900">
                  create a new account
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button onClick={() => setCurrentState('Login')} className="font-medium text-slate-700 hover:text-slate-900">
                  sign in here
                </button>
              </>
            )}
          </p>
        </div>
        <form onSubmit={onSubmitHandler} className="mt-8 space-y-6">
          <div className="space-y-4 rounded-md">
            {currentState === 'Sign Up' && (
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  className="relative block w-full appearance-none rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-500 focus:z-10 focus:border-slate-500 focus:outline-none focus:ring-slate-500 sm:text-sm"
                  placeholder="Name"
                  required
                />
              </div>
            )}
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                autoComplete="email"
                className="relative block w-full appearance-none rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-500 focus:z-10 focus:border-slate-500 focus:outline-none focus:ring-slate-500 sm:text-sm"
                placeholder="Email address"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                autoComplete="current-password"
                className="relative block w-full appearance-none rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-500 focus:z-10 focus:border-slate-500 focus:outline-none focus:ring-slate-500 sm:text-sm"
                placeholder="Password"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <a href="#" className="font-medium text-slate-700 hover:text-slate-900">
              Forgot your password?
            </a>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-slate-900 py-2.5 px-4 text-sm font-medium text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-colors"
            >
              {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;