import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { motion, type Variants } from "framer-motion";
import Navbar from "../components/Navbar";

export const onboardingData = [
  {
    phase: "Phase 1",
    subheading: "Hoonartek Onboarding",
    description:
      "Complete HR formalities and initiate SAP ID process for Korn Ferry systems access.",

    details: `Once you receive onboarding communication from the Hoonartek HR team, your first step will be to complete and submit all required forms. These will be reviewed and, once finalized, some documents will be sent to Korn Ferry by the PMO for further processing.
<b>Note:</b> If you are an existing Hoonartek employee, you may not be required to resubmit these documents. In such cases, only Korn Ferry-specific policies, circulated by the PMO team, will need your review and acknowledgment.
Parallelly, you will receive an email from PMO named <b>“DocuSign | Korn Ferry Policies”</b> asking you to acknowledge Korn Ferry's internal policies.
Please complete these promptly. Once documents are approved, the PMO will initiate your SAP ID generation process with Korn Ferry.
This SAP ID is like an Employee ID for Korn Ferry and is essential for your access to Korn Ferry systems like Microsoft Outlook, Teams and Internal portals.`,
    steps: [
      {
        title: " SAP ID Process Initiation",
        description: `We will initiate your SAP ID process to give you access to internal tools and resources.`,
        image: "https://media.dtnext.in/imported/import/Images/Article/201709200116084667_Wearing-ID-cards-must-for-government-staff_SECVPF.gif",

        details: ` Once you submit all required documents to Hoonartek HR, the PMO shortlists the necessary files including your signed Korn Ferry policy documents and forwards them to the Korn Ferry team.

<p>This begins your SAP ID generation, which is essential for accessing Korn Ferry systems like Outlook and Teams.</p>

<p>Once you receive the SAP ID (via email from the PMO), follow these steps:</p>

<ol>
  <li> 1. Contact Korn Ferry IT Support at <b>0124-4321020</b> to retrieve your initial password.</li>
  <li>2. You will be asked for your <b>Full name, SAP ID and your Manager's name</b> (PMO will help if you're unsure).</li>
  <li>3. Once your password is shared, log in to your Korn Ferry Outlook account <b>(firstname.lastname@kornferry.com)</b>.</li>
  <li>4. Reset your password and set up <b>Microsoft Authenticator</b> for secure access.</li>
</ol>


<p><b>Action:</b> If SAP ID remains inactive after 1 working day, notify the PMO immediately to avoid delay.</p>`

      },
      {
        title: " Holiday Calendar and Mapping",
        description:
          "You'll receive the holiday calendar and we'll map your schedule accordingly.",
        image: "https://images.pexels.com/photos/5386754/pexels-photo-5386754.jpeg?cs=srgb&dl=pexels-leeloothefirst-5386754.jpg&fm=jpg",

        details: `<div>
  <p>
    You will initially see Hoonartek's holiday calendar in Keka, but Korn Ferry has its own calendar to follow. The PMO will provide this.
  </p>

  <p>Here's how to manage mismatches:</p>
  <ul>
    <li>• If both mark a holiday: <b>No entry needed</b></li>
    <li>• KF holiday only: <b>Manually log 8 hours under task named “Korn Ferry Holiday”</b></li>
    <li>• Hoonartek holiday only: <b>Ignore autofill and enter 8 billable hours manually</b></li>
  </ul>
</div>

<div class="mt-4">
  <p>
    Target: Always maintain <b>40 hours per week</b> despite calendar differences
  </p>
</div>


<b class="block text-lg mb-2">KORN FERRY HOLIDAY LIST FOR 2025</b>
<table class="w-full border-collapse border border-gray-300">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-300 p-1 text-left">S. No.</th>
      <th class="border border-gray-300 p-1 text-left">HOLIDAYS</th>
      <th class="border border-gray-300 p-1 text-left">DAY</th>
      <th class="border border-gray-300 p-1 text-left">DATE</th>
      <th class="border border-gray-300 p-1 text-left">LOCATION</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 p-1">1</td>
      <td class="border border-gray-300 p-1">New Year's Day</td>
      <td class="border border-gray-300 p-1">Wednesday</td>
      <td class="border border-gray-300 p-1">1st January 2025</td>
      <td class="border border-gray-300 p-1">Pan India</td>
    </tr>
    <tr>
      <td class="border border-gray-300 p-2">2</td>
      <td class="border border-gray-300 p-2">Makar Sankranti/ Pongal</td>
      <td class="border border-gray-300 p-2">Tuesday</td>
      <td class="border border-gray-300 p-2">14th January 2025</td>
      <td class="border border-gray-300 p-2">Bangalore</td>
    </tr>
    <tr>
      <td class="border border-gray-300 p-2">3</td>
      <td class="border border-gray-300 p-2">Holi</td>
      <td class="border border-gray-300 p-2">Friday</td>
      <td class="border border-gray-300 p-2">14th March 2025</td>
      <td class="border border-gray-300 p-2">Gurgaon / Mumbai /Pune</td>
    </tr>
    <tr>
      <td class="border border-gray-300 p-2">4</td>
      <td class="border border-gray-300 p-2">Ramazan / Idu'l Fitr</td>
      <td class="border border-gray-300 p-2">Monday</td>
      <td class="border border-gray-300 p-2">31st March, 2025</td>
      <td class="border border-gray-300 p-2">Pan India</td>
    </tr>
    <tr>
      <td class="border border-gray-300 p-2">5</td>
      <td class="border border-gray-300 p-2">Good Friday</td>
      <td class="border border-gray-300 p-2">Friday</td>
      <td class="border border-gray-300 p-2">18th April 2025</td>
      <td class="border border-gray-300 p-2">Pan India</td>
    </tr>
    <tr>
      <td class="border border-gray-300 p-2">6</td>
      <td class="border border-gray-300 p-2">May Day</td>
      <td class="border border-gray-300 p-2">Thursday</td>
      <td class="border border-gray-300 p-2">1st May 2025</td>
      <td class="border border-gray-300 p-2">Pan India</td>
    </tr>
    <tr>
      <td class="border border-gray-300 p-2">7</td>
      <td class="border border-gray-300 p-2">Independence Day</td>
      <td class="border border-gray-300 p-2">Friday</td>
      <td class="border border-gray-300 p-2">15th August 2025</td>
      <td class="border border-gray-300 p-2">Pan India</td>
    </tr>
    <tr>
      <td class="border border-gray-300 p-2">8</td>
      <td class="border border-gray-300 p-2">Ganesh Chaturthi</td>
      <td class="border border-gray-300 p-2">Wednesday</td>
      <td class="border border-gray-300 p-2">27th August, 2025</td>
      <td class="border border-gray-300 p-2">Bangalore / Mumbai /Pune</td>
    </tr>
    <tr>
      <td class="border border-gray-300 p-2">9</td>
      <td class="border border-gray-300 p-2">Mahatma Gandhi Jayanti/Dussehra</td>
      <td class="border border-gray-300 p-2">Thursday</td>
      <td class="border border-gray-300 p-2">2nd October 2025</td>
      <td class="border border-gray-300 p-2">Pan India</td>
    </tr>
    <tr>
      <td class="border border-gray-300 p-2">10</td>
      <td class="border border-gray-300 p-2">Diwali</td>
      <td class="border border-gray-300 p-2">Monday</td>
      <td class="border border-gray-300 p-2">20th October 2025</td>
      <td class="border border-gray-300 p-2">Pan India</td>
    </tr>
    <tr>
      <td class="border border-gray-300 p-2">11</td>
      <td class="border border-gray-300 p-2">Diwali-Laxmi Puja</td>
      <td class="border border-gray-300 p-2">Tuesday</td>
      <td class="border border-gray-300 p-2">21st October 2025</td>
      <td class="border border-gray-300 p-2">Pan India</td>
    </tr>
    <tr>
      <td class="border border-gray-300 p-2">12</td>
      <td class="border border-gray-300 p-2">Govardhan Puja</td>
      <td class="border border-gray-300 p-2">Wednesday</td>
      <td class="border border-gray-300 p-2">22nd October 2025</td>
      <td class="border border-gray-300 p-2">Pan India</td>
    </tr>
    <tr>
      <td class="border border-gray-300 p-2">13</td>
      <td class="border border-gray-300 p-2">Guru Nanak's Birthday</td>
      <td class="border border-gray-300 p-2">Wednesday</td>
      <td class="border border-gray-300 p-2">5th November 2025</td>
      <td class="border border-gray-300 p-2">Gurgaon</td>
    </tr>
    <tr>
      <td class="border border-gray-300 p-2">14</td>
      <td class="border border-gray-300 p-2">Christmas Day</td>
      <td class="border border-gray-300 p-2">Thursday</td>
      <td class="border border-gray-300 p-2">25th December 2025</td>
      <td class="border border-gray-300 p-2">Pan India</td>
    </tr>
  </tbody>
</table>`,
      },
      {
        title: " Timesheet Submission on KEKA",
        description:
          "Learn how to submit your timesheets on KEKA for payroll processing.",
        image: "https://img.freepik.com/premium-photo/male-hand-showing-clock-time-management_220873-23689.jpg",

        details: `<div>
  <p>
    You must begin logging your time using the Keka platform. A standard workweek requires <b>40 hours</b> (8 hours per day, Monday - Friday).
  </p>

  <p>
    During onboarding (pre-SAP activation), use the task <b>"Learning and Development"</b> for non-billable entries (e.g., policy submission, setup).
  </p>

  <p>Once your SAP ID is active:</p>
  <ul>
    <li>• Switch to your assigned billable task (e.g., <b>“Development”</b>).</li>
    <li>• Add one-liner daily comments to describe work completed.</li>
    <li>Daily updates are preferred. Weekly submission by Friday EOD is allowed but <b>not encouraged</b> to prevent delays or payroll impact.</li>
  </ul>
</div>
`,
      },
      {
        title: "Ticket Raising on Keka",
        description:
          " Guidelines to raise tickets on KEKA for any technical or HR issues.",
        image: "https://media.istockphoto.com/id/1423369897/photo/call-center-worker.jpg?s=612x612&w=0&k=20&c=KaxWNnsroknjxkXjfJijLhmdomOGFt4T-RwUF0qK3hc=",

        details: `<div>
  <p>
    If you face technical issues on Keka, use the Helpdesk tab under <b>“Me”</b> on Keka.
  </p>
  <p>Follow this order for faster resolution:</p>
  <ol class="list-decimal list-inside">
    <li>Identify the issue (e.g., access error, timesheet glitch).</li>
    <li>Inform the PMO first; they may resolve it directly or escalate internally.</li>
    <li>Raise a Helpdesk ticket in Keka.</li>
    <li>Share the ticket number with PMO for tracking.</li>
  </ol>
</div>
`,
      },
    ],
  },
  {
    phase: "Phase 2",
    subheading: "Korn Ferry Onboarding",
    description:
      "Post-SAP activities and team introductions for smooth transition.",
    steps: [
      {
        title: " Post-SAP Access and Manager Introduction",
        description:
          "Meet your manager and team for introductions and next steps.",
        image: "https://img.freepik.com/premium-photo/two-confident-business-man-shaking-hands-meeting-office_33755-7713.jpg",

        details: `<div>
  <p>
    After your Hoonartek onboarding is complete, the next phase includes:
  </p>
  <ul class="list-disc list-inside">
    <li><b>SAP ID</b> creation and credential setup</li>
    <li>Access to Korn Ferry systems (Outlook, Teams, VPN, etc.)</li>
    <li>Introduction to Korn Ferry project leads and tools</li>
  </ul>

  <p>The PMO will coordinate your introduction with your Korn Ferry manager. Introduction may occur:</p>
  <ul class="list-disc list-inside">
    <li>As a 1:1 session (preferred by some managers)</li>
    <li>Or during a daily stand-up (for team-wide introduction)</li>
  </ul>

  <p>
    Your meeting invite will be shared via Outlook.<br/>
    <b>No updates after SAP activation?</b> Contact PMO without delay.
  </p>
</div>
`,
      },
    ],
  },
];

