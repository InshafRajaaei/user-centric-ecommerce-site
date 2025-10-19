// import React, { useContext } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from './Title';

// const CartTotal = () => {

//     const {currency,delivery_fee,getCartAmount} = useContext(ShopContext);

//   return (
//     <div className='w-full'>
//         <div className='text-2xl'>
//             <Title text1={'CART'} text2={'TOTALS'}></Title>
//         </div>

//         <div className='flex flex-col gap-2 mt-2 text-sm'>
//             <div className='flex justify-between'>
//                 <p>Suntotal</p>
//                 <p>{currency} {getCartAmount()}.00</p>
//             </div>
//             <hr />
//             <div className='flex justify-between'>
//                 <p>Shipping Fee</p>
//                 <p>{currency} {delivery_fee}.00</p>
//             </div>
//             <hr />
//             <div className='flex justify-between'>
//                 <b>Total</b>
//                 <b>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</b>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default CartTotal

import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
    const subtotal = getCartAmount();
    const total = subtotal === 0 ? 0 : subtotal + delivery_fee;

    return (
        <div className='w-full'>
            <div className='text-xl'>
                <Title text1={'CART'} text2={'TOTALS'} />
            </div>

            <div className='flex flex-col gap-3 mt-4 text-sm'>
                <div className='flex justify-between text-slate-600'>
                    <p>Subtotal</p>
                    <p className="font-medium text-slate-800">{currency}{subtotal.toFixed(2)}</p>
                </div>
                <hr className="border-slate-200" />
                <div className='flex justify-between text-slate-600'>
                    <p>Shipping Fee</p>
                    <p className="font-medium text-slate-800">{currency}{delivery_fee.toFixed(2)}</p>
                </div>
                <hr className="border-slate-200" />
                <div className='flex justify-between font-semibold text-base text-slate-900'>
                    <p>Total</p>
                    <p>{currency}{total.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
};

export default CartTotal;