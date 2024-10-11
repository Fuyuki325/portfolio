"use client";
import { useState, useEffect, useRef, lazy, Suspense, useMemo } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa6";

const SkillsSection = lazy(() => import("@/components/SkillsSection"));
const Projects = lazy(() => import("@/components/Projects"));
const Contact = lazy(() => import("@/components/Contact"));

const workExperience = [
  {
    title: "Software Engineer for AI Training Data",
    company: "Outlier",
    duration: "Oct 2024 -- Present",
    responsibilities: [
      "Reviewed AI-generated code outputs to identify errors and ensure adherence to best practices, collaborating with engineers to refine training datasets and improve model performance.",
      "Provided feedback on coding patterns and optimizations, contributing to both AI advancements and overall system accuracy.",
      "Collaborated with cross-functional teams on code quality, leveraging this experience to further enhance frontend-related development work.",
    ],
  },
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
    company: "Association for Computing Machinery.",
    duration: "May 2021 -- Feb 2023",
    responsibilities: [
      "Developed intuitive and responsive interfaces for a new web application, enhancing user interaction and satisfaction by integrating modern design principles and performance optimizations.",
      "Collaborated on the improvement and maintenance of application components, addressing bugs and optimizing functionality to deliver a seamless user experience.",
      "Contributed to the integration of various APIs and services, ensuring smooth data flow and functionality across the application’s features.",
    ],
  },
];

const organizationalExperiences = [
  {
    title: "Lead Frontend Developer",
    company: "RTools",
    duration: "Mar 2023 -- Sep 2023",
    responsibilities: [
      "Led the development of RTools, a visual learning platform for computer science students focusing on data structures and algorithms.",
      "Developed reusable frontend components, improving the scalability and maintainability of the web application.",
      "Collaborated with designers to ensure that user interfaces were visually appealing and responsive across multiple devices.",
      "Tested and optimized the performance of various frontend features, enhancing user interaction and satisfaction.",
    ],
  },
  {
    title: "Senior Frontend Developer",
    company: "DesignVerse",
    duration: "Jul 2022 -- Feb 2023",
    responsibilities: [
      "Created visually engaging web interfaces for a design-based application, improving user engagement.",
      "Collaborated with UX/UI designers to enhance the user flow and improve the application’s overall usability.",
      "Developed and optimized web components using modern JavaScript frameworks, reducing code complexity and enhancing maintainability.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Rose Hack",
    duration: "Jan 2022 -- Jun 2022",
    responsibilities: [
      "Led development workshops for participants, guiding them through web application development using HTML, CSS, and JavaScript.",
      "Contributed to the design and implementation of the event's web application, ensuring smooth user experience and mobile responsiveness.",
      "Worked with cross-functional teams to improve site functionality and optimize loading speeds, enhancing user engagement.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Cutie Hack",
    duration: "Jun 2021 -- Jun 2021",
    responsibilities: [
      "Designed intuitive and responsive web interfaces for a hackathon management platform, improving user satisfaction and ease of use.",
      "Optimized front-end code to improve site performance and reduce loading times, ensuring a seamless user experience.",
      "Collaborated with teams to resolve technical challenges and incorporate feedback, enhancing overall platform functionality.",
    ],
  },
  {
    title: "Junior Frontend Developer",
    company: "Engineers Without Borders",
    duration: "Oct 2020 -- May 2021",
    responsibilities: [
      "Designed and implemented multilingual web interfaces to increase accessibility for users globally, improving the overall reach and engagement of the platform.",
      "Collaborated with backend engineers to integrate APIs and ensure data flow across all key components, enhancing site functionality and performance.",
      "Enhanced user engagement by developing interactive features, improving the overall user experience and satisfaction.",
    ],
  },
];


export default function Home() {
  const titles = ["Software Engineer", "Programmer", "Frontend Developer"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [blinkVisible, setBlinkVisible] = useState(false);
  const typingSpeed = 150;
  const pauseBetweenTitles = 1500;
  const canvasRef = useRef(null);

  const scrollRef = useRef(null); // Create a ref for the contact section

  // Function to handle smooth scroll
  const scrollToAbout = () => {
    if (scrollRef.current) {
      const yOffset = -140; // Adjust this value based on how much you want to offset
      const y =
        scrollRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

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
      ctx.fillStyle = "rgba(0, 0, 0, 0.02)"; // Reduced opacity for better performance
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

    const interval = setInterval(draw, 50); // Increased interval to reduce draw frequency
    return () => clearInterval(interval);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const sections = useMemo(
    () => [
      {
        title: "About Me",
        content: (
          <div ref={scrollRef}>
            Hi, I’m Fuyuki! I’m a passionate Frontend Developer with 4+ years of
            experience in building scalable web applications. I love coding,
            solving problems, and turning ideas into reality. My tech stack
            includes React, Node.js, AWS, and more.
          </div>
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
        title: "Organizational Experience",
        content: (
          <div className="space-y-8">
            {organizationalExperiences.map((job, index) => (
              <div key={index} className="bg-gray-700 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">
                  {job.title} @ {job.company}
                </h3>
                <p className="text-gray-300">{job.duration}</p>
                <ul className="list-disc text-left pl-5 text-gray-200">
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
          <Suspense fallback={<div>Loading...</div>}>
            <SkillsSection />
          </Suspense>
        ),
      },
      {
        title: "Projects",
        content: (
          <Suspense fallback={<div>Loading...</div>}>
            <Projects />
          </Suspense>
        ),
      },
      {
        title: "Get In Touch",
        content: (
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
        ),
      },
    ],
    []
  );

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
                className="ml-1 text-blue-500 font-bold text-4xl"
                style={{
                  visibility: blinkVisible ? "visible" : "hidden",
                  width: "0.5em",
                }}
              >
                |
              </span>
            </p>
          </div>
          <div className="flex flex-col items-center pt-7">
            <p className="text-lg text-white mb-2">Scroll down to learn more</p>
            <button
              onClick={scrollToAbout} // Call the smooth scroll function on click
              className="px-6 py-3 bg-blue-500 bg-opacity-90 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 z-10 relative flex items-center"
            >
              Scroll Down
              <FaChevronDown className="ml-2 text-white text-2xl animate-bounce" />
            </button>
          </div>
        </motion.div>
      </section>
      {sections.map((section, index) => (
        <section
          key={index}
          className="py-16 px-4"
          id={section.title.toLowerCase().replace(" ", "-")}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-4">{section.title}</h2>
            <div className="text-lg">{section.content}</div>
          </motion.div>
        </section>
      ))}
      <footer className="py-8 text-center bg-gray-700">
        <p className="text-gray-300">
          © 2024 Fuyuki Malahom. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
