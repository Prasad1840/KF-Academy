import React, { useState } from "react";
import FastApiScreen from "../../components/fastapi/FastApiFullScreen";
import FastApiSidebar from "../../components/fastapi/FastApiSidebar";
// import TrainingContent from "../components/TrainingContent";
import { AnimatePresence } from "framer-motion";
import FastApiContent from "../../components/fastapi/FastApiContent";


const FastApiTraining: React.FC = ()=> {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div >
    {!isExpanded && <div className="relative flex h-full">
      <FastApiSidebar onImageClick={() => setIsExpanded(true)} />
      <main className="ml-[25%] p-8 w-full min-h-screen bg-gray-50 overflow-y-auto">
        <FastApiContent />
      </main>
    </div>}
      <AnimatePresence>
        {isExpanded && <FastApiScreen onClose={() => setIsExpanded(false)} />}
      </AnimatePresence>
    </div>
  );
};

export default FastApiTraining;