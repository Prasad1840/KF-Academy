import logo from "/assets/contact-us.jpg";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useZustandStore } from "./useZustandStore";

const zustand_topics = [
  {
    title: "Best Practices – Working with Zustand",
    children: [
      "Avoid Overusing Zustand",
      "Separate UI State from Business Logic",
      "Keep State in One Place, Not Spread Across Components",
      "Use Selectors and Equality Functions",
      "Create Store Slices (Modular Design)",
      "Handle Async Logic Within the Store",
      "Don’t Spread Zustand Across Multiple Files Too Early",
      "Write Tests for Store Logic",
      "Use DevTools and Middleware Sparingly",
    ],
  },
  {
    title: "Training Material – Zustand Documentation",
    children: [],
  },
];


const ZustandSidebar = ({ onImageClick }: { onImageClick: () => void }) => {
  const selected = useZustandStore((state) => state.selected);
  const setSelected = useZustandStore((state) => state.setSelected);
  const setTitle = useZustandStore((state) => state.setTitle);

  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    "Best Practices – Working with Zustand": false,
  });

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <aside className="fixed top-0 left-0 w-1/4 min-h-screen bg-[linear-gradient(rgb(6,51,42),rgb(0,99,79))] shadow-md">
      <motion.div
        layoutId="logo-image"
        className="relative cursor-pointer flex justify-center mb-6"
        onClick={onImageClick}
      >
        <img src={logo} alt="Logo" className="" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80">
          <h2 className="text-5xl text-white font-bold tracking-tight w-[90%] mt-9 mb-6">
            ZUSTAND
          </h2>
        </div>
      </motion.div>

      <div className="relative w-full max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-teal-700 scrollbar-track-transparent">
        <ul className="text-sm font-semibold text-gray-300">
          {zustand_topics.map(({ title, children }) => (
            <li key={title}>
              <div
                onClick={() => {
                  toggleSection(title);
                  setTitle(title);
                }}
                className={`cursor-pointer px-6 py-3.5 w-full block transition-colors duration-200 ${
                  selected.title === title
                    ? "bg-[rgb(6,51,42)] text-white font-bold text-base"
                    : "hover:bg-teal-700"
                }`}
              >
                <span>{title}</span>
                {children.length > 0 && openSections[title] && (
                  <span className="text-white text-xs ml-2">▼</span>
                )}
              </div>

              <AnimatePresence initial={false}>
                {children.length > 0 && openSections[title] && (
                  <motion.ul
                    key="open"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-6 border-l border-teal-500 pl-4"
                  >
                    {children.map((child) => (
                      <li key={child}>
                        <a
                          href={`#${child
                            .replace(/\s+/g, "-")
                            .replace(/[:()*]/g, "")
                            .toLowerCase()}`}
                          onClick={() => setSelected({ title, child })}
                          className={`cursor-pointer px-6 py-3 w-full block transition-colors duration-200 ${
                            selected.child === child
                              ? "bg-[rgb(6,51,42)] text-white font-bold text-base"
                              : "hover:bg-teal-700"
                          }`}
                        >
                          {child}
                        </a>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default ZustandSidebar;
