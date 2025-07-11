import React, { useState } from "react";
import ReactFullscreen from "../../components/react/ReactFullScreen";
import ReactSidebar from "../../components/react/ReactSidebar";
// import TrainingContent from "../components/TrainingContent";
import { AnimatePresence } from "framer-motion";
import ReactContent from "../../components/react/ReactContent";


const ReactTraining: React.FC = ()=> {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div >
    {!isExpanded && <div className="relative flex h-full">
      <ReactSidebar onImageClick={() => setIsExpanded(true)} />
      <main className="ml-[25%] p-8 w-full min-h-screen bg-gray-50 overflow-y-auto">
        <ReactContent />
        {/* <TrainingContent topic={selectedTopic} /> */}
      </main>
    </div>}
      <AnimatePresence>
        {isExpanded && <ReactFullscreen onClose={() => setIsExpanded(false)} />}
      </AnimatePresence>
    </div>
  );
};

export default ReactTraining;