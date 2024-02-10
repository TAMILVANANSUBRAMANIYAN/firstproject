import React from "react";
import Womenproduct from "../Assets/Women_product";
import "../Container_row.css"
import Cardbox from "../Cards/Cards"
const Women = () => {
    return (
      <>
      <div className="container_row">
        {
         Womenproduct.map((product,index) => (
            <Cardbox key={index} img={product.img} name={product.name} new_price={product.new_price} old_price={product.old_price}offer={product.offer} />
          ))
        }
      </div>
      </>
    );
  }
  export default Women;