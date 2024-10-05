"use client";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const titles = ["Programmer", "Software Engineer", "Full Stack Developer"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150;
  const pauseBetweenTitles = 1500;
  const canvasRef = useRef(null); // Reference for the canvas

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
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = "0123456789ABCDEF";
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(0); // Start each drop at 0

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; // Fading background
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00ff00"; // Code color
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, x) => {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, x * fontSize, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[x] = 0; // Reset drop position
        } else {
          drops[x]++; // Move drop down
        }
      });
    }

    const interval = setInterval(draw, 33); // Drawing every 33ms
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Canvas for code rain effect */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0"></canvas>

      {/* Content */}
      <div className="relative z-10">
        <div className="w-full bg-gray-900 px-6 py-4 shadow-lg border-b border-gray-700">
          <h1 className="text-3xl font-bold tracking-wider">Fuyuki&lsquo;s Portfolio</h1>
        </div>
        <div className="flex items-center justify-center h-full">
          <div className="font-mono bg-gray-700/70 w-[80%] h-[70%] rounded-lg shadow-2xl p-8 flex flex-col items-center justify-center backdrop-blur-lg">
            <h1 className="text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Fuyuki Malahom
            </h1>
            <p className="text-3xl font-light tracking-widest">{displayedTitle}</p>
            <div className="w-full bg-gray-800 h-1 rounded-full mt-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
