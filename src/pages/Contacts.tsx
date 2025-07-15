import React from "react";
import Navbar from "../components/Navbar";

const departments = [
  {
    name: "Human Resources (HR)",
    responsibility: "Onboarding forms, induction sessions, and internal policy clarification.",
    primaryContact: "hr@company.com",
    altContact: "hr.alt@company.com",
  },
  {
    name: "Project Management Office (PMO)",
    responsibility: "SAP ID initiation, KF policy circulation, and scheduling your manager meets.",
    primaryContact: "pmo@company.com",
    altContact: "pmo.alt@company.com",
  },
  {
    name: "IT Support",
    responsibility:  "VPN configuration, Microsoft Authenticator setup, and laptop system.",
    primaryContact: "itsupport@company.com",
    altContact: "itsupport.alt@company.com",
  },
  {
    name: "Asset Management",
    responsibility: "Dispatch of allocated laptops and coordination for physical asset handover.",
    primaryContact: "assets@company.com",
    altContact: "assets.alt@company.com",
  },
  {
    name: "Timesheet (Keka)",
    responsibility: "Login support, timesheet entry guidance, and portal issue resolution.",
    primaryContact: "timesheet@company.com",
    altContact: "timesheet.alt@company.com",
  },
  {
    name: "Buddy Support",
    responsibility: "Assisting with initial informal queries, day-to-day task understanding, and guidance on processes.",
    primaryContact: "buddy@company.com",
    altContact: "buddy.alt@company.com",
  },
  {
    name: "Learning & Development",
    responsibility: "Organizational training sessions, learning and development.",
    primaryContact: "learning@company.com",
    altContact: "learning.alt@company.com",
  },
];

const Contacts: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-left mb-3">Department wise</h2>
        <h1 className="text-4xl font-bold text-left text-green-500 mb-8">Go-to Contacts</h1>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-10 gap-6">
            {/* Left: Text Content */}
            <div className="md:w-3/5">
                <p className="text-black mb-10">
                During your onboarding and initial project journey, several departments will support
                you with various responsibilities. Below is a list of key departments, their areas of
                responsibility, and the primary contacts to reach out to when needed.
                </p>
                

                <div className="text-left text-black mb-10">
                    <h2 className="text-2xl font-semibold mb-4">Communication Guidelines</h2>
                    <ul className="list-disc list-inside text-left inline-block">
                        <li>Use KF Outlook for all project communication.</li>
                        <li>Maintain polite, concise, and professional tone.</li>
                        <li>Keep your POD lead and PMO in loop for major updates.</li>
                        <li>Daily stand-up updates should be brief and focused.</li>
                        <li>Use MS Teams chat responsibly; avoid off-topic discussions.</li>
                    </ul>
                </div>
            </div>

            {/* Right: Image */}
            <div className="md:w-2/5 flex-shrink-0">
                <img
                src="/assets/contact-us.jpg" // Change path as per your setup
                alt="Onboarding illustration"
                className="w-full h-auto rounded-xl shadow-sm"
                />
            </div>
        </div>

        <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {departments.map((dept) => (
                <div
                key={dept.name}
                className="bg-white rounded-2xl shadow-md text-center p-5 hover:shadow-lg transition"
                >
                <h2 className="text-xl font-semibold mb-2">{dept.name}</h2>
                <p className="text-gray-600 mb-3">{dept.responsibility}</p>
                <div className="text-sm">
                    <p>
                    <span className="font-medium">Primary:</span>{" "}
                    {dept.primaryContact}
                    </p>
                    <p>
                    <span className="font-medium">Alternate:</span>{" "}
                    {dept.altContact}
                    </p>
                </div>
                </div>
            ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
