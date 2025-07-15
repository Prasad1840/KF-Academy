// PodsOverview.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pods = [
  {
    name: "POD 1",
    manager: "Ramesh Mallareddygarri",
    leads: ["Pankaj Gore", "Neha Kumari"],
    focus:
      "Platform and architecture development. Responsible for Multi-tenant Framework, Elastic Search, Business Notification Framework, etc.",
    tech:
      "React 18, Vite, Zustand, Tailwind CSS, Nest.js, MongoDB, PostgreSQL, AWS, Docker, Kubernetes",
  },
  {
    name: "POD 2",
    manager: "Amit Sharma",
    leads: ["Sneha Rane", "Tarun Gupta"],
    focus: "Frontend enablement and UI/UX systems. Maintains design systems and shared component libraries.",
    tech: "React 18, TypeScript, Storybook, Tailwind CSS",
  },
  {
    name: "POD 3",
    manager: "Meera Patel",
    leads: ["Rajesh Iyer"],
    focus: "Data engineering, ETL pipelines, and analytics dashboards.",
    tech: "Python, Spark, AWS Glue, Tableau, PostgreSQL",
  },
  {
    name: "POD 4",
    manager: "Suresh Verma",
    leads: ["Divya Menon", "Harshit Agarwal"],
    focus: "AI/ML models for predictive analytics and personalization.",
    tech: "TensorFlow, PyTorch, Scikit-learn, FastAPI",
  },
  {
    name: "POD 5",
    manager: "Priya Nair",
    leads: ["Deepak Singh"],
    focus: "DevOps, CI/CD, and infrastructure automation.",
    tech: "AWS, Docker, Jenkins, Terraform, Kubernetes",
  },
];

const PodsOverview: React.FC = () => {
  const [hoveredPod, setHoveredPod] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12">
      <h1 className="text-4xl font-bold text-green-700 mb-10">POD Overview</h1>

      <div className="flex space-x-4">
        {pods.map((pod, index) => (
          <div
            key={index}
            className="bg-green-100 text-green-900 px-6 py-3 rounded-lg shadow cursor-pointer hover:bg-green-200 transition"
            onMouseEnter={() => setHoveredPod(index)}
            onMouseLeave={() => setHoveredPod(null)}
          >
            {pod.name}
          </div>
        ))}
      </div>

      <AnimatePresence>
        {hoveredPod !== null && (
          <motion.div
            key={hoveredPod}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mt-6 max-w-4xl bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-600"
          >
            <h2 className="text-2xl font-semibold text-green-700 mb-2">
              {pods[hoveredPod].name}
            </h2>
            <p className="text-green-800">
              <span className="font-semibold">Manager:</span>{" "}
              {pods[hoveredPod].manager}
              <br />
              <span className="font-semibold">Leads:</span>{" "}
              {pods[hoveredPod].leads.join(", ")}
              <br />
              <span className="font-semibold">Focus:</span> {pods[hoveredPod].focus}
              <br />
              <span className="font-semibold">Tech Stack:</span> {pods[hoveredPod].tech}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PodsOverview;
