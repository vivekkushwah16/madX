import React, { useState } from "react";
import "../Style/video.css";
import { RiCloseCircleLine } from "react-icons/ri";
import ReactPlayer from "react-player";

function Video(props) {
  const [showMore, setShowMore] = useState(true);
  const { link, title, description ,tags} = props;
  return (
    <>
      <div className=" VideoPlayer">
        <div className="videoContent">
          <div className="closeIcon">
            <RiCloseCircleLine onClick={() => props.display(false)} />
          </div>
          <ReactPlayer
            controls
            playing={true}
            url={link}
            width="330px"
            height="200px"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
         { tags.map((ele) =>
            <button key={ele} className="tagBtn">{ele}</button>
            )}
          {showMore ? <p className="card-text ">{description} </p> : null}
          <p className="showLess" onClick={() => setShowMore(false)}>
            show less
          </p>
        </div>
      </div>

      {/* <div className="videoPlayer">
                   
                    <div className="videoContent">
                   
                        <ReactPlayer
                            controls
                            width= "400px"
                           height= "300px"
                            playing={true}
                            url={link}
                            config={{
                                file: {
                                    attributes: {
                                        controlsList: "nofullscreen",
                                    },
                                },
                            }}
                          
                        />
                         <div className="closeIcon">
                        <RiCloseCircleLine onClick={() => props.display(false)} />
                    </div>
                        <div className="cardContent">
                            <h2>{title}</h2>
                            <p className="description ">{description}</p>
                        </div>
                    </div>
                </div> */}
    </>
  );
}

export default Video;
