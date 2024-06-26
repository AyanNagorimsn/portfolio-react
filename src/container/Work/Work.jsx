import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { data } from "../../data/work-data";

import "./Work.scss";

const Work = () => {
  const [isTouchScreen, setIsTouchScreen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterWork, setFilterWork] = useState([]);
  const [works, setWorks] = useState([]);

  useEffect(() => {
    setWorks(data);
    setFilterWork(data);

    const handleTouchStart = () => {
      setIsTouchScreen(true);
      // Remove the event listener after detecting touch
      window.removeEventListener("touchstart", handleTouchStart);
    };

    // Add the event listener
    window.addEventListener("touchstart", handleTouchStart);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      setFilterWork(works.filter((work) => work.tags.includes(item)));
    }, 500);
  };

  return (
    <section className="app__work" id="work">
      <h2 className="head-text hacker-effect">
        My creative <span>Portfolio</span> section
      </h2>

      <div className="app__work-filter">
        {["All", "Best", "Dynamic", "Static"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={`app__work-portfolio ${isTouchScreen ? "onMobile" : ""}`}
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img">
              <img src={images[work.imgname]} alt={work.name} />

              <motion.div
                whileHover={!isTouchScreen ? { opacity: [0, 1] } : { opacity: [1, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileHover={{ scale: [1, 0.8] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className=" app__flex"
                  >
                    <AiFillEye fill="var(--white-color)" />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileHover={{ scale: [1, 0.8] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className=" app__flex"
                  >
                    <AiFillGithub fill="var(--white-color)" />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div
                className={`app__work-tag app__flex ${
                  work.tags?.[1] === "Best" ? "highlight" : ""
                }`}
              >
                <p className="p-text">{work.tags.length > 1 ? work.tags[1] : work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Work;
