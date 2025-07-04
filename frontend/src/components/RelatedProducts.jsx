import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const RelatedProducts = ({category,subCategory}) => {

    const {products} = useContext(ShopContext);
    const [related,setRelated] = useState([]);

    useEffect(()=>{

        if(products.lenth > 0){
            let produtsCopy = products.slice();

            produtsCopy = produtsCopy.filter((item)=>category === item.category)
        }

    },[])

  return (
    <div>
      
    </div>
  )
}

export default RelatedProducts
