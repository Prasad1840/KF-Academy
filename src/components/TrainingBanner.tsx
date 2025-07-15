import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="relative h-screen overflow-hidden flex">
      {/* Background Image with Zoom Animation */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/assets/Mohammad.png')", // Replace with your image
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Spacer (left side) to expose image */}
      <div className="w-3/2 z-10" />

      {/* White Stripe Sliding Down */}
      <motion.div
        initial={{ y: '-100%' }}
        animate={{ y: 0 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="relative z-10 w-[100%] h-[165%] flex items-center rotate-[30deg] bg-white opacity-40 transform -skew-x-6 translate-x-39 shadow-xl origin-top-right"
    >
        <div className="transform -rotate-[30deg]  pl-10 pr-6 max-w-md">
          <br />
          <br />
          <br />
          <br />
          <br /><br /><br /><br /><br></br><br /><br /><br />
  <h1 className="md:text-8xl inline-block skew-x-[-10deg] font-bold text-emerald-500 leading-tight">
    Training
  </h1>

  <p className="mt-4 text-base text-black font-medium cursor-pointer hover:text-emerald-900 transition">
    Access structured training modules, explore project-specific skill paths, and learn at your pace, all aligned with Korn Ferry’s standards. Begin your learning journey with clarity and confidence&nbsp;
    <span
      onClick={() => navigate('/training')}
      className="text-emerald-800 underline font-bold hover:text-emerald-900 transition"
    >
      here
    </span>.
  </p>
</div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
