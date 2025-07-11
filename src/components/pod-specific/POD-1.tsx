// Pod1Layout.tsx

import React from "react";
import FadeInSection from "../FadeInSection";

const Pod1Layout: React.FC = () => {
  return (
    <FadeInSection>
    <div className="min-h-screen bg-gray-200 ">
      {/* Top Half Image */}
      <div
        className="h-[70vh] w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/Pod1 images.jpeg')", // Replace with your own
        }}
      />

      {/* Floating White Box Overlapping */}
      <FadeInSection>
      <div className="max-w-5xl mx-auto -mt-32 bg-gray-200 rounded-xl shadow-xl p-10 z-10 relative">
  <h1 className="text-4xl sm:text-5xl font-semibold text-green-700 text-left mb-4">
    POD 1 Overview
  </h1>

  <div className="text-green-800 text-base mb-6 leading-relaxed">
    <p className="mb-4">
      <span className="font-semibold text-green-600">Korn Ferry Manager:</span> Ramesh Mallareddygarri<br />
      <span className="font-semibold text-green-600">Internal Team Leads:</span> Pankaj Gore, Neha Kumari
    </p>

    <p className="mb-4">
      POD 1 focuses on platform and architecture development and is responsible for several core modules. These include the Multi-tenant Framework, Elastic Search, Business Notification Framework, Monitoring, Landing Page, B2C Policy, Event Bus & Registry, Notification Scheduler, and the Common Library. The team plays a critical role in building and maintaining foundational systems that support the broader product infrastructure.
    </p>

    <p className="mb-6">
      The project follows an Agile Scrum methodology and emphasizes full-stack development. The frontend is built using React 18, Vite.js, Zustand, and Tailwind CSS, while the backend leverages Nest.js, MongoDB, and PostgreSQL. The entire solution is hosted on AWS with a strong DevOps pipeline that includes CI/CD, Docker, and Kubernetes for continuous integration, deployment, and scalability.
    </p>

    {/* Go to Skills Button */}
    <a
      href="#skills"
      className="inline-block px-6 py-3 bg-green-700 text-white font-medium rounded-full shadow hover:bg-green-800 transition duration-300 justify-between"
>
    
      Go to Skills Section
    </a>
  </div>
</div>
</FadeInSection>

    </div>
    </FadeInSection>
  );
};

export default Pod1Layout;
