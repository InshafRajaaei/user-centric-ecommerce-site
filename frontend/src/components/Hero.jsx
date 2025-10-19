// import React from 'react'
// import { assets } from '../assets/assets'

// const Hero = () => {
//   return (
//     <div className='flex flex-col sm:flex-row border border-gray-400'>
//         {/* Hero Left Side */}
//         <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
//             <div className='text-[#414141]'>
//                 <div className='flex items-center gap-2'>
//                     <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
//                     <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
//                 </div>
//                 <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
//                 <div className='flex items-center gap-2'>
//                     <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
//                     <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
//                 </div>
//             </div>
//         </div>
//         {/* Hero Right Side */}
//         <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
//     </div>
//   )
// }

// export default Hero

import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className='bg-slate-50'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-4 sm:px-6 lg:px-8 py-12 sm:py-16'>
        {/* Hero Left Side: Text Content */}
        <div className='flex flex-col justify-center text-center lg:text-left'>
          <p className='text-sm font-semibold tracking-wider text-slate-500 uppercase'>
            OUR BESTSELLERS
          </p>
          <h1 className='prata-regular text-4xl sm:text-5xl lg:text-6xl text-slate-900 mt-3 leading-tight'>
            Latest Arrivals
          </h1>
          <p className='mt-4 text-slate-600 max-w-md mx-auto lg:mx-0'>
            Discover our new collection of timeless pieces, crafted with the finest materials for a perfect fit and feel.
          </p>
          <div className='mt-8 flex justify-center lg:justify-start'>
            <button className='inline-flex items-center gap-2 bg-slate-900 text-white font-semibold px-8 py-3 rounded-md hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10'>
              <span>SHOP NOW</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Hero Right Side: Image */}
        <div className='flex items-center justify-center'>
          <img className='w-full max-w-lg rounded-lg shadow-xl' src={assets.hero_img} alt="Stylish model wearing latest arrivals" />
        </div>
      </div>
    </div>
  );
};

export default Hero;