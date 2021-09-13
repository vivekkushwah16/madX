import React, { useState } from "react";
import { ImageLinks } from "./ImagesLink";
import {
  FiArrowLeftCircle as Left,
  FiArrowRightCircle as Right,
} from "react-icons/fi";
import "../Style/ImageSlider.css";
import FlipMove from 'react-flip-move';
function ImageSlider() {
  const [currentImage, setCurrentImage] = useState(0);
  const slides = ImageLinks.length;
  const nextSlide = () => {
    setCurrentImage(currentImage === slides - 1 ? 0 : currentImage + 1);
  };

  const prevSlide = () => {
    setCurrentImage(currentImage === 0 ? slides - 1 : currentImage - 1);
  };
  
  return (
    <>
      <div id="Sliders">
        <Left className="arrow left" onClick={prevSlide} />
        <Right className="right arrow" onClick={nextSlide} />
        <div className="sliderWapper">
            {ImageLinks.map((img) => (
            <div key={img.id} >
                <FlipMove >
                    {img.id === currentImage ? (
                    <img src={img.image} alt="Slider" className="images" />
                    ) : null}
                </FlipMove>  
            </div>
            ))} 
        </div>
      
      </div>
    </>
  );
}

export default ImageSlider;
