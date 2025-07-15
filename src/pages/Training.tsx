import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, easeOut, easeInOut } from "framer-motion";
import { Filter, ChevronDown, ChevronUp, X, RotateCcw } from "lucide-react"; // Added RotateCcw for reset icon
import Sidebar from "../components/TrainSidebar"; // Importing the Sidebar component
import { useNavigate } from "react-router-dom";


type Pod = {
  name: string;
  skills: string[];
  focus: string;
};

const pods: Pod[] = [
  {
    name: "POD 1",
    skills: [
      "React ", "Vite.js", "Zustand", "Tailwind CSS",
      "Nest.js", "MongoDB", 
      "AWS", "CI/CD", "Docker", "Kubernetes"
    ],
    focus:
      "Platform and architecture development. The team owns several core modules such as Multi-tenant Framework, Elastic Search, Business Notification Framework, Monitoring, Landing Page, B2C Policy, Event Bus & Registry, Notification Scheduler, Common Library."
  },
  {
    name: "POD 5",
    skills: [
      "Elastic", "Logstash", "React", "AWS", "Azure", ".NET",
      "AKS", "DevOps", "GitHub Actions", "PostgreSQL"
    ],
    focus:
      "POD 5 works closely with DevOps and platform teams to integrate and use new services in Azure like Identity server, app config, secrets management. They also handle hiring automation web applications and migration tasks."
  },
  {
    name: "POD 10",
    skills: [
      "Python", "Angular", "React", "PostgreSQL", "Databricks",
      "Apache NiFi", "Elasticsearch"
    ],
    focus:
      "A cross-functional team of Data Engineers, Frontend Developers, and Scrum Masters, delivering scalable data-driven solutions using Python, Angular, React, PostgreSQL, Databricks, and Apache NiFi."
  },
  {
    name: "POD - A&S",
    skills: ["Relevant technologies for POD - A&S."],
    focus:
      "This POD builds and manages talent assessment platforms that deliver behavioural insights through surveys and workflows—powering smarter hiring, development, and retention across the unified Talent Suite."
  },
  {
    name: "POD - SQA",
    skills: [
      "Java", "Selenium", "JMeter", "Azure/GitHub pipelines", "Git"
    ],
    focus:
      "Project activities include developing automation scripts, performing performance and functional testing, analyzing test pipelines, and participating in agile ceremonies—"
  },
  {
    name: "KF One - KF Insights / KF Listen / EDW",
    skills: ["Data Analytics", "AI", "Machine Learning"],
    focus:
      "Although these are three separate streams, they are treated as part of the larger “KF One” ecosystem. Team members are shared across sub-units and work collaboratively on data-driven insights, listening platforms, and enterprise data warehousing (EDW)."
  },
  {
    name: "Data Management",
    skills: [
      "Azure Data Factory", "Synapse", "ADLS Gen2", "Power BI",
      "DevOps", "PowerShell", "SQL"
    ],
    focus:
      "POD Data Management oversees end-to-end data workflows—ingestion to governance—on Azure platforms using services like Data Factory, Synapse, ADLS Gen2, and Power BI. The team ensures secure, real-time data delivery while handling CI/CD pipelines, PII removals, dashboard validations, and pipeline development"
  },
  {
    name: "Work Measurement",
    skills: [
      "Node.js", "NestJS", "Angular", "ReactJS", "Java", "Spring",
      "Docker", "Kubernetes", "OpenAI APIs"
    ],
    focus:
      "The Work Measurement group comprises sub-teams like Collous, Titanium, Quicksilver, Skywalkers, Mandalorian, and Galactic Guardians, focusing on application migration, smart job mapping, and core platform development"
  }
];

// ... rest of the code remains the same
import { usePodFilterStore } from "../store/usePodFilterStore";

// Add motivational quotes array
const motivationalQuotes: string[] = [
  "Success is not the key to happiness. Happiness is the key to success.",
  "Opportunities don't happen, you create them.",
  "The only way to do great work is to love what you do.",
  "Don't watch the clock; do what it does. Keep going.",
  "The future depends on what you do today."
];

const Training: React.FC = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
 
 const selectedPod = usePodFilterStore((state) => state.selectedPod);
const setSelected = usePodFilterStore((state) => state.setSelected);
const clearSelectedPod = usePodFilterStore((state) => state.clearSelectedPod);



const navigate = useNavigate();

