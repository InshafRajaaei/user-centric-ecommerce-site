// import React from 'react'
// import { assets } from '../assets/assets'

// const Footer = () => {
//   return (
//     <div>
//       <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
//         <div>
//             <img src={assets.logo} className='mb-5 w-32' alt="" />
//             <p className='w-full md:w-2/3 text-gray-600'>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//             </p>            
//         </div>
//         <div>
//             <p className='text-xl font-medium mb-5'>COMPANY</p>
//             <ul className='flex flex-col gap-1 text-gray-600'>
//                 <li>Home</li>
//                 <li>About us</li>
//                 <li>Delivery</li>
//                 <li>Privacy policy</li>
//             </ul>
//         </div>
//         <div>
//           <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
//           <ul className='flex flex-col gap-1 text-gray-600'></ul>
//             <li>+94-76-434-6350</li>
//             <li>contact@Belivewaveforyou.com</li>
//         </div>
//       </div>
//       <div>
//         <hr />
//         <p className='py-5 text-sm text-center'>Copyright 2025@ Rynza.com - All Right Reserved.</p>
//       </div>
//     </div>
//   )
// }

// export default Footer

import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-slate-900 text-slate-300 px-4 sm:px-8 md:px-12 py-16 mt-32'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12 text-sm'>
          {/* Column 1: Logo & Description */}
          <div className='md:col-span-2'>
            <Link to='/'><img src={assets.logo} className='mb-5 w-32 invert brightness-0' alt="Rynza Logo" /></Link>
            <p className='w-full md:w-2/3 text-slate-400 leading-relaxed'>
              Discover timeless elegance and modern trends. Quality apparel designed to make you look and feel your best, every day.
            </p>
            <div className='flex gap-4 mt-6'>
              {/* Add your social media links here */}
              {/* <a href="#" aria-label="Facebook"><img src={assets.facebook_icon} className="w-6 opacity-70 hover:opacity-100 transition" alt="Facebook"/></a> */}
              {/* <a href="#" aria-label="Twitter"><img src={assets.twitter_icon} className="w-6 opacity-70 hover:opacity-100 transition" alt="Twitter"/></a> */}
              {/* <a href="#" aria-label="LinkedIn"><img src={assets.linkedin_icon} className="w-6 opacity-70 hover:opacity-100 transition" alt="LinkedIn"/></a> */}
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div>
            <h3 className='text-lg font-semibold text-white mb-5'>COMPANY</h3>
            <ul className='flex flex-col gap-2 text-slate-400'>
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/delivery" className="hover:text-white transition">Delivery</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className='text-lg font-semibold text-white mb-5'>GET IN TOUCH</h3>
            <ul className='flex flex-col gap-2 text-slate-400'>
              <li>+94-76-434-6350</li>
              <li>contact@rynza.com</li>
            </ul>
          </div>
        </div>
        
        <hr className='border-slate-700 my-10'/>
        
        <p className='text-xs text-center text-slate-500'>Copyright 2025 © Rynza.com - All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;