import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ZustandFullscreen from "../../components/zustand/ZustandFullScreen";
import ZustandSidebar from "../../components/zustand/ZustandSidebar";
import ZustandContent from "../../components/zustand/ZustandContent";


const ZustandTraining: React.FC = ()=> {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div >
    {!isExpanded && <div className="relative flex h-full">
      <ZustandSidebar onImageClick={() => setIsExpanded(true)} />
      <main className="ml-[25%] p-8 w-full min-h-screen bg-gray-50 overflow-y-auto">
        <ZustandContent />
      </main>
    </div>}
      <AnimatePresence>
        {isExpanded && <ZustandFullscreen onClose={() => setIsExpanded(false)} />}
      </AnimatePresence>
    </div>
  );
};

export default ZustandTraining;