const skillRouteMap: Record<string, string> = {
  "React": "/training/react",
  "Tailwind CSS": "/skills/tailwind",
  "Nest.js": "/skills/nestjs",
  "NestJS": "/skills/nestjs",
  "Node.js": "/skills/nodejs",
  "Vite.js": "/skills/vite",
  "Zustand": "/trainig/zustand",
  "MongoDB": "/skills/mongodb",
  "Docker": "/skills/docker",
  "Kubernetes": "/skills/kubernetes",
  "Python": "/skills/python",
  "Angular": "/skills/angular",
  "PostgreSQL": "/skills/postgresql",
  "Elastic": "/skills/elastic",
  "Logstash": "/skills/logstash",
  "Databricks": "/skills/databricks",
  "Apache NiFi": "/skills/nifi",
  ".NET": "/skills/dotnet",
  "AKS": "/skills/aks",
  "Azure": "/skills/azure",
  "AWS": "/skills/aws",
  "GitHub Actions": "/skills/github-actions",
  "DevOps": "/skills/devops",
  "Java": "/skills/java",
  "Spring": "/skills/spring",
  "Selenium": "/skills/selenium",
  "JMeter": "/skills/jmeter",
  "Git": "/skills/git",
  "Azure Data Factory": "/skills/adf",
  "Synapse": "/skills/synapse",
  "ADLS Gen2": "/skills/adls",
  "Power BI": "/skills/powerbi",
  "PowerShell": "/skills/powershell",
  "SQL": "/skills/sql",
  "OpenAI APIs": "/skills/openai",
  "AI": "/skills/ai",
  "Machine Learning": "/skills/ml",
  "Data Analytics": "/skills/data-analytics"
};

  // Quotes cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % motivationalQuotes.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);



 

  return (
    <div className="relative min-h-screen w-full bg-gray-50 font-[Gotham A,Gotham B,sans-serif]">

      {/* Header Section */}
      <div className="relative w-full h-[350px]">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/earth.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start p-6 w-full">
          <div className="mb-4 mt-10 md:mb-0 max-w-2xl">
            <h1 className="text-7xl font-bold text-[#05C690] tracking-wide font-gotham transform hover:scale-105 transition-transform duration-300">
              TRAINING
            </h1>
            <p className="text-1xl text-gray-100 leading-relaxed max-w-3xl w-full md:w-[200%] lg:w-[200%] mt-9 break-words">
              As part of the{" "}
              <span className="font-semibold text-[#05C690]">
                Korn Ferry – Hoonartek collaboration
              </span>
              , you will be aligned with a dedicated project delivery unit,
              commonly known as a{" "}
              <span className="font-bold text-[#05C690]">POD</span>.  
              <br className="hidden md:block" />
              Each POD is led by a Korn Ferry Manager and supported by internal
              Hoonartek Leads to ensure seamless coordination, efficient
              development, and timely delivery. Below is an overview of the
              active PODs driving this engagement.
            </p>
          </div>

          {/* Rotating Quote */}
          <div className="text-right max-w-lg md:ml-auto relative">
            <div className="relative px-8">
              <span className="absolute top-[-80px] left-[-20px] text-[200px] text-[#05C690] font-serif select-none leading-none">
                “
              </span>
              <span className="absolute bottom-[-180px] right-[-20px] text-[200px] text-[#05C690] font-serif select-none leading-none">
                ”
              </span>
              <AnimatePresence mode="wait">
                <motion.p
                  key={quoteIndex}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.8 }}
                  className="italic text-[#9abaaf] text-2xl mt-15 break-words text-center"
                >
                  {motivationalQuotes[quoteIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex">
        <Sidebar/>

        <div className="flex-1 p-6 bg-green-100 transition-all duration-300 ease-in-out">
          {selectedPod.length > 0 && (
            <>
              <h2 className="text-2xl font-bold text-[#035C4D] mb-3">SKILLS</h2>
              <p className="text-sm text-gray-800 mb-4 italic">
                Skills and technologies used in the selected POD(s).
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
                <AnimatePresence>
                  {Array.from(
                    new Set(
                      pods
                        .filter((pod) => selectedPod.includes(pod.name))
                        .flatMap((pod) =>
                          pod.skills
                            .map((skill) => skill.trim())
                        )
                    )
                  ).map((skill, index) => (
                    <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#05C690",
                    color: "#ffffff",
                  }}
                  className="px-4 py-2 rounded-lg bg-white text-[#035C4D] font-semibold shadow cursor-pointer transition-colors duration-300"
                  onClick={() => {
                    const route = skillRouteMap[skill];
                    if (route) {
                      navigate(route);
                    } else {
                      alert(`No page found for "${skill}" yet.`);
                    }
                  }}
                >
                  {skill}
                </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </>
          )}
          {selectedPod.length === 0 && (
            <div className="text-center">
              <p className="text-3xl text-gray-500 mb-4 italic">
                Please select a POD to view its skills.
              </p>
            </div>)}
        </div>
      </div>
    </div>
  );
};

export default Training;
