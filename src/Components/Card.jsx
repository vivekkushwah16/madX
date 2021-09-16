import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import Video from './Video';
import Data from "./data.json";
function Card(props) {
  const [display, setDisplay] = useState(false);
  const [tags,setTags]=useState([]);
  const { image, title, description, link,id} = props;
  const playVideo = (id) => {
    setDisplay(true);
    setTags(Data[id].tags)
    console.log(tags)
  };
  const close = (close) => {
    setDisplay(close);
  }

  return (
    <>
     <div className="position-relative">
     <div className="cardBody" onClick={() => playVideo(id)}>
        <img src={image} alt="card" />
        <AiFillHeart className="favIcon" />
        <div className="cardContent">
          <h2>{title}</h2>
          <p className="description ">{description}</p>
        </div>
      </div>
      {
        display
          ? <Video link={link}
            title={props.title}
            description={props.description}
            display={close}
            tags={tags}
          /> : null
      }
     </div>
      

    </>
  );
}

export default Card;
