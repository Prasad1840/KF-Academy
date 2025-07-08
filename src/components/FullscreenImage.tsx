import logo from "/assets/contact-us.jpg"; // Replace with background image if needed
import { motion } from "framer-motion";

const FullscreenImage = ({ onClose }: { onClose: () => void }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-blue-600 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        layoutId="logo-image"
        className="relative w-full h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${logo})` }}
      >
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl font-bold mb-6">Security and Privacy by Design</h1>
          <button
            className="bg-white text-black px-6 py-2 rounded-full font-semibold"
            onClick={onClose}
          >
            Resume Course
          </button>
          <p className="mt-4 text-white">Scroll down for details ⬇️</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FullscreenImage;

