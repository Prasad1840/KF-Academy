import logo from "/assets/contact-us.jpg"; // Replace with background image if needed
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useReactStore } from "./useReactStore";


const ReactFullscreen = ({ onClose }: { onClose: () => void }) => {
  const selected = useReactStore((state) => state.selected);
  const setSelected = useReactStore((state) => state.setSelected);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const handleClick = () => {
    if (selected.title === 'python') {
      setSelected({
        title: "Best Practices : Thinking in React",
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
          <h1 className="italic text-7xl text-white  font-bold tracking-tight mb-6">REACT JS</h1>
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
        <div className="max-w-4xl w-full px-16 py-12  text-black leading-relaxed space-y-6 text-xl ">

          <p>
            <strong className="font-medium">React JS</strong> is a powerful and flexible JavaScript library developed and maintained by Meta (formerly Facebook). It is widely used for building fast, dynamic, and scalable user interfaces, especially for single-page applications (SPAs) where the content updates without reloading the entire page.
          </p>

          <p>
            React follows a declarative programming style, which means developers describe what the UI should look like at any point in time, and React takes care of efficiently updating the DOM whenever the underlying data changes. This approach makes code easier to predict and debug.
          </p>

          <p>
            At the core of React is its component-based architecture. Developers build UIs by composing small, independent, and reusable components — such as buttons, forms, headers, and custom widgets. Each component manages its own logic and state, and they can be combined to form complex user interfaces in a highly maintainable way.
          </p>

          <p className="font-bold text-2xl text-gray-900">
            React is also designed for performance and scalability:
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>It uses a virtual DOM to optimize rendering.</li>
            <li>It promotes unidirectional data flow, ensuring predictable state changes.</li>
            <li>It integrates well with TypeScript and modern tooling like Vite, Next.js, and more.</li>
          </ul>

          <p>
            In short, React enables developers to create modular, efficient, and user-friendly web applications that scale from small widgets to large enterprise-grade systems.
          </p>
        </div>
      </div>

      
    </motion.div>
  );
};

export default ReactFullscreen;

