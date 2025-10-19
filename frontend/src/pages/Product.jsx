// import React, { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { ShopContext } from "../context/ShopContext";
// import { assets } from "../assets/assets";
// import RelatedProducts from "../components/RelatedProducts";

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, addToCart } = useContext(ShopContext);
//   const [productData, setProductData] = useState(false);
//   const [image, setImage] = useState("");
//   const [size, setSize] = useState("");

//   const fetchProductData = async () => {
//     products.map((item) => {
//       if (item._id === productId) {
//         setProductData(item);
//         setImage(item.image[0]);
// //        console.log(item);
//         return null;
//       }
//     });
//   };

//   useEffect(() => {
//     fetchProductData();
//   }, [productId, products]);

//   return productData ? (
//     <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 ">
//       {/* Product Data */}
//       <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
//         {/* Product Images */}
//         <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
//           <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
//             {productData.image.map((item, index) => (
//               <img
//                 onClick={() => setImage(item)}
//                 src={item}
//                 key={index}
//                 className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
//                 alt=""
//               />
//             ))}
//           </div>
//           <div className="w-full sm:w-[80%]">
//             <img className="w-full h-auto" src={image} alt="" />
//           </div>
//         </div>

//         {/* ----------Product Info------------------- */}
//         <div className="flex-1">
//           <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
//           <div className="flex items-center gap-1 mt-2">
//             <img src={assets.star_icon} className="w-3 5" alt="" />
//             <img src={assets.star_icon} className="w-3 5" alt="" />
//             <img src={assets.star_icon} className="w-3 5" alt="" />
//             <img src={assets.star_icon} className="w-3 5" alt="" />
//             <img src={assets.star_dull_icon} className="w-3 5" alt="" />
//             <p className="pl-2">(122)</p>
//           </div>
//           <p className="mt-5 text-3xl font-medium">
//             {currency}
//             {productData.price}
//           </p>
//           <p className="mt-5 to-gray-500 md:w-4/5">{productData.description}</p>
//           <div className="flex flex-col gap-4 my-8">
//             <p>select Size</p>
//             <div className="flex gap-2">
//               {productData.sizes.map((item, index) => (
//                 <button
//                   onClick={() => setSize(item)}
//                   className={`border py-2 px-4 bg-gray-100 ${
//                     item === size ? "border-orange-500" : ""
//                   }`}
//                   key={index}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>
//           <button onClick={()=>addToCart(productData._id,size)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
//             ADD TO CART
//           </button>
//           <hr className="mt-8 sm:w-4/5" />
//           <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
//             <p>100% Original product</p>
//             <p>Cash on delivery is available on this product</p>
//             <p>Easy return and exchange policy within 7 days</p>
//           </div>
//         </div>
//       </div>

//       {/* --------------Description & Review section--------------------- */}
//         <div className="mt-20">
//           <div className="flex">
//             <b className="border px-5 py-3 text-sm">Description</b>
//             <p className="border px-5 py-3 text-sm">Reviews (122)</p>
//           </div>
//           <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
//               <p>This is a beautifully crafted product designed with both functionality and elegance in mind. Whether you're using it at home or on the go, it offers unmatched reliability and style. Made from premium materials and tested for durability, it seamlessly blends into any lifestyle. With its intuitive design and thoughtful features, this product is perfect for anyone looking to elevate their everyday experience. Discover the difference quality makes—because you deserve nothing less.</p>
//               <p>Experience the perfect fusion of innovation and simplicity with this exceptional product. Engineered to meet the demands of modern life, it delivers outstanding performance without compromising on comfort or style. Whether you're tackling daily tasks or indulging in moments of leisure, this product adapts effortlessly to your needs. Its sleek design and user-friendly features make it a must-have addition to your collection. Elevate your routine with a touch of sophistication and smart design.</p>
//           </div>
//         </div>

//               {/* ----------------Display related products------------------------- */}

//               <RelatedProducts category={productData.category} subCategory={productData.subCategory}></RelatedProducts>

//     </div>
//   ) : (
//     <div className="opacity-0"></div>
//   );
// };

// export default Product;


import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";
import { toast } from "react-toastify";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [activeImage, setActiveImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    const product = products.find(p => p._id === productId);
    if (product) {
      setProductData(product);
      setActiveImage(product.image[0]);
      setSelectedSize(product.sizes[0] || ""); // Default to first available size
    }
  }, [productId, products]);

  const handleAddToCart = () => {
    if (!selectedSize) {
        toast.error("Please select a size.");
        return;
    }
    addToCart(productData._id, selectedSize);
  }

  if (!productData) {
    return <div className="min-h-screen"></div>; // Or a loading spinner
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="flex flex-col-reverse sm:flex-row gap-4">
          <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-x-visible">
            {productData.image.map((img, index) => (
              <img
                key={index}
                onClick={() => setActiveImage(img)}
                src={img}
                className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 ${activeImage === img ? 'border-slate-900' : 'border-transparent'}`}
                alt={`Thumbnail ${index + 1}`}
              />
            ))}
          </div>
          <div className="flex-1">
            <img className="w-full h-auto object-cover rounded-lg" src={activeImage} alt={productData.name} />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="font-semibold text-3xl text-slate-900">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-3">
            {[...Array(4)].map((_, i) => <img key={i} src={assets.star_icon} className="w-4" alt="star" />)}
            <img src={assets.star_dull_icon} className="w-4" alt="star dull" />
            <p className="pl-2 text-sm text-slate-500">(122 reviews)</p>
          </div>
          <p className="mt-5 text-4xl font-bold text-slate-900">{currency}{productData.price}</p>
          <p className="mt-5 text-slate-600 leading-relaxed">{productData.description}</p>
          
          <div className="my-8">
            <p className="text-sm font-semibold text-slate-800 mb-3">Select Size</p>
            <div className="flex flex-wrap gap-3">
              {productData.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`border py-2 px-5 rounded-md text-sm font-medium transition-colors ${
                    selectedSize === size ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button onClick={handleAddToCart} className="w-full sm:w-auto bg-slate-900 text-white px-10 py-3.5 text-sm font-semibold rounded-md active:bg-slate-800 hover:bg-slate-800 transition-colors">
            ADD TO CART
          </button>
          
          <div className="text-sm text-slate-600 mt-8 space-y-1">
            <p>✓ 100% Original product</p>
            <p>✓ Cash on delivery is available</p>
            <p>✓ 7-day easy return and exchange policy</p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
      </div>
    </div>
  );
};

export default Product;