import logo from "/assets/contact-us.jpg"; // Replace with background image if needed
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useFastApiStore } from "./useFastApiStore";


const FastApiFullscreen = ({ onClose }: { onClose: () => void }) => {
  const selected = useFastApiStore((state) => state.selected);
  const setSelected = useFastApiStore((state) => state.setSelected);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const handleClick = () => {
    if (selected.title === 'python') {
      setSelected({
        title: "Best Practices : Thinking in FastAPI",
        child: "",
      });
    }
    onClose();
  };


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
          <h1 className="italic text-7xl text-white  font-bold tracking-tight mb-6">FAST API</h1>
          <button
            className="bg-white text-black px-6 py-2 rounded-full font-semibold"
            onClick={handleClick}
          >
            {selected.title === 'python' ? "Start Course" : "Resume Course"}
          </button>
          <p className="mt-4 text-white">Scroll down for details ⬇️</p>
        </div>
      </motion.div>

      {/* Content below so it scrolls */}
      <div className="w-full flex justify-center px-4 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-4xl w-full px-16 py-12 text-black leading-relaxed space-y-6 text-xl">
            <p>
                <strong className="font-medium">FastAPI</strong> is a modern, asynchronous web framework for building APIs with Python 3.7+ based on standard Python type hints. It's built on top of Starlette (for the web parts) and Pydantic (for data validation).
            </p>

            <p>
                FastAPI offers <b>automatic generation of interactive documentation</b> (Swagger UI and ReDoc) and supports both REST and WebSocket endpoints. Its asynchronous capabilities make it ideal for <b>high-performance APIs and microservices</b>, allowing seamless integration with modern Python libraries and tools.
            </p>

            <p className="font-bold text-2xl text-gray-900">
                Key benefits of FastAPI:
            </p>

            <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Extremely fast (comparable to Node and Go)</li>
                <li>Auto documentation with OpenAPI</li>
                <li>Data validation using Python typing</li>
                <li>Dependency injection system</li>
                <li>OAuth2 and JWT ready</li>
            </ul>

            <p>
                In short, FastAPI empowers developers to build robust, efficient, and well-documented APIs with ease, making it a strong choice for modern web development.
            </p>
            </div>
            </div>
      
    </motion.div>
  );
};

export default FastApiFullscreen;

