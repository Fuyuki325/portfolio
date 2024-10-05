"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Home() {
  const titles = ["Programmer", "Software Engineer", "Full Stack Developer"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [blinkVisible, setBlinkVisible] = useState(true); // Blinking cursor
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

  // Animation variants for sections
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const sections = [
    {
      title: "About Me",
      content: (
        <>
          Hi, I’m Fuyuki! I’m a passionate Full Stack Developer with 4+ years of experience in building scalable web applications. I love coding, solving problems, and turning ideas into reality. My tech stack includes React, Node.js, AWS, and more.
        </>
      ),
    },
    {
      title: "Skills",
      content: (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">React</h3>
            <p>Frontend framework for building dynamic UIs.</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Node.js</h3>
            <p>Backend JavaScript runtime environment.</p>
          </div>
          {/* Add more skills */}
        </div>
      ),
    },
    {
      title: "Projects",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Project 1</h3>
            <p>A description of your first project goes here.</p>
            <a href="#" className="text-blue-400 hover:underline">
              View Project
            </a>
          </div>
          {/* Add more project cards */}
        </div>
      ),
    },
    {
      title: "Get In Touch",
      content: (
        <>
          Want to work with me? Reach out via email! <br />
          <a href="mailto:fuyuki@example.com" className="text-blue-400 hover:underline">fuyuki@example.com</a>
        </>
      ),
    },
  ];

  return (
    <div className="h-full bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden hide-scrollbar">
      {/* Canvas for code rain effect */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0"></canvas>

      {/* Hero Section */}
      <section className="relative z-10 h-screen flex items-center justify-center flex-col">
        {/* Darker Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black/60 z-0 backdrop-blur-sm"></div>
        <div>
          {/* Name with brighter text and shadow */}
          <h1 className="text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 z-10 drop-shadow-lg text-center">
            Fuyuki Malahom
          </h1>

          {/* Job title with a fixed height */}
          <div className="h-10">
            {" "}
            {/* Adjust height as necessary */}
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

          {/* Call to Action Button */}
          <div className="flex justify-center pt-7">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-500 bg-opacity-90 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 z-10 relative"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Dynamic Sections */}
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
            <p className="text-lg leading-relaxed">{section.content}</p>
          </div>
        </motion.section>
      ))}

      {/* Footer */}
      <footer className="relative z-10 bg-gray-800 py-6 text-center text-gray-400">
        <p>© 2024 Fuyuki Malahom. All rights reserved.</p>
      </footer>
    </div>
  );
}
