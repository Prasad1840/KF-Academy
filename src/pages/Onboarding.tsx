import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

// Onboarding Data
export const onboardingData = [
  {
    phase: "Phase 1",
    subheading: "Hoonartek Onboarding",
    description:
      "Complete HR formalities and initiate SAP ID process for Korn Ferry systems access.",
     details: `Once you receive onboarding communication from the Hoonartek HR team, your first step will be to complete and submit all required forms. These will be reviewed and, once finalized, some documents will be sent to Korn Ferry by the PMO for further processing.
      Note: If you are an existing Hoonartek employee, you may not be required to resubmit these documents. In such cases, only Korn Ferry-specific policies, circulated by the PMO team, will need your review and acknowledgment.
      Parallelly, you will receive an email from PMO named “DocuSign | Korn Ferry Policies” asking you to acknowledge Korn Ferry’s internal policies. 
      Please complete these promptly. Once documents are approved, the PMO will initiate your SAP ID generation process with Korn Ferry. 
      This SAP ID is like an employee ID for Korn Ferry and is essential for your access to Korn Ferry systems like Microsoft Outlook, Teams, and internal portals.`,
    steps: [
      {
        title: " SAP ID Process Initiation",
        description:
          "We will initiate your SAP ID process to give you access to internal tools and resources.",
        details: `Once you submit all required documents to Hoonartek HR, the PMO shortlists the necessary files including your signed Korn Ferry policy documents and forwards them to the Korn Ferry team.

This begins your SAP ID generation, which is essential for accessing Korn Ferry systems like Outlook and Teams.

Once you receive the SAP ID (via email from the PMO), follow these steps:
1. Contact Korn Ferry IT Support at 0124-4321020 to retrieve your initial password.
2. You will be asked for your full name, SAP ID, and your manager's name (PMO will help if you're unsure).
3. Once your password is shared, log in to your Korn Ferry Outlook account (firstname.lastname@kornferry.com).
4. Reset your password and set up Microsoft Authenticator for secure access.

Action: If SAP ID remains inactive after 1 working day, notify the PMO immediately to avoid delay.`
      },
      {
        title: " Holiday Calendar and Mapping",
        description:
          "You'll receive the holiday calendar and we'll map your schedule accordingly.",
        details: "Regional adjustments based on your location."
      },
      {
        title: " Timesheet Submission on KEKA",
        description:
          "Learn how to submit your timesheets on KEKA for payroll processing.",
        details: "Log daily hours and track approvals."
      },
      {
        title: "Ticket Raising on Keka",
        description: " Guidelines to raise tickets on KEKA for any technical or HR issues.",
        details: `If you face technical issues on Keka, use the Helpdesk tab under “Me” on Keka.
          Follow this order for faster resolution:
1. Identify the issue (e.g., access error, timesheet glitch)
2. Inform the PMO first, they may resolve it directly or escalate internally
3. Raise a Helpdesk ticket in Keka
4. Share the ticket number with PMO for tracking`
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
        details: `After your Hoonartek onboarding is complete, the next phase includes:
           • SAP ID creation and credential setup
• Access to Korn Ferry systems (Outlook, Teams, VPN, etc.)
• Introduction to Korn Ferry project leads and tools

The PMO will coordinate your introduction with your Korn Ferry
manager. Introduction may occur:
• As a 1:1 session (preferred by some managers)
• Or during a daily stand-up (for team-wide introduction)
Your meeting invite will be shared via Outlook.
No updates after SAP activation? Contact PMO without delay`
      },
    ],
  },
];

const Onboarding: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredDescription, setHoveredDescription] = useState(false); 
  // const [showDetails, setShowDetails] = useState(false);
   
  const handleLearnMore = (phaseIndex: number, stepIndex: number) => {
    navigate("/learnmore", { state: { phaseIndex, stepIndex } });
  };

  return (
    <div className="bg-gradient-to-b from-green-50 to-blue-50 min-h-screen p-8 relative font-sans">
      {/* Page Title */}
      <h1 className="text-5xl font-extrabold text-center mb-8 text-green-700 drop-shadow-lg">
        Onboarding
      </h1>

      {onboardingData.map((phase, phaseIndex) => (
        <div key={phaseIndex} className="relative mb-24">
          {/* Phase Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center relative"
          >
            <h2 className="text-5xl font-bold text-green-800 relative">
              {phase.phase}
            </h2>
            <h3 className="text-2xl text-green-600 mt-2">{phase.subheading}</h3>

            {/* Hoverable Description */}
            <div
              className="relative"
              onMouseEnter={() => setHoveredDescription(true)}
              onMouseLeave={() => setHoveredDescription(false)}
            >
              <p className="text-gray-700 mt-3 max-w-2xl mx-auto">
                <span className="expandable-text">
                  {phase.description}
                  {/* Conditionally show details on hover */}
                  {hoveredDescription && (
                    <span className="details-text mt-4 block text-gray-600">
                      {phase.details}
                    </span>
                  )}
                </span>
              </p>
            </div>

            <div className="border-t-2 border-green-300 w-1/2 mx-auto mt-6"></div>
          </motion.div>

          {/* Steps with Vertical Timeline */}
          <div className="relative mt-16">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-green-300 top-0 bottom-0 z-0"></div>

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
                  className={`relative flex flex-col md:flex-row items-center z-10 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6 }}
                >
                  {/* Circle with Step Number */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-green-600 text-white font-bold rounded-full border-4 border-white flex items-center justify-center shadow z-20">
                    {stepIndex + 1}
                  </div>

                  {/* Step Card */}
                  <div
                    className={`md:w-1/2 mt-8 p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-green-100 shadow-lg ${
                      isLeft ? "md:pr-16" : "md:pl-16"
                    }`}
                  >
                    <h4 className="text-xl font-bold text-green-800">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 mt-2">{step.description}</p>

                    {/* Learn More Button */}
                    <button
                      onClick={() => handleLearnMore(phaseIndex, stepIndex)}
                      className="mt-4 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform duration-200 hover:shadow-lg"
                    >
                      Learn More →
                    </button>
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