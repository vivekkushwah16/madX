import React, { useState } from "react";
import "../Style/NavBar.css";
import List from "./data.json";
import Card from "./Card";
function NavBar() {
  const [display, setDisplay] = useState(false);
  const [filterList, setFilterList] = useState([]);
  const [checkId, setCheckId] = useState(0);
  const filterTag = (tag, id) => {
    console.log(List.length);
    setFilterList(
      List.filter((item) => item.tags.some((elem) => elem === tag))
    );
    const btn = document.getElementsByClassName("tagLink");
    console.log(btn);
    setCheckId((prev) => {
      if (prev === id) {
        setCheckId(0);
        setDisplay(!display);
      } else {
        setDisplay(true);
      }
      return id;
    });
  };
  return (
    <>
      <div className="LinkContainer">
        <div className="navLink">
          <p className="type">Tag:</p>
          <div className="tags">
            <span className={`tagLink ${ checkId === 1 ? "activeLink" :""}`} onClick={() => filterTag("tb", 1)}>
              Favorites
            </span>
            <span className={`tagLink ${ checkId === 2 ? "activeLink" :""}`} onClick={() => filterTag("asthma", 2)}>
              Resp. Devices
            </span>
            <span className={`tagLink ${ checkId === 3 ? "activeLink" :""}`} onClick={() => filterTag("copd", 3)}>
              CT SCans
            </span>
            <span className={`tagLink ${ checkId === 4 ? "activeLink" :""}`} onClick={() => filterTag("bp", 4)}>
              DRTB
            </span>
            <span className={`tagLink ${ checkId === 5 ? "activeLink" :""}`} onClick={() => filterTag("cancer", 5)}>
              Neurology
            </span>
          </div>
        </div>
      </div>

      <div className="filterContent">
        <div className="filterCard">
          {display
            ? filterList.map((item, index) => (
                <Card
                  key={index}
                  id={index}
                  image={item.thumbnailUrl}
                  title={item.title}
                  description={item.description}
                />
              ))
            : null}
        </div>
      </div>
    </>
  );
}

export default NavBar;
