// import React from 'react'
// import Title from '../components/Title'
// import { assets } from '../assets/assets'
// import NewsletterBox from '../components/NewsletterBox'

// const Contact = () => {
//   return (
//     <div>
//       <div className='text-center text-2xl pt-10 border-t'>
//         <Title text1={'CONTACT'} text2={'US'}></Title>
//       </div>
//       <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
//         <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
//         <div className='flex flex-col justify-center items-start gap-6'>
//           <p className='font-semibold text-xl text-gray-600'>Our Store</p>
//           <p className='text-gray-500'>5618A Minan Road <br></br> Maruthamunai 06, Kalmunai, LANKA</p>
//           <p className='text-gray-500'>Tel: (+94) 123-4567 <br></br> Email: rajaaei@RYNZA.com</p>
//           <p className='font-semibold text-xl text-gray-600'>Careers at RYNZA</p>
//           <p className='text-gray-500'>Learn more about our teams and job openings.</p>
//           <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
//         </div>
//       </div>

//       <NewsletterBox></NewsletterBox>

//     </div>
//   )
// }

// export default Contact


import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const Contact = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='text-center pt-12 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
        <p className="mt-4 text-slate-600">We'd love to hear from you. Here's how you can reach us.</p>
      </div>
      <div className='my-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
        <img className='w-full rounded-lg shadow-md' src={assets.contact_img} alt="Contact Us illustration" />
        <div className='flex flex-col gap-8'>
          <div>
            <h3 className='font-semibold text-2xl text-slate-900'>Our Store</h3>
            <p className='text-slate-600 mt-2'>5618A Minan Road, Maruthamunai 06, Kalmunai, LANKA</p>
            <p className='text-slate-600 mt-1'>Tel: (+94) 123-4567</p>
            <p className='text-slate-600'>Email: contact@rynza.com</p>
          </div>
           <div>
            <h3 className='font-semibold text-2xl text-slate-900'>Careers at RYNZA</h3>
            <p className='text-slate-600 mt-2'>Interested in joining our team? Explore our current job openings.</p>
            <button className='mt-4 border border-slate-900 px-6 py-3 text-sm font-semibold hover:bg-slate-900 hover:text-white transition-all duration-300 rounded-md'>
              EXPLORE JOBS
            </button>
          </div>
        </div>
      </div>

      <div className="my-20">
        <NewsletterBox />
      </div>
    </div>
  );
};

export default Contact;