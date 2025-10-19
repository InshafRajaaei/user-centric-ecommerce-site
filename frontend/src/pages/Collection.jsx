// import React, { useContext, useEffect, useState } from 'react'
// import {ShopContext} from '../context/ShopContext'
// import { assets } from '../assets/assets';
// import Title from '../components/Title';
// import ProductItem from '../components/ProductItem';

// const Collection = () => {

//   const {products, search , showSearch} = useContext(ShopContext);
//   const [showFilter,setShowFilter] = useState(false);
//   const [filterProducts,setFilterProducts] = useState([]);
//   const [category,setCategory] = useState([]);
//   const [subCategory,setSubCategory] = useState([]);
//   const [sortType,setSortType] = useState('relavent')

//   const toggleCategory = (e) => {

//     if(category.includes(e.target.value)) {
//         setCategory(prev=> prev.filter(item => item !== e.target.value))
//     }
//     else{
//       setCategory(prev => [...prev,e.target.value])
//     }

//   }

//   const toggleSubCategory = (e) => {

//     if(subCategory.includes(e.target.value)) {
//       setSubCategory(prev=> prev.filter(item => item !== e.target.value))
//     }
//     else{
//       setSubCategory(prev => [...prev,e.target.value])
//     }
//   }

//   const applyFilter = () => {

//     let productsCopy = products.slice();

//     if(showSearch && search){
//       productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
//     }

//     if(category.length > 0){
//       productsCopy = productsCopy.filter(item => category.includes(item.category))
//     }

//     if(subCategory.length > 0){
//       productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
//     }

//     setFilterProducts(productsCopy)

//   }

//   const sortProduct = () => {
//     let fpCopy = filterProducts.slice();
//     switch(sortType) {

//       case 'low-high':
//         setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
//         break;

//       case 'high-low':
//         setFilterProducts(fpCopy.sort((a,b)=>(b.price-a.price)));
//         break;

//       default:
//         applyFilter();
//         break;
//     }
//   }

 
//   useEffect(()=>{
//     applyFilter();
//   },[category,subCategory,search,showSearch,products])

//   useEffect(()=>{
//     sortProduct();
//   },[sortType])

//  // useEffect(()=>{
//   //   setFilterProducts(products);
//   // },[])
//   // useEffect(()=>{
//   //   console.log(subCategory);
//   // },[subCategory])

//   return (
//     <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      
//     {/* Filter Options */}
//     <div className='min-w-60'>
//       <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
//         <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
//       </p>
//       {/* Category Filter */}
//       <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' :'hidden'} sm:block`}>
//       <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
//       <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
//         <p className='flex gap-2'>
//           <input className='w-3' type="checkbox" value={"Men"} onChange={toggleCategory}/> Men
//         </p>
//         <p className='flex gap-2'>
//           <input className='w-3' type="checkbox" value={"Women"} onChange={toggleCategory}/> Women
//         </p>
//         <p className='flex gap-2'>
//           <input className='w-3' type="checkbox" value={"Kids"} onChange={toggleCategory}/> Kids
//         </p>
//         {/* <p className='flex gap-2'>
//           <input className='w-3' type="checkbox" value={"Home"} onChange={toggleCategory}/> Home
//         </p> */}
//       </div>
//       </div>
//       {/* SubCatagory Filter */}
//       <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' :'hidden'} sm:block`}>
//       <p className='mb-3 text-sm font-medium'>TYPE</p>
//       <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
//         <p className='flex gap-2'>
//           <input className='w-3' type="checkbox" value={"Topwear"} onChange={toggleSubCategory}/> Topwear
//         </p>
//         <p className='flex gap-2'>
//           <input className='w-3' type="checkbox" value={"Bottomwear"} onChange={toggleSubCategory}/> Bottomwear
//         </p>
//         <p className='flex gap-2'>
//           <input className='w-3' type="checkbox" value={"Winterwear"} onChange={toggleSubCategory}/> Winterwear
//         </p>
//         {/* <p className='flex gap-2'>
//           <input className='w-3' type="checkbox" value={"Accessories"} onChange={toggleSubCategory}/> Accessories
//         </p> */}
        
//       </div>
//       </div>
//     </div>
//       {/* Right Side */}
//       <div className='flex-1'>
//         <div className='flex justify-between text-base sm:text-2xl mb-4'>
//           <Title text1={'ALL'} text2={'COLLECTIONS'}></Title>
//           {/* Product Sort */}
//           <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
//             <option value="relavent">Sort by: Relavent</option>
//             <option value="low-high">Sort by: Low to High</option>
//             <option value="high-low">Sort by: High to Low</option>
//           </select>
//         </div>

//         {/* Map Products */}
//         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
//           {
//             filterProducts.map((item,index)=>(
//               <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}></ProductItem>
//             ))
//           }
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Collection

