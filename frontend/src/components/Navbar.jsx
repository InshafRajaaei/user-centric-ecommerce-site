// import React, { useContext, useState } from 'react'
// import {assets} from '../assets/assets'
// import { Link, NavLink } from 'react-router-dom'
// import { ShopContext } from '../context/ShopContext';

// const Navbar = () => {

//     const [visible,setVisible] = useState(false);

//     const {setShowSearch , getCartCount, navigate, token, setToken, setCartItems} = useContext(ShopContext);

//     const logout = () => {
//         navigate('/login')
//         localStorage.removeItem('token')
//         setToken('')
//         setCartItems({})
//     }


//   return (
//     <div className='flex items-centre justify-between py-5 font-medium'>

//         <Link to='/'><img src={assets.logo} className='w-36' alt="" /></Link>

//         <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
//             <NavLink to='/' className='flex flex-col items-center gap-1'> 
//                 <p>HOME</p>
//                 <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//             </NavLink>
//             <NavLink to='/collection' className='flex flex-col items-center gap-1'> 
//                 <p>COLLECTION</p>
//                 <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//             </NavLink>
//             <NavLink to='/about' className='flex flex-col items-center gap-1'> 
//                 <p>ABOUT</p>
//                 <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//             </NavLink>
//             <NavLink to='/contact' className='flex flex-col items-center gap-1'> 
//                 <p>CONTACT</p>
//                 <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//             </NavLink>
//         </ul>

//         <div className='flex items-center gap-6'>
//             <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
//             <div className='group relative'>
                
//                 <img onClick={()=> token ? null : navigate('/login')} className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
//                 {/* Dropdown menu */}
//                 {token && 
//                 <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
//                     <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
//                         <p className='cursor-pointer hover:text-black'>My Profile</p>
//                         <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
//                         <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
//                     </div>
//                 </div>}
//             </div>
//             <Link to='/cart' className='relative'>
//             <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
//             <p className='absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-4 h-4 flex items-center justify-center bg-black text-white rounded-full text-[8px]'>{getCartCount()}</p>
//             </Link>
//             <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />

//         </div>

//         {/*Sidebar menu for small screen */}
//         <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
//             <div className='flex flex-col text-gray-600'>
//                 <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 curser=pointer'>
//                     <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
//                     <p>Back</p>
//                 </div>
//                 <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
//                 <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
//                 <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
//                 <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
//             </div>
//         </div>
      
//     </div>
//   )
// }

// export default Navbar


import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

    const logout = () => {
        localStorage.removeItem('token');
        setToken('');
        setCartItems({});
        navigate('/login');
    };

    const navLinkClass = ({ isActive }) =>
      `relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-slate-900 after:transition-all after:duration-300 ${
        isActive ? 'text-slate-900 after:w-full' : 'text-slate-500 after:w-0'
      } hover:text-slate-900`;

    return (
        <nav className='sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80'>
            <div className='flex items-center justify-between py-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <Link to='/'><img src={assets.logo} className='w-32 sm:w-36' alt="Rynza Logo" /></Link>

                <ul className='hidden sm:flex gap-8 text-sm font-medium'>
                    <NavLink to='/' className={navLinkClass}>HOME</NavLink>
                    <NavLink to='/collection' className={navLinkClass}>COLLECTION</NavLink>
                    <NavLink to='/about' className={navLinkClass}>ABOUT</NavLink>
                    <NavLink to='/contact' className={navLinkClass}>CONTACT</NavLink>
                </ul>

                <div className='flex items-center gap-5 sm:gap-6'>
                    <button onClick={() => setShowSearch(true)} aria-label="Search">
                        <img src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
                    </button>
                    
                    <div className='group relative'>
                        <button onClick={() => !token && navigate('/login')} aria-label="Profile">
                            <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
                        </button>
                        {token && (
                            <div className='absolute top-full right-0 mt-4 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200'>
                                <div className='py-1' role='menu' aria-orientation='vertical'>
                                    <button onClick={() => navigate('/profile')} className='text-left w-full px-4 py-2 text-sm text-slate-700 hover:bg-slate-100' role='menuitem'>My Profile</button>
                                    <button onClick={() => navigate('/orders')} className='text-left w-full px-4 py-2 text-sm text-slate-700 hover:bg-slate-100' role='menuitem'>Orders</button>
                                    <button onClick={logout} className='text-left w-full px-4 py-2 text-sm text-slate-700 hover:bg-slate-100' role='menuitem'>Logout</button>
                                </div>
                            </div>
                        )}
                    </div>

                    <Link to='/cart' className='relative' aria-label={`Cart with ${getCartCount()} items`}>
                        <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
                        <span className='absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-slate-900 text-white text-[10px] font-medium'>
                            {getCartCount()}
                        </span>
                    </Link>

                    <button onClick={() => setIsMobileMenuOpen(true)} className='sm:hidden' aria-label="Open menu">
                        <img src={assets.menu_icon} className='w-5 cursor-pointer' alt="" />
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar Menu */}
            <div className={`fixed inset-0 z-50 transform transition-transform ease-in-out duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} sm:hidden`}>
                <div className="absolute inset-0 bg-black/40" onClick={() => setIsMobileMenuOpen(false)}></div>
                <div className="relative w-full max-w-xs ml-auto h-full bg-white shadow-xl flex flex-col">
                    <div className='flex items-center justify-between p-4 border-b'>
                        <h2 className="font-semibold text-slate-800">Menu</h2>
                        <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
                            <img src={assets.cross_icon} className='w-4' alt=""/>
                        </button>
                    </div>
                    <div className='flex flex-col text-slate-700 py-2'>
                        <NavLink onClick={() => setIsMobileMenuOpen(false)} className='py-3 px-4 border-b border-slate-100 hover:bg-slate-50' to='/'>HOME</NavLink>
                        <NavLink onClick={() => setIsMobileMenuOpen(false)} className='py-3 px-4 border-b border-slate-100 hover:bg-slate-50' to='/collection'>COLLECTION</NavLink>
                        <NavLink onClick={() => setIsMobileMenuOpen(false)} className='py-3 px-4 border-b border-slate-100 hover:bg-slate-50' to='/about'>ABOUT</NavLink>
                        <NavLink onClick={() => setIsMobileMenuOpen(false)} className='py-3 px-4 border-b border-slate-100 hover:bg-slate-50' to='/contact'>CONTACT</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;