import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import TypescriptFullscreen from "../../components/type-script/TypescriptFullScreen";
import TypescriptSidebar from "../../components/type-script/TypescriptSidebar";
import TypescriptContent from "../../components/type-script/TypescriptContent";


const TypescriptTraining: React.FC = ()=> {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div >
    {!isExpanded && <div className="relative flex h-full">
      <TypescriptSidebar onImageClick={() => setIsExpanded(true)} />
      <main className="ml-[25%] p-8 w-full min-h-screen bg-gray-50 overflow-y-auto">
        <TypescriptContent />
      </main>
    </div>}
      <AnimatePresence>
        {isExpanded && <TypescriptFullscreen onClose={() => setIsExpanded(false)} />}
      </AnimatePresence>
    </div>
  );
};

export default TypescriptTraining;