import React, { useState } from "react";
import CICDFullScreen from "../../components/ci-cd-fastapi/CICDFullScreen";
import CICDSidebar from "../../components/ci-cd-fastapi/CICDSidebar";
import { AnimatePresence } from "framer-motion";
import CICDContent from "../../components/ci-cd-fastapi/CICDContent";


const CICDFastApiTraining: React.FC = ()=> {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div >
    {!isExpanded && <div className="relative flex h-full">
      <CICDSidebar onImageClick={() => setIsExpanded(true)} />
      <main className="ml-[25%] p-8 w-full min-h-screen bg-gray-50 overflow-y-auto">
        <CICDContent />
      </main>
    </div>}
      <AnimatePresence>
        {isExpanded && <CICDFullScreen onClose={() => setIsExpanded(false)} />}
      </AnimatePresence>
    </div>
  );
};

export default CICDFastApiTraining;