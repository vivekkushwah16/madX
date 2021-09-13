import React from "react";
import ImageSlider from './ImageSlider';
import "../Style/Banner.css"
import { BsBell } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";

function Banner() {
  return (
    <>
      <header>
        <div className="navBar">
          <h1>
            med <span>X</span>
          </h1>
          <div className="navIcon">
          <span><BsBell /></span>
          <span><CgProfile /></span>
          <IoMdArrowDropdown />
          </div>
        </div>
        <ImageSlider />
        <div className="content">
            <h1>
              Diagnosis & Monitoring of airway diseases in the Era of Social Distancing
            </h1>
            <button>WATCH NOW</button>
        </div>
        <div>
        </div>
      </header>
    </>
  );
}

export default Banner;
