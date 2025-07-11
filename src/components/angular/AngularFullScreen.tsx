import logo from "/assets/contact-us.jpg"; // Replace with background image if needed
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAngularStore } from "./useAngularStore";


const AngularFullscreen = ({ onClose }: { onClose: () => void }) => {
  const selected = useAngularStore((state) => state.selected);
  const setSelected = useAngularStore((state) => state.setSelected);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const handleClick = () => {
    if (selected.title === 'python') {
      setSelected({
        title: "Best Practices : Angular Style Guide",
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
          <h1 className="italic text-7xl text-white  font-bold tracking-tight mb-6">
            ANGULAR
          </h1>
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
            <strong className="font-medium">Angular</strong> is a comprehensive and powerful open-source web application framework developed and maintained by Google. It is designed to build dynamic, large-scale, and enterprise-grade single-page applications (SPAs) with maintainability and scalability in mind.
          </p>

          <p>
            Unlike libraries that focus solely on UI rendering, Angular provides a complete development ecosystem. It includes tools for routing, form validation, HTTP communication, state management, testing, and more—all integrated and maintained within the same framework.
          </p>

          <p>
            Angular uses TypeScript as its primary programming language, allowing developers to benefit from static typing, modern JavaScript features, and enhanced IDE support. The framework adopts a component-based architecture, where UIs are developed by composing reusable building blocks (components), each with its own logic, styling, and template.
          </p>

          <p className="font-bold text-2xl text-gray-900">
            Other core features include:
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>
              A powerful dependency injection system that promotes clean separation of concerns.
            </li>
            <li>
              A CLI (Command Line Interface) for fast scaffolding, builds, and automation.
            </li>
            <li>
              Built-in support for two-way data binding and reactive programming using RxJS.
            </li>
            <li>
              Strong testing utilities integrated into its architecture from the start.
            </li>
          </ul>

          <p>
            Angular emphasizes modularity, productivity, and clean code practices, making it suitable for both individual developers and large teams working on complex applications.
          </p>
          
        </div>
      </div>

      
    </motion.div>
  );
};

export default AngularFullscreen;

