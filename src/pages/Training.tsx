import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, easeOut, easeInOut } from "framer-motion";
import { Filter, ChevronDown, ChevronUp, X, RotateCcw } from "lucide-react"; // Added RotateCcw for reset icon

const pods = [
  {
    id: 1,
    title: "POD 1",
    manager: "Ramesh Mallareddygarri",
    leads: ["Pankaj Gore", "Neha Kumari"],
    focus:
      "Platform and architecture development. The team owns several core modules such as Multi-tenant Framework, Elastic Search, Business Notification Framework, Monitoring, Landing Page, B2C Policy, Event Bus & Registry, Notification Scheduler, Common Library.",
    stack:
      "Frontend: React 18, Vite.js, Zustand, Tailwind CSS | Backend: Nest.js, MongoDB, PostgreSQL | DevOps: AWS, CI/CD, Docker, Kubernetes",
  },
  {
    id: 2,
    title: "POD 5",
    manager: "Kishor Nanguda",
    leads: ["Khursheed Bhat"],
    focus:
      "POD 5 works closely with DevOps and platform teams to integrate and use new services in Azure like Identity server, app config, secrets management. They also handle hiring automation web applications and migration tasks.",
    stack:
      "Elastic, Logstash, React, AWS, Azure, .NET, AKS, DevOps, GitHub Actions, PostgreSQL",
  },
  {
    id: 3,
    title: "POD 10",
    manager: "Tom Gore",
    leads: ["Madhu Sudhan Reddy", "Monica V"],
    focus:
      "A cross-functional team of Data Engineers, Frontend Developers, and Scrum Masters, delivering scalable data-driven solutions using Python, Angular, React, PostgreSQL, Databricks, and Apache NiFi.",
    stack:
      "Python, Angular, React, PostgreSQL, Databricks, Apache NiFi, Elasticsearch",
  },
  {
    id: 4,
    title: "POD - A&S",
    manager: "Umang Kaur",
    leads: ["Syed Salman"],
    focus: `This POD builds and manages talent assessment platforms that deliver
behavioural insights through surveys and workflows—powering smarter hiring,
development, and retention across the unified Talent Suite.`,
    stack: "Relevant technologies for POD - A&S.",
  },
  {
    id: 5,
    title: "POD - SQA",
    manager: "Manish Singh",
    leads: ["Nripendra Kumar", "Dharmendra Singh"],
    focus: `Project activities include developing automation scripts, performing
performance and functional testing, analyzing test pipelines, and participating in
agile ceremonies—`,
    stack: ` Java, Selenium, JMeter, Azure/GitHub pipelines, and version control using Git`,
  },
  {
    id: 6,
    title: "KF One - KF Insights / KF Listen / EDW",
    manager: " Balachandar Sangaiah",
    leads: ["Amarjeet Prajapati"],
    focus: `Although these are three separate streams, they are treated as part of the
larger “KF One” ecosystem. Team members are shared across sub-units and work
collaboratively on data-driven insights, listening platforms, and enterprise data
warehousing (EDW).`,
    stack: "Data Analytics, AI, Machine Learning",
  },
  {
    id: 9,
    title: "Data Management",
    manager: "Cathy Means",
    leads: [" Pratik Jawade"],
    focus: `POD Data Management oversees end-to-end data workflows—ingestion
to governance—on Azure platforms using services like Data Factory, Synapse, ADLS
Gen2, and Power BI. The team ensures secure, real-time data delivery while handling
CI/CD pipelines, PII removals, dashboard validations, and pipeline development`,
    stack: "DevOps, PowerShell, and SQL",
  },
  {
    id: 10,
    title: "Work Measurement",
    manager: "Raghvendra Raichuri",
    leads: ["Sanjay Gire"],
    focus: `The Work Measurement group comprises sub-teams like Collous,
Titanium, Quicksilver, Skywalkers, Mandalorian, and Galactic Guardians, focusing on
application migration, smart job mapping, and core platform development `,
    stack: ` Node.js, NestJS, Angular, ReactJS, Java, Spring,
Docker, Kubernetes, and OpenAI APIs to modernize systems`
  },
];

const motivationalQuotes = [
  " Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  " Start where you are. Use what you have. Do what you can. - Arthur Ashe",
  " Don't watch the clock; do what it does. Keep going. – Sam Levenson",
  " Don’t stop when you’re tired. Stop when you’re done.– Marilyn Monroe",
  " Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",


];

