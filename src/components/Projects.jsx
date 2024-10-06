import React from "react";
import RTools from "../../public/images/rtools.PNG";
import Portfolio from "../../public/images/portfolio.PNG";
import NoCode from "../../public/images/noCode.PNG";
import RoseHack from "../../public/images/rosehack.PNG";
import CutieHack from "../../public/images/cutiehack.PNG";
import DesignVerse from "../../public/images/designverse.PNG";
import ACM from "../../public/images/acm.PNG";
import EWB from "../../public/images/ewb.PNG";
import CarAnti from "../../public/images/carAntitheft.jpg"; // Placeholder for the Car Antitheft App image
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai"; // Importing an arrow icon
import { FaBan } from "react-icons/fa"; // Importing the ban icon

const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* No Code Website Builder */}
      <div className="bg-gray-700 p-4 rounded-lg shadow-md border border-gray-500 cursor-not-allowed relative">
        <FaBan className="absolute top-4 right-4 text-red-600 text-2xl" />
        <Image
          src={NoCode}
          alt="No Code Website Builder"
          className="rounded-t-lg w-full object-cover h-40"
        />
        <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-400">
          No Code Website Builder (Not Clickable)
        </h3>
        <p className="text-gray-400">
          A platform that allows users to build websites without writing any
          code, offering drag-and-drop features and customizable templates.
        </p>
        <div className="text-blue-300 font-bold">Confidential Project</div>
        <div className="text-blue-300 font-bold">Details Available Upon Request</div>
      </div>

      {/* Car Antitheft App */}
      <div className="bg-gray-700 p-4 rounded-lg shadow-md border border-gray-500 cursor-not-allowed relative">
        <FaBan className="absolute top-4 right-4 text-red-600 text-2xl" />
        <Image
          src={CarAnti}
          alt="Car Antitheft App"
          className="rounded-t-lg w-full object-cover h-40"
        />
        <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-400">
          Car Antitheft App (Not Clickable)
        </h3>
        <p className="text-gray-400">
          A mobile app developed to help users secure their vehicles with
          advanced tracking and alert systems.
        </p>
        <div className="text-blue-300 font-bold">Protected by NDA</div>
        <div className="text-blue-300 font-bold">Details Available Upon Request</div>
      </div>

      {/* Computer Science Educational Platform */}
      <a
        href="https://rtools.ucrhighlanders.org/"
        className="bg-gray-700 p-4 rounded-lg shadow-md transform transition-transform hover:scale-105 hover:bg-gray-600 cursor-pointer border border-transparent hover:border-blue-400"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={RTools}
          alt="CS Educational Platform"
          className="rounded-t-lg w-full object-cover h-40"
        />
        <h3 className="text-xl font-semibold mt-4 mb-2 hover:text-blue-400">
          Computer Science Educational Platform{" "}
          <AiOutlineArrowRight className="inline" />
        </h3>
        <p>
          An interactive platform providing resources and tutorials for students
          to learn computer science concepts.
        </p>
      </a>

      {/* Rose Hack */}
      <a
        href="https://www.rosehack.com/"
        className="bg-gray-700 p-4 rounded-lg shadow-md transform transition-transform hover:scale-105 hover:bg-gray-600 cursor-pointer border border-transparent hover:border-blue-400"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={RoseHack}
          alt="Rose Hack"
          className="rounded-t-lg w-full object-cover h-40"
        />
        <h3 className="text-xl font-semibold mt-4 mb-2 hover:text-blue-400">
          Rose Hack <AiOutlineArrowRight className="inline" />
        </h3>
        <p>
          Hackathon project created to inspire women in technology by solving
          real-world problems through coding.
        </p>
      </a>

      {/* Cutie Hack */}
      <a
        href="https://cutiehack.com/"
        className="bg-gray-700 p-4 rounded-lg shadow-md transform transition-transform hover:scale-105 hover:bg-gray-600 cursor-pointer border border-transparent hover:border-blue-400"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={CutieHack}
          alt="Cutie Hack"
          className="rounded-t-lg w-full object-cover h-40"
        />
        <h3 className="text-xl font-semibold mt-4 mb-2 hover:text-blue-400">
          Cutie Hack <AiOutlineArrowRight className="inline" />
        </h3>
        <p>
          Hackathon project that focuses on inclusivity, providing an
          opportunity for first-time hackers to build innovative solutions.
        </p>
      </a>

      {/* DesignVerse */}
      <a
        href="https://www.designverseucr.org/"
        className="bg-gray-700 p-4 rounded-lg shadow-md transform transition-transform hover:scale-105 hover:bg-gray-600 cursor-pointer border border-transparent hover:border-blue-400"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={DesignVerse}
          alt="DesignVerse"
          className="rounded-t-lg w-full object-cover h-40"
        />
        <h3 className="text-xl font-semibold mt-4 mb-2 hover:text-blue-400">
          DesignVerse <AiOutlineArrowRight className="inline" />
        </h3>
        <p>
          A collaborative platform for designers to share ideas, build
          prototypes, and get feedback from the community.
        </p>
      </a>

      {/* Association for Computing Machinery Website */}
      <a
        href="https://acm.cs.ucr.edu/"
        className="bg-gray-700 p-4 rounded-lg shadow-md transform transition-transform hover:scale-105 hover:bg-gray-600 cursor-pointer border border-transparent hover:border-blue-400"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={ACM}
          alt="ACM Website"
          className="rounded-t-lg w-full object-cover h-40"
        />
        <h3 className="text-xl font-semibold mt-4 mb-2 hover:text-blue-400">
          Association for Computing Machinery Website{" "}
          <AiOutlineArrowRight className="inline" />
        </h3>
        <p>
          A website built for the ACM chapter, featuring event updates,
          resources, and opportunities for student developers.
        </p>
      </a>

      {/* Engineers Without Borders Website */}
      <a
        href="https://ewb.ucrhighlanders.org/"
        className="bg-gray-700 p-4 rounded-lg shadow-md transform transition-transform hover:scale-105 hover:bg-gray-600 cursor-pointer border border-transparent hover:border-blue-400"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={EWB}
          alt="EWB Website"
          className="rounded-t-lg w-full object-cover h-40"
        />
        <h3 className="text-xl font-semibold mt-4 mb-2 hover:text-blue-400">
          Engineers Without Borders Website{" "}
          <AiOutlineArrowRight className="inline" />
        </h3>
        <p>
          A website built for Engineers Without Borders to highlight their
          community projects and social impact.
        </p>
      </a>

      {/* Portfolio Site */}
      <a
        href="/portfolio/#"
        className="bg-gray-700 p-4 rounded-lg shadow-md transform transition-transform hover:scale-105 hover:bg-gray-600 cursor-pointer border border-transparent hover:border-blue-400"
        rel="noopener noreferrer"
      >
        <Image
          src={Portfolio}
          alt="Portfolio Site"
          className="rounded-t-lg w-full object-cover h-40"
        />
        <h3 className="text-xl font-semibold mt-4 mb-2 hover:text-blue-400">
          Portfolio Site <AiOutlineArrowRight className="inline" />
        </h3>
        <p>
          A personal website showcasing my skills, projects, and experiences as
          a developer.
        </p>
      </a>
    </div>
  );
};

export default Projects;
