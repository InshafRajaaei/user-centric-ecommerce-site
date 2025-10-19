// // import React, { use, useState } from 'react'
// // import { assets } from '../assets/assets'
// // import axios from 'axios'
// // import { backendUrl } from '../App'
// // import { toast } from 'react-toastify'

// // const Add = ({token}) => {

// //   const [image1,setImage1] = useState(false)
// //   const [image2,setImage2] = useState(false)
// //   const [image3,setImage3] = useState(false)
// //   const [image4,setImage4] = useState(false)

// //   const [name,setName] = useState("");
// //   const [description,setDescription] = useState("");
// //   const [price,setPrice] = useState("");
// //   const [category,setCategory] = useState("Men");
// //   const [subCategory,setSubCategory] = useState("Topwear");
// //   const [bestseller,setBestseller] = useState(false);
// //   const [sizes,setSizes] = useState([]);

// //   const onSubmitHandler = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const formData = new FormData()

// //       formData.append("name",name)
// //       formData.append("description",description)
// //       formData.append("price",price)
// //       formData.append("category",category)
// //       formData.append("subCategory",subCategory)
// //       formData.append("bestseller",bestseller)
// //       formData.append("sizes",JSON.stringify(sizes))

// //       image1 && formData.append("image1",image1)
// //       image2 && formData.append("image2",image2)
// //       image3 && formData.append("image3",image3)
// //       image4 && formData.append("image4",image4)

// //       const response = await axios.post(backendUrl + "/api/product/add",formData,{headers:{token}})

// //       if (response.data.success) {
// //         toast.success(response.data.message)
// //         setName('')
// //         setDescription('')
// //         setImage1(false)
// //         setImage2(false)
// //         setImage3(false)
// //         setImage4(false)
// //         setPrice('')
// //       } else {
// //         toast.error(response.data.message)
// //       }
      

// //     } catch (error) {
// //       console.log(error);
// //       toast.error(error.message)
      
// //     }
// //   }

// //   return (
// //     <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
// //       <div>
// //         <p className='mb-2'>Upload Image</p>
// //         <div className='flex gap-2'>
// //           <label htmlFor="image1">
// //             <img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
// //             <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id="image1" hidden />
// //           </label>
// //           <label htmlFor="image2">
// //             <img className='w-20' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
// //             <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id="image2" hidden />
// //           </label>
// //           <label htmlFor="image3">
// //             <img className='w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
// //             <input onChange={(e)=>setImage3(e.target.files[0])} type="file" id="image3" hidden />
// //           </label>
// //           <label htmlFor="image4">
// //             <img className='w-20' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
// //             <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id="image4" hidden />
// //           </label>
// //         </div>
// //       </div>
      
// //       <div className='w-full'>
// //         <p className='mb-2'>Product name</p>
// //         <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type here' required/>
// //       </div>

// //       <div className='w-full'>
// //         <p className='mb-2'>Product description</p>
// //         <textarea onChange={(e)=>setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Write content here' required/>
// //       </div>

// //       <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
// //         <div>
// //           <p className='mb-2'>Product category</p>
// //           <select onChange={(e)=>setCategory(e.target.value)} className='w-full px-3 py-2'>
// //             <option value="Men">Men</option>
// //             <option value="Women">Women</option>
// //             <option value="Kids">Kids</option>
// //             {/* <option value="Home">Home</option>
// //             <option value="Assecories">Assecories</option>
// //             <option value="Toys">Toys</option> */}
// //           </select>
// //         </div>
// //         <div>
// //           <p className='mb-2' >Sub category</p>
// //           <select onChange={(e)=>setSubCategory(e.target.value)} className='w-full px-3 py-2'>
// //             <option value="Topwear">Topwear</option>
// //             <option value="Bottomwear">Bottomwear</option>
// //             <option value="Winterwear">Winterwear</option>
// //             {/* <option value="Traditional">Traditional</option>
// //             <option value="Formal">Formal</option>
// //             <option value="Casual">Casual</option>
// //             <option value="Wedding">Wedding</option>
// //             <option value="Accessories">Accessories</option>
// //             <option value="Decor">Home Decor</option>
// //             <option value="Dining">Dining</option> */}
// //           </select>
// //         </div>
// //         <div>
// //           <p className='mb-2'>Producr Price</p>
// //           <input onChange={(e)=>setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type="Number" placeholder='25' />
// //         </div>
// //       </div>
// //       <div>
// //         <p className='mb-2'>Product Sizes</p>
// //         <div className='flex gap-3'>

