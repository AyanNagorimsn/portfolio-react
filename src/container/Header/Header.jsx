import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";

import { hackerEffect } from "../../constants";
import HeroCenter from "../../components/HeroCenter";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  const name = useRef(null);
  const heading = useRef(null);
  const para1 = useRef(null);
  const para2 = useRef(null);
  const para3 = useRef();

  useEffect(() => {
    hackerEffect({ target: name?.current });
    hackerEffect({ target: heading?.current });
    hackerEffect({ target: para1?.current });
    hackerEffect({ target: para2?.current });
    hackerEffect({ target: para3?.current });
  }, []);

  return (
    <div className="app__header" id="home">
      <header className="app__flex">
        <HeroCenter />
        <motion.div
          className="app__header-info"
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="badge-cmp app-flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text" ref={heading} data-text="Hello, I'am">
                Hello, I'am
              </p>
              <h1
                className="head-text leading-none"
                ref={name}
                data-text="Ayan"
              >
                Ayan
              </h1>
            </div>
          </div>

          <div className="tag-cmp app-flex">
            <p ref={para1} className="p-text" data-text="Designer / UI-UX">
              Designer / UI-UX
            </p>
            <p ref={para2} className="p-text" data-text="Web Developer">
              Web Developer
            </p>
            <p ref={para3} className="p-text" data-text="FreeLancer">
              FreeLancer
            </p>
          </div>
        </motion.div>
        <motion.div
          variant={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles"
        >
          {[images.figma, images.react, images.sass].map((circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="circle" />
            </div>
          ))}
        </motion.div>
      </header>
    </div>
  );
};

export default Header;
