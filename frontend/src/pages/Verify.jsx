// import React, { useContext, useEffect } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import { useSearchParams } from 'react-router-dom'
// import axios from 'axios'
// import { toast } from 'react-toastify'

// const Verify = () => {

//     const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext)
//     const [searchParams, setSearchParams] = useSearchParams()

//     const success = searchParams.get('success')
//     const orderId = searchParams.get('orderId')

//     const verifyPayment = async () => {
//         try {
//             if (!token) {
//                 return null
//             }

//             const response = await axios.post(backendUrl + '/api/order/verifyStripe',{success,orderId},{headers:{token}})
//             if (response.data.success) {
//                 setCartItems({})
//                 navigate('/orders')
//             } else {
//                 navigate('/cart')
//             }

//         } catch (error) {
//             console.log(error)
//             toast.error(error.message)
//         }
//     }

//     useEffect(()=> {
//         verifyPayment()
//     },[token])

//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Verify

import React, { useContext, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ShopContext } from '../context/ShopContext';

const Verify = () => {
    const navigate = useNavigate();
    const { token, setCartItems, backendUrl } = useContext(ShopContext);
    const [searchParams] = useSearchParams();

    const success = searchParams.get('success');
    const orderId = searchParams.get('orderId');

    const verifyPayment = async () => {
        if (!token || !orderId) {
            navigate('/');
            return;
        }
        try {
            const response = await axios.post(`${backendUrl}/api/order/verifyStripe`, { success, orderId }, { headers: { token } });
            if (response.data.success) {
                setCartItems({});
                toast.success("Payment Successful! Your order has been placed.");
                navigate('/orders');
            } else {
                toast.error("Payment verification failed. Please try again.");
                navigate('/cart');
            }
        } catch (error) {
            console.error(error);
            toast.error("An error occurred during payment verification.");
            navigate('/');
        }
    };

    useEffect(() => {
        verifyPayment();
    }, [token]);

    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-slate-900"></div>
            <p className="mt-4 text-lg text-slate-700 font-semibold">Verifying Payment...</p>
        </div>
    );
};

export default Verify;