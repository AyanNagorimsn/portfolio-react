import { motion } from "framer-motion";

const HeroCenter = () => {
  return (
    <div className="creative Anton">
      <h1>
        <motion.div
          whileInView={{ height: ["100%", "0%"] }}
          transition={{
            duration: 0.6,
            ease: "easeIn",
            delay: 0.5,
          }}
          className="absolute bottom-0 left-0 z-10 h-full w-full bg-[#edf2f8]"
          viewport={{ once: true, amount: "all" }}
        ></motion.div>

        <div className="overflowHider">CREATIVE</div>
        <div className="overflowHider">DEVELOPER</div>
      </h1>

      <motion.img
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.4, delay: 2 }}
        viewport={{ once: true, amount: "all" }}
        src="https://res.cloudinary.com/jasuaje/image/upload/v1715387111/0bf6e60dfc83a40fd27549c98ac8a55f.png"
        alt="RingImage"
      />
    </div>
  );
};

export default HeroCenter;
