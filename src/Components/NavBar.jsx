import React, { useState } from "react";
import "../Style/NavBar.css";
import List from "./data.json";
import Card from "./Card";
function NavBar() {
  const [display, setDisplay] = useState(false);
  const [filterList, setFilterList] = useState([]);
  const [checkId, setCheckId] = useState(1);
  const filterTag = (tag, id) => {
    console.log(List.length);
    setFilterList(
      List.filter((item) => item.tags.some((elem) => elem === tag))
    );
    const btn = document.getElementsByClassName("tagLink");
    console.log(btn);
    setCheckId((prev) => {
      if (prev === id) {
        setDisplay(!display);
      } else {
        setDisplay(true);
      }
      return id;
    });
  };
  return (
    <>
      <div className="navLink">
        <p className="type">Tag:</p>
        <div className="tags">
          <span className="tagLink" onClick={() => filterTag("tb", 1)}>
            Favorites
          </span>
          <span className="tagLink" onClick={() => filterTag("asthma", 2)}>
            Resp. Devices
          </span>
          <span className="tagLink" onClick={() => filterTag("copd", 3)}>
            CT SCans
          </span>
          <span className="tagLink" onClick={() => filterTag("bp", 4)}>
            DRTB
          </span>
          <span className="tagLink" onClick={() => filterTag("cancer", 5)}>
            Neurology
          </span>
        </div>
      </div>
      <div className="filterCard">
          {display
            ? filterList.map((item, index) => (
              <Card key={index} id={index}  image={item.thumbnailUrl} title={item.title} />
            ))
            : null}
      </div>
    </>
  );
}

export default NavBar;
