import React from "react";
import { AiFillHeart } from "react-icons/ai";
function Card(props) {
  const { image, title,showVideo } = props;
    
 
  return (
    <>
      <div className="cardBody" onClick={ () =>showVideo(title)}>
        <img src={image} alt="card" />
        <div className="cardContent">
          <AiFillHeart className="favIcon" />
          <h2>{title}</h2>
        </div>
      </div>
      
    </>
  );
}

export default Card;
