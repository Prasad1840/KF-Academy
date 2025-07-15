// PodShowcase.tsx

import React from "react";
import { useNavigate } from "react-router-dom";
import { usePodFilterStore } from "../../store/usePodFilterStore";

const pods = [
  {
    title: "POD 1",
    description:
      "Platform and architecture development. The team owns several core modules such as: Multi-tenant Framework, Elastic Search, Business Notification Framework, Monitoring, Landing Page, B2C Policy, Event Bus & Registry, Notification Scheduler, Common Library. The project follows Agile Scrum and focuses on full-stack development using React 18, Vite.js, Zustand, and Tailwind on the frontend, with NestJS, MongoDB, and PostgreSQL on the backend—hosted on AWS with strong DevOps integration including CI/CD, Docker, and Kubernetes.",
    bg: "/assets/pod1bg.jpg",
    
  },
  {
    title: "POD 5",
    description:
      " POD 5 works closely with DevOps and platform team to integrate and use new services in Azure like identity server, app config, secrets management. It also automates web applications and migration tasks. The project follows Elastic, Logstash, React, AWS, Azure, .NET, AKS, DevOps, GitHub, GitHub Actions, PostgreSQL.",
    bg: "/assets/pod5bg.jpg",
    
  },
  {
    title: "POD 10",
    description:
      " Pod 10 is a cross-functional team of Data Engineers, a Frontend Developer, and a Scrum Master, skilled in Python, Angular, React, PostgreSQL, Elasticsearch, Databricks, and Apache NiFi. The team enables scalable, data-driven solutions across frontend and backend through a collaborative, agile approach.",
    bg: "/assets/pod10bg.jpg",
    
  },
  {
    title: "KF One – Insights / Listen / EDW",
 
    description:
   
      " Although there are three separate streams, they are treated as part of the larger “KF One” ecosystem. Team members are shared across sub-units and work collaboratively on data-driven insights, listening platforms, and enterprise data warehousing (EDW).",
    bg: "/assets/kfonebg.jpg",
    
  },
  {
    title: "Data Management",
    description:
     
      " POD Data Management oversees end-to-end data workflows—from ingestion to governance—on Azure platforms using services like Data Factory, Synapse, ADLS Gen2, and Power BI. It ensures real-time data delivery while handling CI/CD pipelines, PII removals, dashboards, and pipeline development. Core skills include DevOps, PowerShell, and SQL.",
    bg: "/assets/datamgmtbg.jpg",
    
  },
  {
    title: "Work Measurement",
    description:
      " The Work Measurement group comprises teams like Collous, Titanium, Quicksilver, Skywalkers, Mandalorian, and Galactic Guardians, focusing on application migration, smart job mapping, and core platform development. They use technologies like Node.js, NestJS, Angular, ReactJS, Java, Spring, Docker, Kubernetes, and OpenAI APIs.",
    bg: "/assets/workmeasurementbg.jpg",
   
  },
  {
    title: "POD - A&S",
    description:
      "This POD builds and manages talent assessment platforms that deliver behavioral insights through surveys and workflows—powering smarter hiring, development, and retention across the unified Talent Suite.",
    bg: "/assets/aandsbg.jpg",
    
  },
  {
    title: "POD - SQA",
    
    description:
      
      " This POD develops automation scripts, performs performance and functional testing, analyzes test pipelines, and contributes to agile ceremonies. Technologies include Java, Selenium, JMeter, Azure/GitHub pipelines, and Git version control.",
    bg: "/assets/sqabg.jpg",
    
  },
];

const PodShowcase: React.FC = () => {
  const setSelected = usePodFilterStore((state) => state.setSelected);
  const navigate = useNavigate();

  return (
    <div className="bg-black min-h-screen text-white py-16 px-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        Explore Our PODs
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {pods.map((pod, index) => (
          <div
            key={index}
            className="relative rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${pod.bg})`, filter: "brightness(0.6)" }}
            />
            <div   className="bg-[linear-gradient(rgb(6,51,42),rgb(0,99,79))] hover:bg-green-700 text-white h-80 rounded-2xl p-6 shadow-lg transition duration-300">
              <div>
                <h2 className="text-3xl text-center font-semibold mb-1">
                  {pod.title}
                </h2>
                <p className="text-base p-4 text-gray-200">{pod.description}</p>
                
              </div>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PodShowcase;
