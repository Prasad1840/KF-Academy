// Pod5Layout.tsx

import React from "react";
import FadeInSection from "../FadeInSection";

const Pod5Layout: React.FC = () => {
  return (
    <FadeInSection>
      <div className="min-h-screen bg-gray-200 ">
        {/* Top Half Image */}
        <div
          className="h-[70vh] w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/Working-2.jpg')", // Replace with your own
          }}
        />

        {/* Floating White Box Overlapping */}
        <FadeInSection>
          <div className="max-w-5xl mx-auto -mt-32 bg-gray-200 rounded-xl shadow-xl p-10 z-10 relative">
            <h1 className="text-4xl sm:text-5xl font-semibold text-green-700 text-left mb-4">
              POD 5 Overview
            </h1>

            <div className="text-green-800 text-base mb-6 leading-relaxed">
              <p className="mb-4">
                <span className="font-semibold text-green-600">Korn Ferry Manager:</span> Kishor Nanguda<br />
                <span className="font-semibold text-green-600">Internal Team Lead:</span> Khursheed Bhat
              </p>

              <p className="mb-4">
                <span className="font-semibold text-green-600">Focus Area:</span> POD 5 works closely with DevOps and platform teams to integrate and use new services in Azure like Identity Server, App Config, and Secrets Management. It also supports hiring automation, web applications, and migration tasks.
              </p>

              <p className="mb-6">
                <span className="font-semibold text-green-600">Technology Stack:</span> Elastic, Logstash, React, AWS, Azure, .NET, AKS, DevOps, GitHub, GitHub Actions, PostgreSQL.
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

export default Pod5Layout;