const Onboarding: React.FC = () => {
  const navigate = useNavigate();

  const [hoveredPhaseIndex, setHoveredPhaseIndex] = useState<number | null>(null);

  // Navigate to Learn More page
  const handleLearnMore = useCallback(
    (phaseIndex: number, stepIndex: number) => {
      navigate("/learnmore", { state: { phaseIndex, stepIndex } });
    },
    [navigate]
  );

  // Card animation variants
  const cardVariants = (isLeft: boolean): Variants => ({
    hidden: { opacity: 0, x: isLeft ? -100 : 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 60, damping: 12 },
    },
  });

  return (
    <div
      className="bg-gradient-to-b from-green-50 to-blue-50 text-gray-800 min-h-screen relative font-sans transition-colors duration-300"
    >
      {/* Header Section */}
      <div className="h-[80vh] bg-black relative w-full overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://cdn.buttercms.com/s5MfYnxMTs2lHXpiW6sp')",
          }}
        />
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/2 right-0 w-[150%] h-[300%] bg-black opacity-30 rotate-[45deg] z-20 pointer-events-none origin-top-right"
        />
        <Navbar />

        {/* ONBOARDING Heading */}
        <div className="relative px-6 text-center mt-[32vh]">
          <h1 className="text-9xl font opacity-900">
            <span
              className="inline-block skew-x-[-10deg]"
              style={{ color: "#48bb78" }}
            >
              <span className="font-bold text-cyan-green">ONBOARDING</span>
            </span>
          </h1>
        </div>
      </div>

      {/* -------------------- Phases Mapping -------------------- */}
      {onboardingData.map((phase, phaseIndex) => (
        <div key={phaseIndex} className="relative mt-16 mb-24">
          {/* ----- Phase Header ----- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center relative"
          >
            <h2 className="text-5xl font-bold" style={{ color: "#2f855a" }}>
              {phase.phase}
            </h2>
            <h3 className="text-3xl mt-2" style={{ color: "#38a169" }}>
              {phase.subheading}
            </h3>

            {/* Phase Description (hover details) */}
            <div
              className="relative mt-4 group"
              tabIndex={0}
              onMouseEnter={() => setHoveredPhaseIndex(phaseIndex)}
              onMouseLeave={() => setHoveredPhaseIndex(null)}
              onFocus={() => setHoveredPhaseIndex(phaseIndex)}
              onBlur={() => setHoveredPhaseIndex(null)}
              aria-describedby={`phase-details-${phaseIndex}`}
            >
              <p className="max-w-3xl mx-auto">{phase.description}</p>

              {/* Hover Indicator */}
              {hoveredPhaseIndex !== phaseIndex && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  // transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                  className="flex justify-center items-center mt-2 text-green-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 animate-bounce"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  <span className="ml-2 text-sm text-green-700 font-medium">
                    Hover to view details
                  </span>
                </motion.div>
              )}

              {/* Hovered Details */}
              {hoveredPhaseIndex === phaseIndex && phase.details && (
                <motion.div
                  id={`phase-details-${phaseIndex}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 text-base shadow rounded p-4 w-3/4 mx-auto text-gray-800 bg-white"
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: phase.details.replace(/\n/g, "<br/>"),
                    }}
                  />
                </motion.div>
              )}
            </div>

            <div
              className="border-t-2 w-1/2 mx-auto mt-8"
              style={{ borderColor: "#9ae6b4" }}
            />
          </motion.div>

          {/* Timeline & Steps */}
          <div className="relative mt-16 max-w-7xl mx-auto">
            {/* Vertical Timeline */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 w-1 top-0 bottom-0 z-0"
              style={{ backgroundColor: "#68d391" }}
            ></div>

            {/* Steps Mapping */}
            {phase.steps.map((step, stepIndex) => {
              const isLeft = stepIndex % 2 === 0;
              const [ref, inView] = useInView({
                triggerOnce: true,
                threshold: 0.2,
              });

              return (
                <motion.div
                  ref={ref}
                  key={stepIndex}
                  className={`relative flex flex-col md:flex-row items-center z-10 mb-12 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  variants={cardVariants(isLeft)}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  {/* Timeline Node */}
                  <div
                    className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 text-white font-bold rounded-full border-4 flex items-center justify-center shadow z-20"
                    style={{
                      backgroundColor: "#2f855a",
                      borderColor: "#ffffff",
                    }}
                  >
                    {stepIndex + 1}
                  </div>

                  {/* ----- Step Content ----- */}
                  <div
                    className={`md:w-1/2 p-4 rounded-2xl ${
                      isLeft ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"
                    } mt-[-40px] md:mt-0`}
                  >
                    <div
                      className={`${
                        isLeft ? "md:ml-auto md:pr-6" : "md:mr-auto md:pl-6"
                      } max-w-md`}
                    >
                      <h4 className="text-xl font-bold" style={{ color: "#2f855a" }}>
                        {step.title}
                      </h4>
                      <p className="mt-2">{step.description}</p>

                      {/* Learn More Button */}
                      <motion.button
                        whileHover={{scale: 1.08, boxShadow: "0px 8px 25px rgba(72, 187, 120, 0.6)" }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        onClick={() => handleLearnMore(phaseIndex, stepIndex)}
                         className="relative inline-block mt-4 px-6 py-3 rounded-full shadow-md overflow-hidden text-white font-semibold tracking-wide
                                    bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800
                                    focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300"
                      >
                        Learn More →
                      </motion.button>
                    </div>
                  </div>

                  {/* ----- Step Image ----- */}
                  <div
                    className={`md:w-1/2 flex justify-center md:justify-${
                      isLeft ? "start" : "end"
                    }`}
                  >
                    <div className="overflow-hidden rounded-2xl shadow-lg md:w-2/3 relative group">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-72 object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Onboarding;
