import React, { useState, useEffect } from "react";

// import Tooltip from "react-power-tooltip";
import { motion } from "framer-motion";
import { data } from "../../data/skills-data";
import { images } from "../../constants";
import "./Skills.scss";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(data);
  }, []);

  return (
    <section className="app__skills relative h-[105vh]" id="skills">
      <motion.div
        whileInView={{ height: ["100%", "0%"] }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="absolute bottom-0 left-0 z-10 h-full w-full bg-[#edf2f8]"
        viewport={{ once: true, amount: "0.7" }}
      ></motion.div>

      <h2 className="head-text">Skills & Experience</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list" key="skills">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={images[skill.imgName]} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
