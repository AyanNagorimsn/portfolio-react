import React, { useRef, useState } from "react";
import { images } from "../../constants";
import { Tooltip as ReactTooltip } from "react-tooltip";
import emailjs from "@emailjs/browser";

import { motion } from "framer-motion";

import "./Footer.scss";
import Modal from "../../components/Model";

const Footer = () => {
  const copyText = function (e) {
    let parentDiv = e.currentTarget;
    let button = parentDiv.children[1];
    let textArea = document.createElement("textarea");
    let ptags = [...button.children];

    // copy text
    textArea.setAttribute("readonly", "");
    textArea.style.position = "absolute";
    textArea.style.top = "0";
    textArea.style.opacity = "0";
    textArea.value = button.textContent.replace("Text Copied!", "");
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");

    // add particle
    let lottie = parentDiv.children[2];
    lottie.play();

    // toggle between info to text copied
    ptags.forEach((el) => el.classList.add("active"));

    // prevent spam
    parentDiv.style.pointerEvents = "none";

    setTimeout(() => {
      ptags.forEach((el) => el.classList.remove("active"));

      parentDiv.style.pointerEvents = "all";
      lottie.stop();
    }, 2500);
  };

  const form = useRef();

  const sendEmail = (e) => {
    setIsOpen(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_z2ha80b",
        "template_tmob5mj",
        form.current,
        "aJLGTGV4AsVti6LM_",
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        },
      );

    e.target.reset();
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="contact" style={{ paddingTop: "6rem" }}>
      <h2 className="head-text relative">
        <motion.div
          whileInView={{ height: ["100%", "0%"] }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="absolute bottom-0 left-0 z-10 h-full w-full bg-[#edf2f8]"
          viewport={{ once: true, amount: "all" }}
        ></motion.div>
        Take a coffee & chat with me
      </h2>

      <div className="app__footer-cards relative">
        <motion.div
          whileInView={{ height: ["100%", "0%"] }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="absolute bottom-0 left-0 z-10 h-full w-full bg-[#edf2f8]"
          viewport={{ once: true, amount: "all" }}
        ></motion.div>

        {["mobile", "email"].map((el) => {
          return (
            <div
              key={el}
              className="app__footer-card"
              data-tooltip-content="Tap to copy"
              data-tooltip-id="tooltip"
              onClick={(e) => copyText(e)}
            >
              <img src={images[el]} alt={el} />
              <h6 className="p-text btn-copy">
                <p>
                  {el === "mobile"
                    ? "91+ 9870699786"
                    : "ayannagorimsn@gmail.com"}
                </p>
                <span>Text Copied!</span>
              </h6>

              <lottie-player
                src="https://lottie.host/ba5f1b29-c134-49e6-92a5-0c3c0138ac41/1fZfylyQsU.json"
                style={{
                  height: "100%",
                  width: "100%",
                  transform: "scale(2.6) translateX(-50px)",
                }}
              ></lottie-player>

              <h4>COPY</h4>
            </div>
          );
        })}
        <ReactTooltip
          styles={{ position: "absolute", top: 0, left: 0 }}
          id="tooltip"
        ></ReactTooltip>
      </div>

      <motion.form
        whileInView={{ opacity: [0, 1], y: [-50, 0] }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        viewport={{ once: true, amount: "all", margin: "100px" }}
        ref={form}
        onSubmit={sendEmail}
        className="app__footer-form app__flex relative opacity-0"
      >
        <div className="app__flex">
          <input
            required
            className="p-text"
            type="text"
            placeholder="Full Name"
            name="from_name"
          />
        </div>
        <div className="app__flex">
          <input
            required
            className="p-text"
            type="email"
            placeholder="Your Email"
            name="from_email"
          />
        </div>
        <div>
          <textarea
            required
            className="p-text"
            placeholder="Your Message"
            name="message"
          />
        </div>
        <button type="submit" className="p-text">
          Send message
        </button>
        <Modal setIsOpen={setIsOpen} isOpen={isOpen} />
      </motion.form>

      <p className="copyright">
        {new Date().getFullYear()} &copy; Created by Ayan Nagori with 💖
      </p>
    </div>
  );
};

export default Footer;
