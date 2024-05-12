import React, { useState } from "react";

import { HiMenuAlt4, HiX } from "react-icons/hi";
import "./Navbar.scss";
import { images } from "../../constants";

const Navbar = () => {
  const [imageSrc, setImageSrc] = useState("font8");
  const [toggle, setToggle] = useState(false);

  const handleLogo = () => {
    let curImageIndex = Number(imageSrc.charAt(4));
    console.log(imageSrc, curImageIndex, curImageIndex + 1);
    setImageSrc(curImageIndex === 8 ? `font1` : `font${curImageIndex + 1}`);
    console.log(imageSrc, curImageIndex, curImageIndex + 1);
  };

  return (
    <nav className="app__navbar">
      <a href="#home" className="app__navbar-logo">
        <img onMouseOver={handleLogo} src={images[imageSrc]} alt="LOGO" />
      </a>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div></div>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        <div className={`app__navbar-list ${toggle ? "active" : ""}`}>
          <HiX onClick={() => setToggle(false)} />

          <ul>
            {["home", "about", "work", "skills", "contact"].map((item) => (
              <li key={item}>
                <div></div>
                <a href={`#${item}`} onClick={() => setToggle(false)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