import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
    const { products, search, showSearch } = useContext(ShopContext);

    // State for mobile filter visibility
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // State for filter values
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [sortType, setSortType] = useState('relevant');

    // State for the products displayed on the page
    const [filteredProducts, setFilteredProducts] = useState([]);

    const toggleFilter = (setter, value) => {
        setter(prev =>
            prev.includes(value)
                ? prev.filter(item => item !== value)
                : [...prev, value]
        );
    };
    
    const clearFilters = () => {
        setCategories([]);
        setSubCategories([]);
    }

    useEffect(() => {
        let tempProducts = [...products];

        // Apply search query first
        if (showSearch && search) {
            tempProducts = tempProducts.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
        }

        // Apply category filters
        if (categories.length > 0) {
            tempProducts = tempProducts.filter(item => categories.includes(item.category));
        }

        // Apply sub-category filters
        if (subCategories.length > 0) {
            tempProducts = tempProducts.filter(item => subCategories.includes(item.subCategory));
        }

        // Apply sorting
        switch (sortType) {
            case 'low-high':
                tempProducts.sort((a, b) => a.price - b.price);
                break;
            case 'high-low':
                tempProducts.sort((a, b) => b.price - a.price);
                break;
            default:
                // 'relevant' doesn't require sorting after filtering
                break;
        }

        setFilteredProducts(tempProducts);
        
    }, [categories, subCategories, search, showSearch, products, sortType]);

    // Filter Sidebar Component
    const FilterSidebar = () => (
        <div className="space-y-6">
             <div className="flex justify-between items-center">
                <h3 className='text-lg font-semibold text-slate-900'>Filters</h3>
                <button onClick={clearFilters} className="text-sm font-medium text-slate-600 hover:text-slate-900">Clear All</button>
            </div>
            {/* Category Filter */}
            <div>
                <h4 className='text-sm font-semibold text-slate-800 mb-3'>CATEGORIES</h4>
                <div className='flex flex-col gap-2 text-sm text-slate-700'>
                    {['Men', 'Women', 'Kids'].map(cat => (
                        <label key={cat} className='flex items-center gap-2 cursor-pointer'>
                            <input type="checkbox" value={cat} checked={categories.includes(cat)} onChange={(e) => toggleFilter(setCategories, e.target.value)} className='h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900' />
                            {cat}
                        </label>
                    ))}
                </div>
            </div>
            {/* Sub-category Filter */}
            <div>
                <h4 className='text-sm font-semibold text-slate-800 mb-3'>TYPE</h4>
                <div className='flex flex-col gap-2 text-sm text-slate-700'>
                    {['Topwear', 'Bottomwear', 'Winterwear'].map(subCat => (
                         <label key={subCat} className='flex items-center gap-2 cursor-pointer'>
                            <input type="checkbox" value={subCat} checked={subCategories.includes(subCat)} onChange={(e) => toggleFilter(setSubCategories, e.target.value)} className='h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900' />
                            {subCat}
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
            <div className='flex flex-col lg:flex-row gap-8'>
                {/* Desktop Filter Sidebar */}
                <aside className='hidden lg:block w-64 shrink-0'>
                    <div className="sticky top-24">
                        <FilterSidebar />
                    </div>
                </aside>

                {/* Main Content: Products Grid */}
                <main className='flex-1'>
                    {/* Header */}
                    <div className='flex flex-col sm:flex-row justify-between items-baseline border-b border-slate-200 pb-4 mb-6'>
                        <div>
                             <Title text1={'ALL'} text2={'COLLECTIONS'} />
                             <p className="mt-1 text-sm text-slate-500">{filteredProducts.length} products found</p>
                        </div>
                        <div className="flex items-center gap-4 mt-4 sm:mt-0">
                             {/* Mobile Filter Button */}
                            <button onClick={() => setIsFilterOpen(true)} className='lg:hidden flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900'>
                               <img src={assets.filter_icon} className="w-5" alt="Filter Icon"/>
                                <span>Filters</span>
                            </button>
                            <select onChange={(e) => setSortType(e.target.value)} value={sortType} className='border-slate-300 rounded-md text-sm py-2 pl-3 pr-8 focus:ring-slate-900 focus:border-slate-900'>
                                <option value="relevant">Sort by: Relevant</option>
                                <option value="low-high">Price: Low to High</option>
                                <option value="high-low">Price: High to Low</option>
                            </select>
                        </div>
                    </div>

                    {/* Products Grid */}
                    {filteredProducts.length > 0 ? (
                        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10'>
                            {filteredProducts.map((item) => (
                                <ProductItem key={item._id} name={item.name} id={item._id} price={item.price} image={item.image} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <h3 className="text-xl font-semibold text-slate-800">No Products Found</h3>
                            <p className="mt-2 text-slate-500">Try adjusting your filters or search term.</p>
                        </div>
                    )}
                </main>
            </div>

             {/* Mobile Filter Overlay */}
            <div className={`fixed inset-0 z-40 transform transition-transform ease-in-out duration-300 ${isFilterOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
                <div className="absolute inset-0 bg-black/40" onClick={() => setIsFilterOpen(false)}></div>
                <div className="relative w-full max-w-sm ml-auto h-full bg-white shadow-xl flex flex-col">
                    <div className='flex items-center justify-between p-4 border-b'>
                        <h2 className="font-semibold text-slate-800">Filters</h2>
                        <button onClick={() => setIsFilterOpen(false)} aria-label="Close menu">
                            <img src={assets.cross_icon} className='w-4' alt="Close"/>
                        </button>
                    </div>
                    <div className="flex-1 p-6 overflow-y-auto">
                        <FilterSidebar />
                    </div>
                    <div className="p-4 border-t bg-white">
                        <button onClick={() => setIsFilterOpen(false)} className="w-full bg-slate-900 text-white font-semibold py-3 rounded-md">
                            Apply Filters
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collection;