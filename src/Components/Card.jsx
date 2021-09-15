import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
function Card(props) {

  const { image, title,description } = props;
    
 
  return (
    <>
      <div className="cardBody" >
        <img src={image} alt="card" />
        <AiFillHeart className="favIcon" />
        <div className="cardContent">
          <h2>{title}</h2>
          <p className="description ">{description}</p>
        </div>
      </div>
      
    </>
  );
}

export default Card;
