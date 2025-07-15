import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, RotateCcw, ChevronDown, ChevronUp, X } from "lucide-react";
import { usePodFilterStore } from "../store/usePodFilterStore";
// interface SidebarProps {
//   filters: string[];
//   toggleFilter: (filter: string) => void;
//   resetFilters: () => void;
// }


const Sidebar: React.FC = () => {
  const selectedPod = usePodFilterStore((state) => state.selectedPod);
  const setSelected = usePodFilterStore((state) => state.setSelected);
  const clearSelectedPod = usePodFilterStore((state) => state.clearSelectedPod);
  const [isPodOpen] = useState(true);

  const sidebarVariants = {
    open: { x: 0, opacity: 1, transition: { duration: 0.3 } },
    closed: { x: "-100%", opacity: 0, transition: { duration: 0.3 } },
  };

  const filterItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const podList = [
    "POD 1",
    "POD 5",
    "POD 10",
    "POD - A&S",
    "POD - SQA",
    "KF One - KF Insights / KF Listen / EDW",
    "Data Management",
    "Work Measurement",
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial="closed"
        animate="open"
        exit="closed"
        variants={sidebarVariants}
        className="fixed inset-y-0 left-0 bg-[linear-gradient(rgb(6,51,42),rgb(0,99,79))] shadow-lg p-6 pt-[140px] md:pt-6 z-30 md:static md:block md:shadow-none 
          w-80 overflow-y-auto max-h-[calc(100vh-100px)] rounded-r-lg text-white"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-[#009B77] flex items-center gap-2">
            <Filter className="text-[#05C690]" size={20} /> Filters
          </h2>
          <button
            onClick={clearSelectedPod}
            className="flex items-center gap-1 text-sm text-gray-300 hover:text-[#05C690] transition-colors"
          >
            <RotateCcw size={16} /> Reset
          </button>
        </div>

        {/* POD SPECIFIC */}
        <div
          className="flex justify-between items-center cursor-pointer mb-2"
          
        >
          <h3 className="font-bold">POD SPECIFIC</h3>
          
        </div>

        <AnimatePresence>
          {isPodOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-2 flex flex-col gap-2 italic text-white tracking-tight mb-6"
            >
              {podList.map((pod, index) => (
        <motion.label
          key={pod}
          onClick={() => setSelected(pod)}
          className={`flex items-center gap-2 cursor-pointer px-4 py-2 rounded-md transition-colors duration-200 ${
            selectedPod === pod 
              ? "bg-[#05C690]/30 text-[#05C690] font-semibold"
              : "hover:bg-white/10"
          }`}
          variants={filterItemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.05 * index }}
        >
          <span>{pod}</span>
        </motion.label>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default Sidebar;
