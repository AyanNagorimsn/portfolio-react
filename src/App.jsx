import "./App.scss";

import { Header, About, Work, Skills, Footer } from "./container";
import { Navbar, ScrollFitText } from "./components";

import { useEffect, useRef, useState } from "react";

import { ReactLenis } from "@studio-freight/react-lenis";

import { useInView } from "framer-motion";

const App = () => {
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const skillsRef = useRef(null);
  const footerRef = useRef(null);

  const isHeaderInView = useInView(headerRef, { amount: 0.2 });
  const isAboutInView = useInView(aboutRef, { amount: 0.2 });
  const isWorkInView = useInView(workRef, { amount: 0.2 });
  const isSkillsInView = useInView(skillsRef, { amount: 0.2 });
  const isFooterInView = useInView(footerRef, { amount: 0.2 });

  useEffect(() => {
    if (!isHeaderInView) return;
    setCurrentSection("Header");
  }, [isHeaderInView]);

  useEffect(() => {
    if (!isAboutInView) return;
    setCurrentSection("About");
  }, [isAboutInView]);
  useEffect(() => {
    if (!isWorkInView) return;
    setCurrentSection("Work");
  }, [isWorkInView]);
  useEffect(() => {
    if (!isSkillsInView) return;
    setCurrentSection("Skills");
  }, [isSkillsInView]);
  useEffect(() => {
    if (!isFooterInView) return;
    setCurrentSection("Contact");
  }, [isFooterInView]);

  const [currentSection, setCurrentSection] = useState("Header");

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1, smoothTouch: true }}>
      <ScrollFitText currentSection={currentSection} />
      <div className="app">
        <Navbar />

        <div ref={headerRef}>
          <Header />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={workRef}>
          <Work />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <div ref={footerRef}>
          <Footer />
        </div>
      </div>
    </ReactLenis>
  );
};

export default App;
