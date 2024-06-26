import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { data } from "../../data/about-data";

import "./About.scss";

const About = () => {
  const [abouts, setabouts] = useState([]);
  useEffect(() => {
    setabouts(data);
  }, []);

  return (
    <div className="app__about" id="about">
      <h2 className="head-text relative">
        <motion.div
          whileInView={{ height: ["100%", "0%"] }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="absolute bottom-0 left-0 z-10 h-full w-full bg-[#edf2f8]"
          viewport={{ once: true, amount: "all" }}
        ></motion.div>
        I Know That <span>Good Design</span>
        <br /> Means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, i) => (
          <div className="app__profile-item relative" key={about.title}>
            <motion.div
              whileInView={{ height: ["100%", "0%"] }}
              transition={{
                duration: 0.6,
                delay: 0.1 * i,
                ease: "easeOut",
              }}
              className="absolute bottom-0 left-0 z-10 h-full w-full bg-[#edf2f8]"
              viewport={{ once: true, amount: "all" }}
            ></motion.div>

            <img src={images[about.image]} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