const Training: React.FC = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [expandedPod, setExpandedPod] = useState<number | null>(null);
  const [filters, setFilters] = useState<string[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); 
  const [isPodOpen, setIsPodOpen] = useState(true);     // For POD SPECIFIC
  const [isSkillsOpen, setIsSkillsOpen] = useState(true); // For SKILLS

  // Scroll progress handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cycle quotes every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % motivationalQuotes.length);
    }, 10000); // Change every 10s
    return () => clearInterval(interval);
  }, []);

  // Toggle expand POD
  const togglePod = (id: number) => {
    setExpandedPod(expandedPod === id ? null : id);
  };

  // Toggle Filters
  const toggleFilter = (filter: string) => {
    setFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  // Function to reset all filters
  const resetFilters = () => {
    setFilters([]);
  };

  // Filter PODs based on selected filters
  const filteredPods =
    filters.length > 0
      ? pods.filter((pod) =>
          filters.some((f) => {
            // Check for exact POD title match OR for substring match in focus/stack
            return (
              pod.title === f ||
              pod.stack.toLowerCase().includes(f.toLowerCase()) ||
              pod.focus.toLowerCase().includes(f.toLowerCase())
            );
          })
        )
      : pods;

  // Animation variants for filter options
  const filterItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  // Animation variants for POD cards
  const podCardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: easeOut, type: "tween" as const } },
    hover: { scale: 1.02, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" },
    tap: { scale: 0.98 },
  };

  const sidebarVariants = {
    open: { x: 0, opacity: 1, transition: { duration: 0.3 } },
    closed: { x: "-100%", opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="relative min-h-screen w-full bg-gray-50 font-[Gotham A,Gotham B,sans-serif]">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-[#05C690] z-50"
        style={{ width: `${scrollProgress}%` }}
      />

    {/* Header with Background Video */}
    <div className="relative w-full h-[350px]">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/earth.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay (optional for a slight dark tint) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Header Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start p-6 w-full">
        {/* Left side: Heading and Description */}
        <div className="mb-4 mt-10 md:mb-0 max-w-2xl">
          <h1 className="text-7xl font-bold text-[#05C690] tracking-wide font-gotham transform hover:scale-105 transition-transform duration-300">
            TRAINING
          </h1>
          <p className="text-1xl text-gray-100 leading-relaxed max-w-3xl w-full md:w-[200%] lg:w-[200%] mt-9 break-words">
  As part of the <span className="font-semibold text-[#05C690]">Korn Ferry – Hoonartek collaboration</span>, you will be aligned with a dedicated project delivery unit, commonly known as a <span className="font-bold text-[#05C690]">POD</span>.  
  <br className="hidden md:block" />
  Each POD is led by a Korn Ferry Manager and supported by internal Hoonartek Leads to ensure seamless coordination, efficient development, and timely delivery. Below is an overview of the active PODs driving this engagement.
</p>

        </div>

        {/* Right side: Rotating Quotes */}
<div className="text-right max-w-lg md:ml-auto relative">
  {/* Fixed Quotation Marks */}
  <div className="relative px-8">
    {/* Opening Quote */}
    <span className="absolute top-[-80px] left-[-20px] text-[200px] text-[#05C690] font-serif select-none leading-none">
      “
    </span>

    {/* Closing Quote */}
    <span className="absolute bottom-[-180px] right-[-20px] text-[200px] text-[#05C690] font-serif select-none leading-none">
      ”
    </span>

    {/* Quotes text (fading inside the quotes) */}
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
      {/* Increased pt- to ensure it clears the header on all screen sizes */}
      <div className="flex  "> 
        {/* Filter Toggle for Small Screens */}
        {/* Adjusted top position to be clearly below the header */}

        {/* Sidebar */}
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
              // Adjusted pt- in sidebar to align correctly with general content flow
               className="fixed inset-y-0 left-0 bg-[linear-gradient(rgb(6,51,42),rgb(0,99,79))] shadow-lg p-6 pt-[140px] md:pt-6 z-30 md:static md:block md:shadow-none 
             w-80 overflow-y-auto max-h-[calc(100vh-100px)] rounded-r-lg" // Increased from 210px
            >
              
              {/* Filters Header and Reset Button */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-[#009B77] flex items-center gap-2">
                  <Filter className="text-[#05C690]" size={20} /> Filters
                </h2>
                <button
                  onClick={resetFilters}
                  className="flex items-center gap-1 text-sm text-gray-500 hover:text-[#05C690] transition-colors"
                >
                  <RotateCcw size={16} /> Reset
                </button>
                {/* Close button for mobile sidebar */}
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="md:hidden p-1 rounded-full text-gray-600 hover:bg-gray-100"
                >
                  <X size={20} />
                </button>
              </div>

              {/* POD Specific Filters */}
<div
  className="flex justify-between items-center cursor-pointer mb-2"
  onClick={() => setIsPodOpen(!isPodOpen)} // Toggle POD section
>
  <h3 className="font-bold text-white ">POD SPECIFIC</h3>
  {isPodOpen ? (
    <ChevronUp className="text-white" size={20} />
  ) : (
    <ChevronDown className="text-white" size={20} />
  )}
</div>

<AnimatePresence>
  {isPodOpen && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="mt-2 flex flex-col gap-2 italic text-1xl text-white tracking-tight mb-6"
    >
      {[
        "POD 1",
        "POD 5",
        "POD 10",
        "POD - A&S",
        "POD - SQA",
        "KF One - KF Insights / KF Listen / EDW",
        "Data Management",
        "Work Measurement",
      ].map((type, index) => (
        <motion.label
          key={type}
          className="flex items-center gap-2 cursor-pointer"
          variants={filterItemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.05 * index }}
        >
          <input
            type="checkbox"
            checked={filters.includes(type)}
            onChange={() => toggleFilter(type)}
            className="accent-[#05C690]"
          />
          <span>{type}</span>
        </motion.label>
      ))}
                </motion.div>
  )}
            </AnimatePresence>

              {/* Skills Filters */}
              <div>
               <div
  className="flex justify-between items-center cursor-pointer mb-2"
  onClick={() => setIsSkillsOpen(!isSkillsOpen)} // Toggle SKILLS section
>
  <h3 className="font-semibold text-white">SKILLS</h3>
  {isSkillsOpen ? (
    <ChevronUp className="text-white" size={20} />
  ) : (
    <ChevronDown className="text-white" size={20} />
  )}
</div>

<AnimatePresence>
  {isSkillsOpen && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="mt-2 flex flex-col gap-2 italic text-1xl text-white tracking-tight mb-6"
    >
      {[
        "React",
        "Node",
        "Python",
        "Java",
        "JS",                 
        "SQL",
        "Tailwind",
        "MongoDB",
        "PostgreSQL",
        "AWS",
        "Azure",
        "Docker",
        "Kubernetes",
        "Databricks",
        "Apache NiFi",
        "Elasticsearch",
        "Nest.js",
        ".NET",
        "Angular",
        "Spring",
        "Selenium",
        "JMeter",
        "DevOps",
        "PowerShell",
        "Git",
        "Vite.js",
        "Zustand",
        "CI/CD",
        "GitHub Actions",
        "OpenAI APIs"
      ].map((skill, index) => (
        <motion.label
          key={skill}
          className="flex items-center gap-2 cursor-pointer"
          variants={filterItemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.05 * (pods.length + index) }}
        >
          <input
            type="checkbox"
            checked={filters.includes(skill)}
            onChange={() => toggleFilter(skill)}
            className="accent-[#05C690]"
          />
          <span>{skill}</span>
        </motion.label>
      ))}
    </motion.div>
  )}
</AnimatePresence>
              </div>

              {/* Active Filters Display */}
              {filters.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-sm text-white mb-2">Active Filters:</h3>
                  <div className="flex overflow-x-auto gap-2 p-1 hide-scrollbar">
                    {filters.map((filter, index) => (
                      <span
                        key={index}
                        className="bg-[#05C690] text-white px-3 py-1 rounded-full text-sm flex items-center gap-1 shrink-0"
                      >
                        {filter}
                        <button
                          onClick={() => toggleFilter(filter)}
                          className="text-white hover:text-gray-200"
                        >
                          &times;
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

{/* Content Area for POD Cards */}
<div className="flex-1 p-6 bg-green-100 transition-all duration-300 ease-in-out">
  {/* Skills Boxes Section */}
{filters.length > 0 &&
  filters.some((f) => [
    "React", "Node", "Python", "Java", "JS", "SQL", "Tailwind",
    "MongoDB", "PostgreSQL", "AWS", "Azure", "Docker", "Kubernetes",
    "Databricks", "Apache NiFi", "Elasticsearch", "Nest.js", ".NET",
    "Angular", "Spring", "Selenium", "JMeter", "DevOps", "PowerShell",
    "Git", "Vite.js", "Zustand", "CI/CD", "GitHub Actions", "OpenAI APIs",
  ].includes(f)) && (
    <>
      <h2 className="text-2xl font-bold text-[#035C4D] mb-3">SKILLS</h2>
      <p className="text-sm text-gray-800 mb-4 italic">
             Click on any skill below to explore learning resources and details.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
        <AnimatePresence>
          {filters
            .filter((f) =>
              [
                "React", "Node", "Python", "Java", "JS", "SQL", "Tailwind",
                "MongoDB", "PostgreSQL", "AWS", "Azure", "Docker", "Kubernetes",
                "Databricks", "Apache NiFi", "Elasticsearch", "Nest.js", ".NET",
                "Angular", "Spring", "Selenium", "JMeter", "DevOps", "PowerShell",
                "Git", "Vite.js", "Zustand", "CI/CD", "GitHub Actions", "OpenAI APIs",
              ].includes(f)
            )
            .map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#05C690",
                  color: "#ffffff",
                }}
                className="px-4 py-2 rounded-lg bg-white text-[#035C4D] font-semibold shadow cursor-pointer transition-colors duration-300"
                onClick={() => {
                  // Navigate to another page later
                  console.log(`Clicked on skill: ${skill}`);

                  //navigate(`/skills/${skill.toLowerCase()}`);
                  
                  // Example navigation placeholder
                  // navigate(`/skills/${skill.toLowerCase()}`);
                }}
              >
                {skill}
                  <span className="text-[#035C4D] group-hover:text-white"> &rarr;</span>

              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </>
)}
 
  

  {/* POD Cards */}
  <h2 className="text-2xl font-bold text-[#035C4D] mb-3">POD SPECIFIC</h2>
   <p className="text-sm text-gray-800 mb-4 italic">
             Skills and technologies used in each POD are highlighted below. Click on any POD to expand and view more details.
      </p>
  <div className="grid grid-cols-1 gap-4 place-items-center">
    <AnimatePresence>
      {filteredPods.map((pod) => (
        <motion.div
          key={pod.id}
          variants={podCardVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          whileHover="hover"
          whileTap="tap"
          className="relative group w-3xl bg-white rounded-xl shadow-md cursor-pointer overflow-hidden transition-colors duration-500 hover:bg-[#035C4D]"
          onClick={() => togglePod(pod.id)}
        >

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#035C4D] to-transparent opacity-0 group-hover:opacity-10 transition-all duration-500 ease-out z-0" />

                  {/* Card Content */}
                  <div className="relative z-10 flex justify-between items-center p-4">
                    <h3 className="text-lg font-bold text-[#009B77] group-hover:text-white transition-colors duration-300">
                      {pod.title}
                    </h3>

                    {expandedPod === pod.id ? (
                      <motion.div initial={{ rotate: 0 }} animate={{ rotate: 180 }} transition={{ duration: 0.3 }}>
                        <ChevronUp className="text-[#05C690]" />
                      </motion.div>
                    ) : (
                      <motion.div initial={{ rotate: 180 }} animate={{ rotate: 0 }} transition={{ duration: 0.3 }}>
                        <ChevronDown className="text-[#05C690]" />
                      </motion.div>
                    )}
                  </div>

                  <AnimatePresence>
                    {expandedPod === pod.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, paddingBottom: 0 }}
                        animate={{ height: "auto", opacity: 7, paddingBottom: "1rem" }}
                        exit={{ height: 0, opacity: 0, paddingBottom: 0 }}
                        transition={{ duration: 0.3, ease: easeInOut, type: "tween" as const }}
                        className="px-4 text-gray-900 space-y-3 group-hover:text-white transition-colors duration-300"
                      >
                        <p>
                          <strong className="text-[#05C690] group-hover:text-white transition-colors duration-300">
                            Korn Ferry Manager:
                          </strong>{" "}
                          {pod.manager}
                        </p>
                        <p>
                          <strong className="text-[#05C690] group-hover:text-white transition-colors duration-300">
                            Internal Team Lead:
                          </strong>{" "}
                          {pod.leads.join(", ")}
                        </p>
                        <p>
                          <strong className="text-[#05C690] group-hover:text-white transition-colors duration-300">
                            Focus Area:
                          </strong>{" "}
                          {pod.focus}
                        </p>
                        <p>
                          <strong className="text-[#05C690] group-hover:text-white transition-colors duration-300">
                            Technology Stack:
                          </strong>{" "}
                          {pod.stack}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;