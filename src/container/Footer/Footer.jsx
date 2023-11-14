import React, { useRef } from "react";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import { Tooltip as ReactTooltip } from "react-tooltip";
import emailjs from "@emailjs/browser";

import "./Footer.scss";

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
    e.preventDefault();

    emailjs
      .sendForm(
        "service_08e1xne",
        "template_sep0juh",
        form.current,
        "U_tYrZipx3KkdmfHb"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div id="contact">
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        {["mobile", "email"].map((el) => {
          return (
            <div
              key={el}
              className="app__footer-card"
              data-tooltip-content="Tap to copy"
              data-tooltip-id="tooltip"
              onClick={(e) => copyText(e)}
            >
              <img
                src={images[el === "mobile" ? "mobile" : "email"]}
                alt={el}
              />
              <h6 className="p-text btn-copy">
                <p>
                  {el === "mobile" ? "91+ 9870699786" : "ayanmsn07@gmail.com"}
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

      <form
        ref={form}
        onSubmit={sendEmail}
        className="app__footer-form app__flex"
      >
        <div className="app__flex">
          <input
            className="p-text"
            type="text"
            placeholder="Your Name"
            name="from_name"
          />
        </div>
        <div className="app__flex">
          <input
            className="p-text"
            type="email"
            placeholder="Your Email"
            name="from_email"
          />
        </div>
        <div>
          <textarea
            className="p-text"
            placeholder="Your Message"
            name="message"
            style={{ resize: "none", height: "100px" }}
          />
        </div>
        <button type="submit" className="p-text">
          Send message
        </button>
      </form>

      <p className="copyright">Created by Ayan Nagori with 💖 @2023</p>
    </div>
  );
};

export default Footer;
