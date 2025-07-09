import logo from "/assets/contact-us.jpg"; // Replace with background image if needed
import { motion } from "framer-motion";

const FullscreenImage = ({ onClose }: { onClose: () => void }) => {
  return (
    <motion.div
      className="relative w-full overflow-hidden"
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

      {/* Content below so it scrolls */}
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-2xl text-center px-8 py-16 bg-white text-black">
          <h2 className="text-2xl font-bold mb-4">Course Details</h2>
          <p className="mb-2">This course covers fundamental principles of building secure systems by design.</p>
          <p className="mb-2">You will learn about privacy frameworks, threat modeling, and mitigation strategies.</p>
          <p className="mb-2">Scroll for more modules and interactive content below.</p>
          {/* Add more content to allow full scrolling experience */}
          <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis mi condimentum, consectetur elit nec, rutrum diam. Cras consequat tortor libero, at iaculis magna venenatis quis. Nullam vitae mauris purus. Curabitur finibus magna nec nulla accumsan consectetur. Sed nec dolor felis. Praesent fermentum sagittis mi nec tincidunt. Mauris id lorem in enim fringilla faucibus non in erat. In at posuere urna. Aliquam dui massa, tincidunt eget fermentum at, cursus vel erat. Pellentesque vulputate urna consequat nisl ornare, ut facilisis nibh lobortis. </p>
          <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis mi condimentum, consectetur elit nec, rutrum diam. Cras consequat tortor libero, at iaculis magna venenatis quis. Nullam vitae mauris purus. Curabitur finibus magna nec nulla accumsan consectetur. Sed nec dolor felis. Praesent fermentum sagittis mi nec tincidunt. Mauris id lorem in enim fringilla faucibus non in erat. In at posuere urna. Aliquam dui massa, tincidunt eget fermentum at, cursus vel erat. Pellentesque vulputate urna consequat nisl ornare, ut facilisis nibh lobortis. </p>
        </div>
      </div>
    </motion.div>
  );
};

export default FullscreenImage;

