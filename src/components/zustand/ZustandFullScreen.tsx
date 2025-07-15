import logo from "/assets/contact-us.jpg"; // Replace with background image if needed
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useZustandStore } from "./useZustandStore";


const ZustandFullscreen = ({ onClose }: { onClose: () => void }) => {
  const selected = useZustandStore((state) => state.selected);
  const setSelected = useZustandStore((state) => state.setSelected);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const handleClick = () => {
    if (selected.title === 'python') {
      setSelected({
        title: "Best Practices – Working with Zustand",
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
            ZUSTAND
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
            <strong className="font-medium">Zustand</strong> is a minimalist, scalable, and intuitive state management library for React. Developed by the creators behind libraries like Jotai and React Three Fiber, Zustand stands out for being boilerplate-free, middleware-friendly, and extremely easy to integrate, even into complex applications.
          </p>

          <p>
            It does not rely on React’s Context API or Redux-style reducers. Instead, it allows developers to define a central state using plain JavaScript/TypeScript and access it with a simple hook (<code>useStore</code>). It is highly performant, supports selective re-renders through selectors, and has zero dependencies.
          </p>

          <p>
            Zustand works perfectly with both small-scale and complex state needs — from global app state (like user sessions or theme) to intricate UI behaviors (like modals, filters, or toggles). It also supports React Server Components and concurrent rendering, making it future-ready.
          </p>

          <p className="font-bold text-2xl text-gray-900">
            Its features include:
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>Zero-config store creation using <code>create()</code> from Zustand</li>
            <li>Support for selectors and shallow comparison to avoid unnecessary renders</li>
            <li>Simple middleware support (DevTools, persistence, logging, immutability)</li>
            <li>Works with both JavaScript and TypeScript without additional boilerplate</li>
          </ul>


        </div>
      </div>

      
    </motion.div>
  );
};

export default ZustandFullscreen;

