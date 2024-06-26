import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";

const Modal = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center !bg-transparent backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg cursor-default rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 p-6 shadow-xl max-w-[97]"
          >
            <FiAlertCircle className="absolute -left-24 -top-24 -z-[1] rotate-12 stroke-white/30 text-[250px]" />
            <div className="rounded-lg bg-white p-2">
              <FiAlertCircle className="stroke-secondary mx-auto mb-3 h-12 text-4xl" />
              <h3 className="mb-3 text-center text-3xl font-bold">
                Thank You for Reaching Out!
              </h3>
              <p className="mb-4 px-4 text-center">
                Thank you for contacting me! I appreciate your interest and will
                get back to you as soon as possible. Have a great day!
              </p>
              <button onClick={() => setIsOpen(false)} className="w-full">
                Return to Portfolio
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
