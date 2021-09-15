import React, { useState } from "react";
import "../Style/Card.css";
import Data from "./data.json";
import Video from "./Video";
import Card from "./Card";
export function Cards() {
  // const [videoLink,setVideoLink]=useState([]);
  // const[display,setDisplay]=useState(true);
  // const showVideo=(title)=>{
  //     setVideoLink(
  //         Data.filter((item) => item.title === title)
  //       );

  //     setDisplay(true)
  //   }
  //   function Close(value){
  //     setDisplay(value)
  //   }

  return (
    <>
      {/* {display ? videoLink.map((item,index) => <Video key={index} Close={Close} link={item.videolink} />) : null} */}
      <div className="cardContainer">
        <h2 className="allVideo">
          All Videos:
        </h2>
        <div className="cards">
          {Data.map((item, index) => (
            <Card
              key={index}
              id={index}
              image={item.thumbnailUrl}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}
