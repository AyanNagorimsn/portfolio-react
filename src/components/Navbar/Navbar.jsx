import React, { useState } from "react";

import { HiMenuAlt4, HiX } from "react-icons/hi";
import { useLenis } from "@studio-freight/react-lenis";

import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const lenis = useLenis();

  return (
    <nav className="app__navbar">
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <a onClick={() => lenis.scrollTo(`#${item}`)} href={`#${item}`}>
              {item}
            </a>
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
                <a
                  onClick={() => {
                    lenis.scrollTo(`#${item}`);

                    setToggle(false);
                  }}
                >
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
