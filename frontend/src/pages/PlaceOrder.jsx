// import React, { useContext, useState } from 'react'
// import Title from '../components/Title'
// import CartTotal from '../components/CartTotal'
// import { assets } from '../assets/assets'
// import { ShopContext } from '../context/ShopContext'
// import axios from 'axios'
// import { toast } from 'react-toastify'

// // import { response } from 'express'
// //some errors fixed
// const PlaceOrder = () => {

//   const [method,setMethod] = useState('cod');
//   const {navigate,backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products} = useContext(ShopContext);
//   const [formData,setFormData] = useState({
//     firstName:'',
//     lastName:'',
//     email:'',
//     street:'',
//     city:'',
//     state:'',
//     zipcode:'',
//     country:'',
//     phone:''
//   })

//   const onChangeHandler = (event)  => {
//     const name = event.target.name
//     const value = event.target.value

//     setFormData(data => ({...data,[name]:value}))

//   }

//   const onSubmitHandler = async (event) => {
//     event.preventDefault()
//     try {

//       let orderItems = []

//       for(const items in cartItems) {
//         for(const item in cartItems[items]){
//           if (cartItems[items][item] > 0 ) {
//             const itemInfo = structuredClone(products.find(product => product._id === items))
//             if (itemInfo) {
//               itemInfo.size = item
//               itemInfo.quantity = cartItems[items][item]
//               orderItems.push(itemInfo)
//             }            
//           }
//         }
//       }

//       let orderData = {
//         address: formData,
//         items: orderItems,
//         amount: getCartAmount() + delivery_fee
//       }

//       switch (method) {
//         case 'cod':
//           const response = await axios.post(backendUrl + '/api/order/place',orderData,{headers:{token}})
//           if (response.data.success) {
//             setCartItems({})
//             navigate('/orders')
//           } else {
//             toast.error(response.data.message)
//           }
//           break;
        
//         case 'stripe':
//             const responseStripe = await axios.post(backendUrl + '/api/order/stripe',orderData,{headers:{token}})
//             if (responseStripe.data.success) {
//               const {session_url} = responseStripe.data
//               window.location.replace(session_url)
//             } else {
//               toast.error(responseStripe.data.message)
//             }
//           break;

//         default:
//           break;
//       }
      
      
//     } catch (error) {
//       console.log(error)
//       toast.error(error.message)
      
//     }
//   }

  

//   return (
//     <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
//       {/* ---------------Left Side----------------- */}
//       <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
//         <div className='text-xl sm:text-2xl my-3'>
//           <Title text1={'DELIVERY'} text2={'INFORMATION'}></Title>
//         </div>
//         <div className='flex gap-3'>
//           <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='First name' type="text" />
//           <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Last name' type="text" />
//         </div>
//         <input required onChange={onChangeHandler} name='email' value={formData.email} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Email address' type="email" />
//         <input required onChange={onChangeHandler} name='street' value={formData.street} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Street' type="text"/>
//         <div className='flex gap-3'>
//           <input required onChange={onChangeHandler} name='city' value={formData.city} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='City' type="text" />
//           <input required onChange={onChangeHandler} name='state' value={formData.state} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='State' type="text" />
//         </div>
//         <div className='flex gap-3'>
//           <input required onChange={onChangeHandler} name='zipcode' value={formData.zipcode} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Zipcode' type="number" />
//           <input required onChange={onChangeHandler} name='country' value={formData.country} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Country' type="text" />
//         </div>
//         <input required onChange={onChangeHandler} name='phone' value={formData.phone} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Phone' type="number" />
//       </div>
//       {/* --------------------Right Side--------------------- */}
//       <div className='mt-8'>
//         <div className='mt-8 min-w-80'>
//           <CartTotal></CartTotal>
//         </div>
//         <div className='mt-12'>
//           <Title text1={'PAYMENT'} text2={'METHOD'}></Title>
//           {/* ------------------Payment Method Selection-------------------------- */}
//           <div className='flex gap-3 flex-col lg:flex-row'>
//             <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
//               <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
//               <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
//             </div>
//             <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
//               <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
//               <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
//             </div>
//           </div>
//           <div className='w-full text-end mt-8'>
//             <button type='submit' className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
//           </div>
//         </div>
//       </div>
//     </form>
//   )
// }

// export default PlaceOrder

