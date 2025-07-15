import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const pods = [
  {
    name: "Pod 1",
    skills: ["React", "Tailwind", "Node.js"],
  },
  {
    name: "Pod 2",
    skills: ["Docker", "React", "Tailwind", "GitHub"],
  },
  {
    name: "Pod 3",
    skills: ["Node.js", "Docker", "GitHub"],
  },
  {
    name: "Pod 4",
    skills: ["React", "Tailwind", "Node.js", "Docker"],
  },
  {
    name: "Pod 5",
    skills: ["GitHub", "React", "Tailwind"],
  }
];

export const allSkills = [
  { name: "React" },
  { name: "Tailwind" },
  { name: "Node.js" },
  { name: "Docker" },
  { name: "GitHub" },
];


export const  SkillPage: React.FC = ()=> {
  const [selectedPod, setSelectedPod] = useState<string | null>(null);
  const navigate = useNavigate();

  const filteredSkills = selectedPod
    ? pods.find((pod) => pod.name === selectedPod)?.skills.map((skillName) =>
        allSkills.find((skill) => skill.name === skillName)
      ).filter(Boolean) // remove undefined
    : allSkills;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Select a Pod</h1>

      {/* Pods */}
      <div className="flex flex-wrap gap-4">
        {pods.map((pod) => (
          <button
            key={pod.name}
            onClick={() => setSelectedPod(pod.name)}
            className={`px-4 py-2 rounded-full border ${
              selectedPod === pod.name
                ? "bg-green-700 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {pod.name}
          </button>
        ))}

        {selectedPod && (
          <button
            onClick={() => setSelectedPod(null)}
            className="ml-4 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600"
          >
            Reset
          </button>
        )}
      </div>

      {/* Skills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredSkills?.map(
          (skill) =>
            skill && (
              <div
                key={skill.name}
                onClick={() => navigate(`/skills/${skill.name.toLowerCase()}`)}
                className="cursor-pointer p-4 rounded-lg shadow hover:bg-gray-100 border"
              >
                <h2 className="text-xl font-medium text-gray-800">{skill.name}</h2>
              </div>
            )
        )}
      </div>
    </div>
  );
}
