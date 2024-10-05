import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

const SkillsSection = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {/* Skill 1 */}
    <div className="bg-gray-700 p-4 rounded-lg shadow-md">
      <FaReact className="text-blue-500 text-4xl mb-2" />
      <h3 className="text-xl font-semibold mb-2">React</h3>
      <p>Frontend framework for building dynamic UIs.</p>
    </div>

    {/* Skill 2 */}
    <div className="bg-gray-700 p-4 rounded-lg shadow-md">
      <FaNodeJs className="text-green-500 text-4xl mb-2" />
      <h3 className="text-xl font-semibold mb-2">Node.js</h3>
      <p>Backend JavaScript runtime environment.</p>
    </div>

    {/* Skill 3 */}
    <div className="bg-gray-700 p-4 rounded-lg shadow-md">
      <SiNextdotjs className="text-black text-4xl mb-2" />
      <h3 className="text-xl font-semibold mb-2">Next.js</h3>
      <p>Framework for building server-rendered React applications.</p>
    </div>

    {/* Skill 4 */}
    <div className="bg-gray-700 p-4 rounded-lg shadow-md">
      <BiLogoTypescript className="text-blue-600 text-4xl mb-2" />
      <h3 className="text-xl font-semibold mb-2">TypeScript</h3>
      <p>JavaScript with static type definitions.</p>
    </div>

    {/* Skill 5 */}
    <div className="bg-gray-700 p-4 rounded-lg shadow-md">
      <SiTailwindcss className="text-cyan-400 text-4xl mb-2" />
      <h3 className="text-xl font-semibold mb-2">TailwindCSS</h3>
      <p>Utility-first CSS framework for rapid UI development.</p>
    </div>

    {/* Skill 6 */}
    <div className="bg-gray-700 p-4 rounded-lg shadow-md">
      <FaHtml5 className="text-orange-600 text-4xl mb-2" />
      <h3 className="text-xl font-semibold mb-2">HTML5</h3>
      <p>Markup language for structuring web content.</p>
    </div>

    {/* Skill 7 */}
    <div className="bg-gray-700 p-4 rounded-lg shadow-md">
      <FaCss3Alt className="text-blue-600 text-4xl mb-2" />
      <h3 className="text-xl font-semibold mb-2">CSS3</h3>
      <p>Style sheet language for describing the look of web pages.</p>
    </div>

    {/* Skill 8 */}
    <div className="bg-gray-700 p-4 rounded-lg shadow-md">
      <FaJs className="text-yellow-500 text-4xl mb-2" />
      <h3 className="text-xl font-semibold mb-2">JavaScript</h3>
      <p>High-level, dynamic programming language for web development.</p>
    </div>
  </div>
);

export default SkillsSection;
