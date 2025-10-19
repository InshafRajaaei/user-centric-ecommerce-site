// import React from 'react'

// const NewsletterBox = () => {

//     const onSubmitHandler = (event) => {
//         event.preventDefault();
//     }

//   return (
//     <div className='text-center'>
//       <p className='text-2x1 font-medium text-gray-800'>Subscribe now & get 20% off</p>
//       <p className='text-gray-400 mt-3'>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//       </p>
//       <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
//         <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required />
//         <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
//       </form>
//     </div>
//   )
// }

// export default NewsletterBox


import React from 'react';

const NewsletterBox = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
        // Add your newsletter submission logic here
        alert('Thank you for subscribing!');
    };

    return (
        <div className='bg-slate-900 py-16 sm:py-20'>
            <div className='max-w-2xl mx-auto text-center px-4 sm:px-6 lg:px-8'>
                <h2 className='text-3xl sm:text-4xl font-bold text-white'>
                    Subscribe & Get 20% Off
                </h2>
                <p className='mt-4 text-slate-300'>
                    Be the first to know about new arrivals, exclusive sales, and style tips by joining our newsletter.
                </p>
                <form onSubmit={onSubmitHandler} className='mt-8 flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto'>
                    <label htmlFor="email-address" className="sr-only">Email address</label>
                    <input
                        id="email-address"
                        type="email"
                        autoComplete="email"
                        required
                        className='flex-1 w-full appearance-none rounded-md border-transparent bg-white/90 px-4 py-3 text-base text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-400'
                        placeholder='Enter your email'
                    />
                    <button
                        type='submit'
                        className='w-full sm:w-auto bg-white text-slate-900 font-semibold px-6 py-3 rounded-md hover:bg-slate-200 transition-colors'
                    >
                        SUBSCRIBE
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewsletterBox;