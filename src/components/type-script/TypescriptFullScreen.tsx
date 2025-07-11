import logo from "/assets/contact-us.jpg"; // Replace with background image if needed
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useTypescriptStore } from "./useTypescriptStore";


const TypescriptFullscreen = ({ onClose }: { onClose: () => void }) => {
  const selected = useTypescriptStore((state) => state.selected);
  const setSelected = useTypescriptStore((state) => state.setSelected);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const handleClick = () => {
    if (selected.title === 'python') {
      setSelected({
        title: "Best Practices : TypeScript Declaration Files",
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
          <h1 className="italic text-7xl text-[#05C690]  font-bold tracking-tight mb-6">
            TYPESCRIPT
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
            <strong className="font-medium">TypeScript</strong> is a statically typed superset of JavaScript developed and maintained by Microsoft. It adds optional static typing, interfaces, access modifiers, and powerful tooling support to the JavaScript language. TypeScript code is compiled into plain JavaScript, making it fully compatible with any browser or JavaScript runtime.
          </p>

          <p>
            By introducing types, TypeScript helps developers catch errors at compile time instead of runtime, making applications more robust and easier to maintain. It supports modern ECMAScript features and provides intelligent code completion, refactoring capabilities, and type checking, which improves overall productivity and developer experience.
          </p>

          <p>
            TypeScript is especially popular in large-scale applications and team-based development, where maintaining consistent types and contracts between components and services is critical. It integrates seamlessly with modern frameworks such as Angular, React, and Node.js, and is supported by IDEs like Visual Studio Code for a rich development experience.
          </p>

          <p className="font-bold text-2xl text-gray-900">
            Its features include:
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>Interfaces and type aliases for defining structured data</li>
            <li>Enums, unions, generics, and advanced type inference</li>
            <li>Support for object-oriented principles like classes, inheritance, and access modifiers</li>
            <li>Compatibility with existing JavaScript libraries through declaration files</li>
          </ul>

        </div>
      </div>

      
    </motion.div>
  );
};

export default TypescriptFullscreen;

