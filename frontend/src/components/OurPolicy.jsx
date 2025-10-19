// import React from 'react'
// import { assets } from '../assets/assets'

// const OurPolicy = () => {
//   return (
//     <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      
//         <div>
//             <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
//             <p className='font-semibold'>Easy Exchange Policy</p>
//             <p className='text-gray-400'>We offer hassle free exchange policy</p>
//         </div>
//          <div>
//             <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
//             <p className='font-semibold'>7 Days Policy</p>
//             <p className='text-gray-400'>We provide 7 days free return policy</p>
//         </div>
//          <div>
//             <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
//             <p className='font-semibold'>Best customer support</p>
//             <p className='text-gray-400'>we provide 24/7 customer support</p>
//         </div>

//     </div>
//   )
// }

// export default OurPolicy

import React from 'react';
import { assets } from '../assets/assets';

const PolicyCard = ({ icon, title, description }) => (
    <div className='bg-white p-8 rounded-lg shadow-sm text-center border border-slate-200/80'>
        <img src={icon} className='h-10 w-10 mx-auto mb-4 text-slate-500' alt={`${title} icon`} />
        <h3 className='text-lg font-semibold text-slate-900'>{title}</h3>
        <p className='mt-2 text-sm text-slate-600'>{description}</p>
    </div>
);

const OurPolicy = () => {
    return (
        <div className='py-16 sm:py-20'>
            <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <PolicyCard
                        icon={assets.exchange_icon}
                        title="Easy Exchange"
                        description="We offer a hassle-free exchange policy to ensure you're happy with your purchase."
                    />
                    <PolicyCard
                        icon={assets.quality_icon}
                        title="7-Day Returns"
                        description="Not the right fit? We provide a 7-day free return policy on all eligible items."
                    />
                    <PolicyCard
                        icon={assets.support_img}
                        title="24/7 Support"
                        description="Our dedicated customer support team is available around the clock to assist you."
                    />
                </div>
            </div>
        </div>
    );
};

export default OurPolicy;