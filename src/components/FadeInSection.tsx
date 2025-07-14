// FadeInSection.tsx
import { motion } from "framer-motion";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const FadeInSection: React.FC<Props> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}     // Start faded out & moved down
      whileInView={{ opacity: 1 }}  // Animate to visible & original position
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }} // Animate only once when 20% visible
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
