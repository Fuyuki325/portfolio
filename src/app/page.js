"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

const skillsData = [
  {
    icon: <FaReact className="text-blue-500 text-4xl mb-2" />, // React icon
    title: "React",
    description: "Frontend framework for building dynamic UIs.",
  },
  {
    icon: <FaNodeJs className="text-green-500 text-4xl mb-2" />, // Node.js icon
    title: "Node.js",
    description: "Backend JavaScript runtime environment.",
  },
  {
    icon: <SiNextdotjs className="text-black text-4xl mb-2" />, // Next.js icon
    title: "Next.js",
    description: "Framework for building server-rendered React applications.",
  },
  {
    icon: <SiTypescript className="text-blue-600 text-4xl mb-2" />, // TypeScript icon
    title: "TypeScript",
    description: "JavaScript with static type definitions.",
  },
  {
    icon: <SiTailwindcss className="text-cyan-400 text-4xl mb-2" />, // TailwindCSS icon
    title: "TailwindCSS",
    description: "Utility-first CSS framework for rapid UI development.",
  },
];

const workExperience = [
  {
    title: "Lead Frontend Developer",
    company: "AVOLTA, Inc.",
    duration: "Mar 2023 -- Present",
    responsibilities: [
      "Directed the creation of a sophisticated mobile application, optimizing user experience and performance through strategic architecture and cutting-edge technologies.",
      "Managed a team of engineers to address complex challenges and enhance overall project efficiency.",
      "Established streamlined processes for the frontend development team, focusing on reducing issue resolution time and improving code quality through meticulous task management and rigorous review procedures.",
      "Led the development of key features in a mobile app using React Native and Expo, focusing on creating smooth and efficient user experiences.",
      "Ensured high standards of code quality and team collaboration through the use of code formatting and linting tools.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "AVOLTA, Inc.",
    duration: "May 2021 -- Feb 2023",
    responsibilities: [
      "Developed intuitive and responsive interfaces for a new mobile application, enhancing user interaction and satisfaction by integrating modern design principles and performance optimizations.",
      "Collaborated on the improvement and maintenance of application components, addressing bugs and optimizing functionality to deliver a seamless user experience.",
      "Contributed to the integration of various APIs and services, ensuring smooth data flow and functionality across the application’s features.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "TechSolutions Inc.",
    duration: "Apr 2020 -- Apr 2021",
    responsibilities: [
      "Designed and implemented user-centric web interfaces, improving usability and visual appeal while ensuring responsiveness across devices.",
      "Worked closely with cross-functional teams to enhance the functionality and performance of web applications, addressing user feedback and incorporating best practices.",
      "Optimized front-end performance by refining code and leveraging modern development tools and techniques.",
    ],
  },
  {
    title: "Junior Frontend Developer",
    company: "WebWorks",
    duration: "Jun 2019 -- Mar 2020",
    responsibilities: [
      "Assisted in the development of web applications, focusing on creating clean and efficient code to support various front-end functionalities.",
      "Participated in the redesign of user interfaces, contributing to improved user experiences and overall application performance.",
      "Collaborated with senior developers to troubleshoot issues and implement enhancements based on user feedback and testing results.",
    ],
  },
];

export default function Home() {
  const titles = ["Programmer", "Software Engineer", "Frontend Developer"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [blinkVisible, setBlinkVisible] = useState(false);
  const typingSpeed = 150;
  const pauseBetweenTitles = 1500;
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleTyping = () => {
      const currentTitle = titles[currentTitleIndex];

      if (isDeleting) {
        setDisplayedTitle((prev) => currentTitle.substring(0, prev.length - 1));
      } else {
        setDisplayedTitle((prev) => currentTitle.substring(0, prev.length + 1));
      }

      if (!isDeleting && displayedTitle === currentTitle) {
        setTimeout(() => setIsDeleting(true), pauseBetweenTitles);
      } else if (isDeleting && displayedTitle === "") {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedTitle, isDeleting, currentTitleIndex]);

  useEffect(() => {
    const blinkTimer = setInterval(() => {
      setBlinkVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkTimer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = "0123456789ABCDEF";
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(0);

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00ff00";
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, x) => {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, x * fontSize, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[x] = 0;
        } else {
          drops[x]++;
        }
      });
    }

    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const sections = [
    {
      title: "About Me",
      content: (
        <>
          Hi, I’m Fuyuki! I’m a passionate Frontend Developer with 4+ years of
          experience in building scalable web applications. I love coding,
          solving problems, and turning ideas into reality. My tech stack
          includes React, Node.js, AWS, and more.
        </>
      ),
    },
    {
      title: "Work Experience",
      content: (
        <div className="space-y-8">
          {workExperience.map((job, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">
                {job.title} @ {job.company}
              </h3>
              <p className="text-gray-300">{job.duration}</p>
              <ul className="list-disc text-left pl-5 text-gray-200">
                {" "}
                {/* Adjusted classes */}
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Skills",
      content: (
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
        </div>
      ),
    },
    {
      title: "Projects",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Car Antitheft App</h3>
            <p>
              A mobile app that helps users secure their vehicles through
              advanced tracking and alert features.
            </p>
            <a href="#" className="text-blue-400 hover:underline">
              View Project
            </a>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Portfolio Site</h3>
            <p>
              A personal website showcasing my skills, projects, and experiences
              as a developer.
            </p>
            <a href="#" className="text-blue-400 hover:underline">
              View Project
            </a>
          </div>
          {/* Add more projects as needed */}
        </div>
      ),
    },
    {
      title: "Get In Touch",
      content: (
        <>
          Want to work with me? Reach out via email! <br />
          <a
            href="mailto:fuyuki325@gmail.com"
            className="text-blue-400 hover:underline"
          >
            fuyuki325@gmail.com
          </a>
        </>
      ),
    },
  ];

  return (
    <div className="h-full bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden hide-scrollbar">
      <canvas ref={canvasRef} className="absolute inset-0 z-0"></canvas>
      <section className="relative z-10 h-screen flex items-center justify-center flex-col">
        <div className="absolute inset-0 bg-black/60 z-0 backdrop-blur-sm"></div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 z-10 drop-shadow-lg text-center">
            Fuyuki Malahom
          </h1>
          <div className="h-10">
            <p
              className={`text-3xl font-light tracking-widest z-10 text-white drop-shadow-md text-center transition-opacity duration-300 ${
                displayedTitle ? "opacity-100" : "opacity-0"
              }`}
            >
              {displayedTitle}
              <span
                className={`${blinkVisible ? "inline-block" : "hidden"} ml-1`}
              >
                |
              </span>
            </p>
          </div>
          <div className="flex justify-center pt-7">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-500 bg-opacity-90 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 z-10 relative"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </section>
      {sections.map((section, index) => (
        <motion.section
          key={index}
          className={`relative z-10 py-20 px-10 ${
            index % 2 === 0 ? "bg-gray-800" : "bg-gray-900"
          }`}
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">{section.title}</h2>
            <div className="text-lg leading-relaxed">{section.content}</div>
          </div>
        </motion.section>
      ))}
      <footer className="relative z-10 bg-gray-800 py-6 text-center text-gray-400">
        <p>© 2024 Fuyuki Malahom. All rights reserved.</p>
      </footer>
    </div>
  );
}
