// // import React from 'react'
// // import {assets} from '../assets/assets'

// // const Navbar = ({setToken}) => {
// //   return (
// //     <div className='flex items-center py-2 px-[4%] justify-between'>
// //       <img className='w-[max(10%,80px)]' src={assets.logo} alt="" />
// //       <button onClick={()=>setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button> 
// //     </div>
// //   )
// // }

// // export default Navbar

// import React from 'react'
// import {assets} from '../assets/assets'

// const Navbar = ({setToken}) => {
//   return (
//     <div className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-pink-100">
//       <div className="flex items-center justify-between h-16 px-[4%]">
//         <div className="flex items-center gap-3">
//           <img className="h-9 w-auto" src={assets.logo} alt="Rynza" />
//           <span className="hidden sm:block text-slate-800 font-semibold">Rynza Admin</span>
//         </div>
//         <button
//           onClick={()=>setToken('')}
//           className="btn-ghost"
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Navbar

import React from 'react'
import { assets } from '../assets/assets'

const Navbar = ({ setToken }) => {
    return (
        <div className='sticky top-0 z-50 bg-light/80 backdrop-blur-md border-b border-subtle/50'>
            <div className='flex items-center justify-between h-16 px-[4%]'>
                <div className="flex items-center gap-3">
                    {/* <img className='h-9 w-auto' src={assets.logo} alt="Rynza" /> */}
                    <span className="hidden sm:block text-dark font-semibold">Rynza Admin</span>
                </div>
                <button
                    onClick={() => setToken('')}
                    className='btn-ghost'
                >
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Navbar