// //           <div onClick={()=>setSizes(prev => prev.includes("S") ? prev.filter(item => item !== "S") : [...prev,"S"])}>
// //             <p className={`${sizes.includes("S") ? "bg-pink-100" : "bg-slate-200" } px-3 py-1 cursor-pointer`}>S</p>
// //           </div>

// //           <div onClick={()=>setSizes(prev => prev.includes("M") ? prev.filter(item => item !== "M") : [...prev,"M"])}>
// //             <p className={`${sizes.includes("M") ? "bg-pink-100" : "bg-slate-200" } px-3 py-1 cursor-pointer`}>M</p>
// //           </div>

// //           <div onClick={()=>setSizes(prev => prev.includes("L") ? prev.filter(item => item !== "L") : [...prev,"L"])}>
// //             <p className={`${sizes.includes("L") ? "bg-pink-100" : "bg-slate-200" } px-3 py-1 cursor-pointer`}>L</p>
// //           </div>

// //           <div onClick={()=>setSizes(prev => prev.includes("XL") ? prev.filter(item => item !== "XL") : [...prev,"XL"])}>
// //             <p className={`${sizes.includes("XL") ? "bg-pink-100" : "bg-slate-200" } px-3 py-1 cursor-pointer`}>XL</p>
// //           </div>

// //           <div onClick={()=>setSizes(prev => prev.includes("XXL") ? prev.filter(item => item !== "XXL") : [...prev,"XXL"])}>
// //             <p className={`${sizes.includes("XXL") ? "bg-pink-100" : "bg-slate-200" } px-3 py-1 cursor-pointer`}>XXL</p>
// //           </div>

// //           {/* <div onClick={()=>setSizes(prev => prev.includes("Free Size") ? prev.filter(item => item !== "Free Size") : [...prev,"Free Size"])}>
// //             <p className={`${sizes.includes("Free Size") ? "bg-pink-100" : "bg-slate-200" } px-3 py-1 cursor-pointer`}>Free Size</p>
// //           </div> */}

// //           {/* <div onClick={()=>setSizes(prev => prev.includes("XXL") ? prev.filter(item => item !== "XXL") : [...prev,"XXL"])}>
// //             <p className={`${sizes.includes("XXL") ? "bg-pink-100" : "bg-slate-200" } px-3 py-1 cursor-pointer`}>XXL</p>
// //           </div>

// //           <div onClick={()=>setSizes(prev => prev.includes("XXL") ? prev.filter(item => item !== "XXL") : [...prev,"XXL"])}>
// //             <p className={`${sizes.includes("XXL") ? "bg-pink-100" : "bg-slate-200" } px-3 py-1 cursor-pointer`}>XXL</p>
// //           </div> */}
// //         </div>
// //       </div>

// //       <div className='flex gap-2 mt-2'>
// //         <input onChange={() => setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id='bestseller'/>
// //         <label className='cursor-pointer' htmlFor="bestseller">Add to bestseller</label>
// //       </div>

// //       <button type="submit" className='w-28 py-3 mt-4 bg-black text-white'>ADD</button>
// //     </form>
// //   )
// // }

// // export default Add

// import React, { use, useState } from 'react'
// import { assets } from '../assets/assets'
// import axios from 'axios'
// import { backendUrl } from '../App'
// import { toast } from 'react-toastify'

// const Add = ({token}) => {

//   const [image1,setImage1] = useState(false)
//   const [image2,setImage2] = useState(false)
//   const [image3,setImage3] = useState(false)
//   const [image4,setImage4] = useState(false)

//   const [name,setName] = useState("");
//   const [description,setDescription] = useState("");
//   const [price,setPrice] = useState("");
//   const [category,setCategory] = useState("Men");
//   const [subCategory,setSubCategory] = useState("Topwear");
//   const [bestseller,setBestseller] = useState(false);
//   const [sizes,setSizes] = useState([]);

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData()

//       formData.append("name",name)
//       formData.append("description",description)
//       formData.append("price",price)
//       formData.append("category",category)
//       formData.append("subCategory",subCategory)
//       formData.append("bestseller",bestseller)
//       formData.append("sizes",JSON.stringify(sizes))

//       image1 && formData.append("image1",image1)
//       image2 && formData.append("image2",image2)
//       image3 && formData.append("image3",image3)
//       image4 && formData.append("image4",image4)

//       const response = await axios.post(backendUrl + "/api/product/add",formData,{headers:{token}})

//       if (response.data.success) {
//         toast.success(response.data.message)
//         setName('')
//         setDescription('')
//         setImage1(false)
//         setImage2(false)
//         setImage3(false)
//         setImage4(false)
//         setPrice('')
//       } else {
//         toast.error(response.data.message)
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message)
//     }
//   }

