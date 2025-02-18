import { useEffect, useRef } from "react";

import { AnimatePresence } from "framer-motion";

const ScrollFitText = ({ currentSection }) => {
  const TextParentRef = useRef(null);
  return (
    <div className="pointer-events-none fixed bottom-0 left-0 z-[30] hidden h-screen w-full overflow-hidden bg-transparent opacity-5 md:flex">
      <div
        ref={TextParentRef}
        className="absolute bottom-0 left-0 mx-auto overflow-hidden"
      >
        <AnimatePresence>
          <span className="whitespace-nowrap text-center text-[7rem] font-bold uppercase leading-[0.8] text-secondary">
            {currentSection}
          </span>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ScrollFitText;
