import React from "react";
import Kidsproduct from "../Assets/kid_product";
import "../Container_row.css"
import Cardbox from "../Cards/Cards"

const Kids = () => {
    return (
      <>
      <div className="container_row">
        {
         Kidsproduct.map((product,index) => (
            <Cardbox key={index} img={product.img} name={product.name} new_price={product.new_price} old_price={product.old_price}offer={product.offer} />
          ))
        }
      </div>
      </>
    );
  }
  export default Kids;