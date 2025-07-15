import logo from "/assets/contact-us.jpg"; 
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { usecicdapiStore } from "./useCICDStore";

const cicdfastapi_topics = [
    {
        title: "Best Practices : Thinking in CI/CD for FastAPI",
        children: [
        " Dockerize your FastAPI app",
        " Use Gunicorn + Uvicorn Workers in Production",
        "Reverse Proxy with Nginx",
        "Use Environment Variables",
        "Automate Deployment with GitHub Actions or GitLab CI",
        "Rollbacks",
        ],
    },
    {
        title: "Training Material – CI/CD for Fast API Learning Guide",
        children: [],
    },
];


const CICDSidebar = ({onImageClick}: {onImageClick: () => void}) => {
    const selected = usecicdapiStore((state) => state.selected);
    const setSelected = usecicdapiStore((state) => state.setSelected);
    const setTitle = usecicdapiStore((state) => state.setTitle);
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({
        "Best Practices : Thinking in CI/CD for FastAPI": false, // default open
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
                <img src={logo} alt="Logo" className=""/>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80">
                    <h2 className="text-5xl text-white  font-bold tracking-tight w-[90%] mt-9 mb-6">
                        CI / CD for Fast API
                    </h2>
                    {/* <div className="w-[90%] bg-gray-600 h-0.75 overflow-hidden">
                        <motion.div
                            className="h-full bg-gray-200"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        />
                    </div>
                    <p className="text-gray-100 text-sm mt-2">
                        {progress}% completed
                    </p> */}
                </div>
            </motion.div>

        <div className="relative w-full max-h-[80vh] overflow-y-auto">
            <ul className="text-sm font-semibold text-gray-300">
            {cicdfastapi_topics.map(({ title, children }) => (
                <li key={title}>
                <div
                    onClick={() =>{
                        toggleSection(title);
                        setTitle(title)
                    }
                    }
                    className={`cursor-pointer px-6 py-3.5 w-full block transition-colors duration-200 ${
                    selected.title === title
                        ? "bg-[rgb(6,51,42)] text-white font-bold text-base"
                        : "hover:bg-teal-700"
                    }`}
                >
                    <span>{title}</span>
                    {/* Show ▼ when open, nothing when closed */}
                    {children.length > 0 && openSections[title] && (
                        <span className="text-white text-xs ml-2">▼</span>
                    )}
                </div>

                {/* Dropdown Content */}
                <AnimatePresence initial={false}>
                {children.length > 0 && openSections[title] && (
                    <motion.ul
                    key={openSections[title] ? "open" : "closed"}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="ml-6 border-l border-teal-500 pl-4"
                    >
                    {children.map((child) => (
                        <li key={child}>
                        <a
                            href={`#${child.replace(/\s+/g, '-').replace(/[:]/g, '').toLowerCase()}`}
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

export default CICDSidebar;
