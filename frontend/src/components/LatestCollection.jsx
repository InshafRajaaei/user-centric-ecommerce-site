// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext';
// import Title from './Title';
// import ProductItem from './ProductItem';

// const LatestCollection = () => {

//     const { products } = useContext(ShopContext);
//     const [latestProducts,setLatestProducts] = useState([]);
    
//     useEffect(()=>{
//         setLatestProducts(products.slice(0,10));
//     },[products])

//   return (
//     <div className='my-10'>
//         <div className='text-center py-8 text-3x1'>
//             <Title text1={'LATEST'} text2={'COLLECTIONS'}></Title>
//             <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//             </p>
//         </div>
//       {/* Rendering Products */}
//       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
//         {
//             latestProducts.map((item,index)=>(
//                 <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}></ProductItem>
//             ))
//         }
//       </div>
//     </div>
//   )
// }

// export default LatestCollection

import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        // Assuming the newest products are at the start of the array
        setLatestProducts(products.slice(0, 10));
    }, [products]);

    return (
        <div className='my-16 sm:my-20'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center'>
                    <Title text1={'LATEST'} text2={'COLLECTION'} />
                    <p className='mt-4 max-w-2xl mx-auto text-sm sm:text-base text-slate-600'>
                        Explore our freshly curated collection. The latest trends and timeless classics are waiting for you.
                    </p>
                </div>

                {/* Rendering Products */}
                <div className='mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10'>
                    {latestProducts.map((item) => (
                        <ProductItem key={item._id} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LatestCollection;