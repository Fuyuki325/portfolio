import { FaReact, FaNodeJs, FaServer, FaTypeScript, FaCss3Alt } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';

const skillsData = [
  {
    icon: <FaReact className="text-blue-500 text-4xl mb-2" />, // React icon
    title: "React",
    description: "Frontend framework for building dynamic UIs."
  },
  {
    icon: <FaNodeJs className="text-green-500 text-4xl mb-2" />, // Node.js icon
    title: "Node.js",
    description: "Backend JavaScript runtime environment."
  },
  {
    icon: <SiNextdotjs className="text-black text-4xl mb-2" />, // Next.js icon
    title: "Next.js",
    description: "Framework for building server-rendered React applications."
  },
  {
    icon: <FaTypeScript className="text-blue-600 text-4xl mb-2" />, // TypeScript icon
    title: "TypeScript",
    description: "JavaScript with static type definitions."
  },
  {
    icon: <SiTailwindcss className="text-cyan-400 text-4xl mb-2" />, // TailwindCSS icon
    title: "TailwindCSS",
    description: "Utility-first CSS framework for rapid UI development."
  }
];

const SkillsSection = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {skillsData.map((skill, index) => (
      <div key={index} className="bg-gray-700 p-4 rounded-lg shadow-md">
        {skill.icon}
        <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
        <p>{skill.description}</p>
      </div>
    ))}
  </div>
);

export default SkillsSection;