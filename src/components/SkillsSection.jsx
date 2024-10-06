import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaJava } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMysql, SiFirebase, SiD3Dotjs } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { GrGraphQl } from "react-icons/gr";

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

    {/* Skill 9 */}
    <div className="bg-gray-700 p-4 rounded-lg shadow-md">
      <FaJava className="text-red-600 text-4xl mb-2" />
      <h3 className="text-xl font-semibold mb-2">Java</h3>
      <p>High-level, class-based programming language.</p>
    </div>

    {/* Skill 10 */}
    <div className="bg-gray-700 p-4 rounded-lg shadow-md">
      <SiMysql className="text-blue-600 text-4xl mb-2" />
      <h3 className="text-xl font-semibold mb-2">SQL</h3>
      <p>Standard language for managing relational databases.</p>
    </div>

    {/* Skill 11 */}
    <div className="bg-gray-700 p-4 rounded-lg shadow-md">
      <SiFirebase className="text-yellow-500 text-4xl mb-2" />
      <h3 className="text-xl font-semibold mb-2">Firebase</h3>
      <p>Platform for building mobile and web applications with real-time databases.</p>
    </div>

    {/* Skill 12: GraphQL */}
    <div className="bg-gray-700 p-4 rounded-lg shadow-md">
      <GrGraphQl className="text-pink-500 text-4xl mb-2" />
      <h3 className="text-xl font-semibold mb-2">GraphQL</h3>
      <p>Query language for APIs and a runtime for executing those queries.</p>
    </div>

    {/* Skill 13: D3.js */}
    <div className="bg-gray-700 p-4 rounded-lg shadow-md">
      <SiD3Dotjs className="text-orange-500 text-4xl mb-2" />
      <h3 className="text-xl font-semibold mb-2">D3.js</h3>
      <p>JavaScript library for producing dynamic, interactive data visualizations in web browsers.</p>
    </div>
  </div>
);

export default SkillsSection;
