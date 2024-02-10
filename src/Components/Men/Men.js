import React from "react";
import Mensproduct from "../Assets/Mens_products"
import "../Container_row.css"
import Cardbox from "../Cards/Cards"




const Men = () => {

  return (
    <>
      <div className="container_row">
        {
         Mensproduct.map((product,index) => (
            <Cardbox key={index} img={product.img} name={product.name} new_price={product.new_price} old_price={product.old_price}offer={product.offer} />
          ))
        }
      </div>
      </>
  
            
  )
}

export default Men