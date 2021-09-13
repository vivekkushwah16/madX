import React from 'react'
import "../Style/video.css";
import { RiCloseCircleLine } from "react-icons/ri";
import ReactPlayer from 'react-player'
function Video(props) {
  const {link,Close}=props;
  console.log(link)
    return (
        <>
            <div className="videoBody">
             <div className="closeIcon">
                 <RiCloseCircleLine onClick={()=>Close(false)} />
             </div>
            <div className="videoContent">
               <ReactPlayer className="video" url={link} />
            </div>
                
            </div>
        </>
    )
}

export default Video