import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const PlaceOrder = () => {
    const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);
    const [method, setMethod] = useState('stripe');
    const [formData, setFormData] = useState({
        firstName: '', lastName: '', email: '', street: '',
        city: '', state: '', zipcode: '', country: '', phone: ''
    });

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setFormData(data => ({ ...data, [name]: value }));
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            const orderItems = [];
            for (const productId in cartItems) {
                for (const size in cartItems[productId]) {
                    if (cartItems[productId][size] > 0) {
                        const itemInfo = products.find(p => p._id === productId);
                        if (itemInfo) {
                            orderItems.push({
                                ...itemInfo,
                                size: size,
                                quantity: cartItems[productId][size]
                            });
                        }
                    }
                }
            }
            if (orderItems.length === 0) {
                toast.error("Your cart is empty.");
                return;
            }

            const orderData = {
                address: formData,
                items: orderItems,
                amount: getCartAmount() + delivery_fee,
                paymentMethod: method
            };
            
            let response;
            if (method === 'stripe') {
                response = await axios.post(`${backendUrl}/api/order/stripe`, orderData, { headers: { token } });
                if (response.data.success) {
                    window.location.replace(response.data.session_url);
                } else {
                    toast.error(response.data.message);
                }
            } else { // COD
                response = await axios.post(`${backendUrl}/api/order/place`, orderData, { headers: { token } });
                 if (response.data.success) {
                    setCartItems({});
                    toast.success("Order placed successfully!");
                    navigate('/orders');
                } else {
                    toast.error(response.data.message);
                }
            }
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message || "An error occurred while placing the order.");
        }
    };

    return (
        <form onSubmit={onSubmitHandler} className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 border-t pt-14'>
            {/* Left Side: Delivery Information */}
            <div>
                <div className='text-xl sm:text-2xl mb-6'>
                    <Title text1={'DELIVERY'} text2={'INFORMATION'} />
                </div>
                <div className='space-y-6'>
                    {/* Contact Information */}
                    <div>
                        <h3 className="text-lg font-semibold text-slate-800 mb-4">Contact Information</h3>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <div>
                                <label htmlFor="firstName" className="input-label">First name</label>
                                <input required id="firstName" onChange={onChangeHandler} name='firstName' value={formData.firstName} className='input-field' type="text" />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="input-label">Last name</label>
                                <input required id="lastName" onChange={onChangeHandler} name='lastName' value={formData.lastName} className='input-field' type="text" />
                            </div>
                        </div>
                         <div className="mt-4">
                            <label htmlFor="email" className="input-label">Email address</label>
                            <input required id="email" onChange={onChangeHandler} name='email' value={formData.email} className='input-field' type="email" />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="phone" className="input-label">Phone</label>
                            <input required id="phone" onChange={onChangeHandler} name='phone' value={formData.phone} className='input-field' type="tel" />
                        </div>
                    </div>
                    {/* Shipping Address */}
                    <div>
                        <h3 className="text-lg font-semibold text-slate-800 mb-4">Shipping Address</h3>
                        <div>
                            <label htmlFor="street" className="input-label">Street Address</label>
                            <input required id="street" onChange={onChangeHandler} name='street' value={formData.street} className='input-field' type="text" />
                        </div>
                         <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4'>
                            <div>
                                <label htmlFor="city" className="input-label">City</label>
                                <input required id="city" onChange={onChangeHandler} name='city' value={formData.city} className='input-field' type="text" />
                            </div>
                            <div>
                                <label htmlFor="state" className="input-label">State / Province</label>
                                <input required id="state" onChange={onChangeHandler} name='state' value={formData.state} className='input-field' type="text" />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4'>
                            <div>
                                <label htmlFor="zipcode" className="input-label">Zip / Postal Code</label>
                                <input required id="zipcode" onChange={onChangeHandler} name='zipcode' value={formData.zipcode} className='input-field' type="text" />
                            </div>
                            <div>
                                <label htmlFor="country" className="input-label">Country</label>
                                <input required id="country" onChange={onChangeHandler} name='country' value={formData.country} className='input-field' type="text" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side: Order Summary & Payment */}
            <div>
                <div className='bg-slate-50 p-6 rounded-lg sticky top-24'>
                    <CartTotal />
                    <div className='mt-8'>
                        <h3 className='text-lg font-semibold text-slate-900 mb-4'>PAYMENT METHOD</h3>
                        <div className='space-y-3'>
                            <div onClick={() => setMethod('stripe')} className={`payment-option ${method === 'stripe' ? 'border-slate-900 ring-2 ring-slate-900' : 'border-slate-300'}`}>
                                <img className='h-6' src={assets.stripe_logo} alt="Stripe" />
                                <p>Pay with Card</p>
                            </div>
                            <div onClick={() => setMethod('cod')} className={`payment-option ${method === 'cod' ? 'border-slate-900 ring-2 ring-slate-900' : 'border-slate-300'}`}>
                                {/* <img className='h-6' src={assets.cod_icon} alt="COD"/> */}
                                <p>Cash on Delivery</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-8'>
                        <button type='submit' className='w-full bg-slate-900 text-white font-semibold py-3 rounded-md hover:bg-slate-800 transition-colors'>
                            PLACE ORDER
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default PlaceOrder;