//   return (
//     <form onSubmit={onSubmitHandler} className="card w-full p-6 space-y-6">
//       <div className="flex items-center justify-between">
//         <h2 className="text-lg font-semibold text-slate-800">Add Product</h2>
//       </div>

//       <div>
//         <p className="section-title mb-3">Product Images</p>
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
//           <label htmlFor="image1" className="upload-tile">
//             <img className="w-full h-full object-cover" src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
//             <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id="image1" hidden />
//           </label>
//           <label htmlFor="image2" className="upload-tile">
//             <img className="w-full h-full object-cover" src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
//             <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id="image2" hidden />
//           </label>
//           <label htmlFor="image3" className="upload-tile">
//             <img className="w-full h-full object-cover" src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
//             <input onChange={(e)=>setImage3(e.target.files[0])} type="file" id="image3" hidden />
//           </label>
//           <label htmlFor="image4" className="upload-tile">
//             <img className="w-full h-full object-cover" src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
//             <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id="image4" hidden />
//           </label>
//         </div>
//       </div>

//       <div className="grid md:grid-cols-2 gap-6">
//         <div className="space-y-4">
//           <div>
//             <p className="label mb-2">Product name</p>
//             <input
//               onChange={(e)=>setName(e.target.value)}
//               value={name}
//               className="input"
//               type="text"
//               placeholder="Type here"
//               required
//             />
//           </div>

//           <div>
//             <p className="label mb-2">Product description</p>
//             <textarea
//               onChange={(e)=>setDescription(e.target.value)}
//               value={description}
//               className="input min-h-[120px]"
//               type="text"
//               placeholder="Write content here"
//               required
//             />
//           </div>
//         </div>

//         <div className="space-y-4">
//           <div className="grid sm:grid-cols-2 gap-4">
//             <div>
//               <p className="label mb-2">Product category</p>
//               <select onChange={(e)=>setCategory(e.target.value)} className="input">
//                 <option value="Men">Men</option>
//                 <option value="Women">Women</option>
//                 <option value="Kids">Kids</option>
//               </select>
//             </div>
//             <div>
//               <p className="label mb-2">Sub category</p>
//               <select onChange={(e)=>setSubCategory(e.target.value)} className="input">
//                 <option value="Topwear">Topwear</option>
//                 <option value="Bottomwear">Bottomwear</option>
//                 <option value="Winterwear">Winterwear</option>
//               </select>
//             </div>
//           </div>

//           <div>
//             <p className="label mb-2">Product Price</p>
//             <input
//               onChange={(e)=>setPrice(e.target.value)}
//               value={price}
//               className="input w-full sm:w-[160px]"
//               type="Number"
//               placeholder="25"
//             />
//           </div>

//           <div>
//             <p className="label mb-2">Product Sizes</p>
//             <div className="flex flex-wrap gap-2">
//               <div onClick={()=>setSizes(prev => prev.includes("S") ? prev.filter(item => item !== "S") : [...prev,"S"])}>
//                 <p className={`chip ${sizes.includes("S") ? 'chip-active' : 'chip-inactive'}`}>S</p>
//               </div>
//               <div onClick={()=>setSizes(prev => prev.includes("M") ? prev.filter(item => item !== "M") : [...prev,"M"])}>
//                 <p className={`chip ${sizes.includes("M") ? 'chip-active' : 'chip-inactive'}`}>M</p>
//               </div>
//               <div onClick={()=>setSizes(prev => prev.includes("L") ? prev.filter(item => item !== "L") : [...prev,"L"])}>
//                 <p className={`chip ${sizes.includes("L") ? 'chip-active' : 'chip-inactive'}`}>L</p>
//               </div>
//               <div onClick={()=>setSizes(prev => prev.includes("XL") ? prev.filter(item => item !== "XL") : [...prev,"XL"])}>
//                 <p className={`chip ${sizes.includes("XL") ? 'chip-active' : 'chip-inactive'}`}>XL</p>
//               </div>
//               <div onClick={()=>setSizes(prev => prev.includes("XXL") ? prev.filter(item => item !== "XXL") : [...prev,"XXL"])}>
//                 <p className={`chip ${sizes.includes("XXL") ? 'chip-active' : 'chip-inactive'}`}>XXL</p>
//               </div>
//             </div>
//           </div>

