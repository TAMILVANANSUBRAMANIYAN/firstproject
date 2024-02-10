import React from 'react';
import "./Cards.css";

const Cardbox = ({img,name,new_price,old_price,offer}) => {
  return (
    <div className="card productcard">
        <img src={img} className="card-img-top" alt="Temp"/>
        <div className="card-body productcard__text">
            <h5 className="card-title">{name}</h5>
            <div className="productcard__rs">
              <p className="card-text">{new_price}</p>
              <p className="card-text productcard__rs2">{old_price}</p>
               <p className="card-text productcard__rs3">{offer}</p>
            </div>
            <a href="#"  className="btn">Buy now</a>
            <a href="#" className="btn">Add to cart</a>
        </div>
    </div>
  
  )
}

export default Cardbox