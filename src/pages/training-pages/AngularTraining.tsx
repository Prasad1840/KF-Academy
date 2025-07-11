import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import AngularFullscreen from "../../components/angular/AngularFullScreen";
import AngularSidebar from "../../components/angular/AngularSidebar";
import AngularContent from "../../components/angular/AngularContent";


const AngularTraining: React.FC = ()=> {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div >
    {!isExpanded && <div className="relative flex h-full">
      <AngularSidebar onImageClick={() => setIsExpanded(true)} />
      <main className="ml-[25%] p-8 w-full min-h-screen bg-gray-50 overflow-y-auto">
        <AngularContent />
      </main>
    </div>}
      <AnimatePresence>
        {isExpanded && <AngularFullscreen onClose={() => setIsExpanded(false)} />}
      </AnimatePresence>
    </div>
  );
};

export default AngularTraining;