// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import Title from "../components/Title";
// import { assets } from "../assets/assets";
// import e from "cors";
// import CartTotal from "../components/CartTotal";

// const Cart = () => {
//   const { products, currency, cartItems, updateQuantity, navigate } =
//     useContext(ShopContext);

//   const [cartData, setCartData] = useState([]);

//   useEffect(() => {
//     if (products.length > 0) {
//       const tempData = [];
//       for (const items in cartItems) {
//         for (const item in cartItems[items]) {
//           if (cartItems[items][item] > 0) {
//             tempData.push({
//               _id: items,
//               size: item,
//               quantity: cartItems[items][item],
//             });
//           }
//         }
//       }
//       setCartData(tempData);
//     }
//   }, [cartItems, products]);

//   return (
//     <div className="border-t pt-14">
//       <div className="text-2xl mb-3">
//         <Title text1={"YOUR"} text2={"CART"}></Title>
//       </div>

//       <div>
//         {cartData.map((item, index) => {
//           const productData = products.find(
//             (Product) => Product._id === item._id
//           );

//           return (
//             <div
//               key={index}
//               className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
//             >
//               <div className="flex items-start gap-6">
//                 <img
//                   className="w-16 sm:w-20"
//                   src={productData.image[0]}
//                   alt=""
//                 />
//                 <div>
//                   <p className="text-xs sm:text-lg font-medium">
//                     {productData.name}
//                   </p>
//                   <div className="flex items-center gap-5 mt-2">
//                     <p>
//                       {currency}
//                       {productData.price}
//                     </p>
//                     <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
//                       {item.size}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <input
//                 onChange={(e) =>
//                   e.target.value === "" || e.target.value === "0"
//                     ? null
//                     : updateQuantity(
//                         item._id,
//                         item.size,
//                         Number(e.target.value)
//                       )
//                 }
//                 className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
//                 type="number"
//                 min={1}
//                 defaultValue={item.quantity}
//               />
//               <img
//                 onClick={() => updateQuantity(item._id, item.size, 0)}
//                 className="w-4 sm:w-5 cursor-pointer"
//                 src={assets.bin_icon}
//                 alt=""
//               />
//             </div>
//           );
//         })}
//       </div>

//       <div className="flex justify-end my-20">
//         <div className="w-full sm:w-[450px]">
//           <CartTotal></CartTotal>
//           <div className="w-full text-end">
//             <button
//               onClick={() => navigate("/place-order")}
//               className="bg-black text-white text-sm my-8 px-8 py-3"
//             >
//               PROCEED TO CHECKOUT
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;


import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import { Link } from "react-router-dom";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate, getCartCount } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0 && Object.keys(cartItems).length > 0) {
      const tempData = [];
      for (const productId in cartItems) {
        for (const size in cartItems[productId]) {
          if (cartItems[productId][size] > 0) {
            const productInfo = products.find(p => p._id === productId);
            if (productInfo) {
              tempData.push({
                ...productInfo,
                size: size,
                quantity: cartItems[productId][size],
              });
            }
          }
        }
      }
      setCartData(tempData);
    } else {
      setCartData([]);
    }
  }, [cartItems, products]);

  if (getCartCount() === 0) {
    return (
      <div className="max-w-4xl mx-auto text-center py-20 border-t">
        <Title text1={"YOUR"} text2={"CART IS EMPTY"} />
        <p className="mt-4 text-slate-600">Looks like you haven't added anything to your cart yet.</p>
        <button onClick={() => navigate('/collection')} className="mt-6 bg-slate-900 text-white font-semibold px-8 py-3 rounded-md hover:bg-slate-800 transition-colors">
          CONTINUE SHOPPING
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t pt-14">
      <div className="text-2xl mb-8">
        <Title text1={"YOUR"} text2={"SHOPPING CART"} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="divide-y divide-slate-200">
            {cartData.map((item) => (
              <div key={`${item._id}-${item.size}`} className="py-6 flex gap-4">
                <img className="w-24 h-24 object-cover rounded-md" src={item.image[0]} alt={item.name} />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-slate-800">{item.name}</h3>
                    <p className="text-sm text-slate-500 mt-1">Size: {item.size}</p>
                  </div>
                  <p className="font-semibold text-slate-900">{currency}{item.price}</p>
                </div>
                <div className="flex flex-col items-end justify-between">
                   <input
                    onChange={(e) => updateQuantity(item._id, item.size, Number(e.target.value))}
                    className="border rounded-md w-16 text-center py-1.5"
                    type="number"
                    min={1}
                    value={item.quantity}
                  />
                  <button onClick={() => updateQuantity(item._id, item.size, 0)} className="text-sm text-red-600 hover:text-red-800 font-medium">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-slate-50 p-6 rounded-lg sticky top-24">
            <CartTotal />
            <div className="w-full mt-6">
              <button onClick={() => navigate("/place-order")} className="w-full bg-slate-900 text-white font-semibold py-3 rounded-md hover:bg-slate-800 transition-colors">
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;