//           <div className="flex items-center gap-2">
//             <input onChange={() => setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id='bestseller' className="accent-pink-500 h-4 w-4" />
//             <label className="cursor-pointer text-slate-700" htmlFor="bestseller">Add to bestseller</label>
//           </div>
//         </div>
//       </div>

//       <div className="pt-2">
//         <button type="submit" className="btn-primary px-6 py-2.5">Add Product</button>
//       </div>
//     </form>
//   )
// }

// export default Add

import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Add = ({ token }) => {

    const [images, setImages] = useState(Array(4).fill(false));
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Men",
        subCategory: "Topwear",
        bestseller: false,
        sizes: []
    });

    const onImageChange = (e, index) => {
        const newImages = [...images];
        newImages[index] = e.target.files[0];
        setImages(newImages);
    }

    const onChangeHandler = (e) => {
        const { name, value, type, checked } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    }

    const onSizeChange = (size) => {
        setData(prevData => ({
            ...prevData,
            sizes: prevData.sizes.includes(size)
                ? prevData.sizes.filter(s => s !== size)
                : [...prevData.sizes, size]
        }));
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("description", data.description);
            formData.append("price", data.price);
            formData.append("category", data.category);
            formData.append("subCategory", data.subCategory);
            formData.append("bestseller", data.bestseller);
            formData.append("sizes", JSON.stringify(data.sizes));
            
            images.forEach((image, index) => {
                if (image) {
                    formData.append(`image${index + 1}`, image);
                }
            });

            const response = await axios.post(`${backendUrl}/api/product/add`, formData, { headers: { token } });

            if (response.data.success) {
                toast.success(response.data.message);
                // Reset form
                setData({ name: "", description: "", price: "", category: "Men", subCategory: "Topwear", bestseller: false, sizes: [] });
                setImages(Array(4).fill(false));
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    return (
        <form onSubmit={onSubmitHandler} className='card w-full p-6 space-y-6'>
            <h2 className="text-lg font-semibold text-dark">Add New Product</h2>
            
            <div>
                <p className="label mb-3">Product Images</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {images.map((image, index) => (
                        <label key={index} htmlFor={`image${index + 1}`} className="upload-tile">
                            <img className='w-full h-full object-cover' src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="" />
                            <input onChange={(e) => onImageChange(e, index)} type="file" id={`image${index + 1}`} hidden />
                        </label>
                    ))}
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <div>
                        <p className='label mb-2'>Product name</p>
                        <input name="name" onChange={onChangeHandler} value={data.name} className='input' type="text" placeholder='e.g. Classic Blue T-Shirt' required/>
                    </div>
                    <div>
                        <p className='label mb-2'>Product description</p>
                        <textarea name="description" onChange={onChangeHandler} value={data.description} className='input min-h-[120px]' placeholder='Write content here' required/>
                    </div>
                </div>
                
                <div className="space-y-4">
                    <div className='grid sm:grid-cols-2 gap-4'>
                        <div>
                            <p className='label mb-2'>Product category</p>
                            <select name="category" onChange={onChangeHandler} value={data.category} className='input'>
                                <option value="Men">Men</option>
                                <option value="Women">Women</option>
                                <option value="Kids">Kids</option>
                            </select>
                        </div>
                        <div>
                            <p className='label mb-2'>Sub category</p>
                            <select name="subCategory" onChange={onChangeHandler} value={data.subCategory} className='input'>
                                <option value="Topwear">Topwear</option>
                                <option value="Bottomwear">Bottomwear</option>
                                <option value="Winterwear">Winterwear</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <p className='label mb-2'>Product Price</p>
                        <input name="price" onChange={onChangeHandler} value={data.price} className='input w-full sm:w-[160px]' type="Number" placeholder='e.g. 25' required />
                    </div>
                    <div>
                        <p className='label mb-2'>Product Sizes</p>
                        <div className='flex flex-wrap gap-2'>
                            {["S", "M", "L", "XL", "XXL"].map(size => (
                                <div key={size} onClick={() => onSizeChange(size)}>
                                    <p className={`chip ${data.sizes.includes(size) ? 'chip-active' : 'chip-inactive'}`}>{size}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                     <div className='flex items-center gap-2 pt-2'>
                        <input name="bestseller" onChange={onChangeHandler} checked={data.bestseller} type="checkbox" id='bestseller' className="accent-dark h-4 w-4 rounded" />
                        <label className='cursor-pointer text-medium' htmlFor="bestseller">Mark as bestseller</label>
                    </div>
                </div>
            </div>

            <div className="pt-2">
                <button type="submit" className='btn-primary px-8 py-2.5'>ADD PRODUCT</button>
            </div>
        </form>
    )
}

export default Add