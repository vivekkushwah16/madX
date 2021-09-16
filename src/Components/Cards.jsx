import React from "react";
import "../Style/Card.css";
import Data from "./data.json";
import Card from "./Card";
export function Cards() {
  return (
    <>
      <div className="cardContainer">
        <h2 className="allVideo">All Videos:</h2>
        <div className="cards">
          {Data.map((item, index) => (
            <Card
              key={index}
              id={index}
              image={item.thumbnailUrl}
              title={item.title}
              description={item.description}
              link={item.videolink}
              
            />
          ))}
        </div>
      </div>
    </>
  );
}
