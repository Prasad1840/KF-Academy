import React, { useState } from "react";
import FullscreenImage from "../components/FullscreenImage";
import Sidebar from "../components/Sidebar";
import { AnimatePresence } from "framer-motion";

const Training: React.FC = ()=> {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="relative flex h-screen">
      <Sidebar onImageClick={() => setIsExpanded(true)} />
      <main className="flex-1 bg-gray-50 p-8">
        <h1 className="text-2xl font-bold mb-4">Training goals and expectations</h1>
        <p>This training exercise is for all developers and software engineers at Korn Ferry...</p>
      </main>

      <AnimatePresence>
        {isExpanded && <FullscreenImage onClose={() => setIsExpanded(false)} />}
      </AnimatePresence>
    </div>
  );
};

export default Training;