import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";
import profileImg from "../assets/profile.png";
import mitLogo from "../assets/mit.png";
import nableLogo from "../assets/nable.png";

import { FaLinkedin, FaMedium, FaGithub } from "react-icons/fa";

export default function About() {
  return (
    <section className="flex flex-col items-center text-center px-4 md:px-8 pt-24 pb-16">
      {/* Profile Image */}
      <Fade triggerOnce>
        <img
          src={profileImg}
          alt="Gihan Liyanage"
          className="w-32 h-32 rounded-full object-cover border-4 border-gray-300 dark:border-gray-600 mb-4"
        />
      </Fade>

      {/* Name */}
      <Fade triggerOnce delay={100}>
        <h1 className="text-[3.25rem]">Gihan Shamike</h1>
      </Fade>

      {/* Typewriter */}
      <Fade triggerOnce delay={200}>
        <h2 className="text-xl text-blue-500 mt-2">
          <Typewriter
            words={["Developer", "Freelancer", "Tech Enthusiast"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
      </Fade>

      {/* Ex-Experience with Logos */}
      <Fade triggerOnce delay={300}>
        <div className="flex flex-wrap justify-center items-center gap-2 mt-4 mb-4 text-base text-gray-700 dark:text-gray-300">
          <span>Ex-Senior Software Engineer at</span>
          <a
            href="https://www.mitesp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={mitLogo} alt="MillenniumIT" className="h-8" />
          </a>
          <span className="mx-1 hidden sm:inline">|</span>
          <span>Ex-Senior Software Engineer at</span>
          <a
            href="https://www.n-able.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={nableLogo} alt="N-able" className="h-5" />
          </a>
        </div>
      </Fade>


      {/* Content Sections */}
      <div className="mt-12 w-full max-w-4xl text-left flex flex-col gap-y-12">
        {/* Me Section */}
        <Fade triggerOnce delay={100} duration={100} cascade>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <h3 className="text-2xl font-semibold w-full md:w-1/4">Me</h3>
            <p className="text-gray-700 dark:text-gray-300 w-full md:w-3/4">
              Hi, I'm Gihan Shamike - a programmer and FileNet developer currently based in London, Ontario, Canada. Originally from Sri Lanka.
              Apart from programming, I enjoy art work, watching sci-fi, and staying active with badminton and cycling.
            </p>
          </div>
        </Fade>

        {/* Specialized Section */}
        <Fade triggerOnce delay={150} duration={100} cascade>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <h3 className="text-2xl font-semibold w-full md:w-1/4">Specialized</h3>
            <p className="text-gray-700 dark:text-gray-300 w-full md:w-3/4">
              I have over 7 years of experience in the IT industry, specializing in enterprise content management using IBM FileNet, 
              Java middleware, and IBM BAW. My background includes customizing ICN, integrating enterprise records, 
              and delivering full-stack solutions. I’m currently focused on modern web development using React, Firebase, and serverless stacks.
            </p>
          </div>
        </Fade>

        {/* Experience Section */}
        <Fade triggerOnce delay={200} duration={100} cascade>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <h3 className="text-2xl font-semibold w-full md:w-1/4">Experience</h3>
            <p className="text-gray-700 dark:text-gray-300 w-full md:w-3/4">
              I’ve worked on several large-scale projects involving IBM FileNet P8, IBM Case Manager, and IBM Enterprise Records,
              primarily using Java, JavaScript, and RESTful Web Services. My experience includes working at MillenniumIT and Nable, where I was responsible for FileNet customization,
              workflow automation, and integrating middleware solutions using IBM WebSphere. My work has helped streamline business processes for clients in sectors such as finance, insurance, and government.
            </p>
          </div>
        </Fade>

        {/* Blog Section */}
        <Fade triggerOnce delay={250} duration={100} cascade>
          <div className="flex flex-col md:flex-row gap-4">
            <h3 className="text-2xl font-semibold w-full md:w-1/4">Blog</h3>
            <p className="text-gray-700 dark:text-gray-300 w-full md:w-3/4">
              I write on Medium to share insights from my journey as a programmer and FileNet developer.
              My blog covers topics like enterprise content management, Java tips, system integration, and lessons learned from real-world projects.
              It's a space where I document solutions, explore new technologies, and connect with others in the developer community.
            </p>
          </div>
        </Fade>
      </div>

      {/* Social Media Links */}
      <Fade triggerOnce delay={300}>
        <div className="mt-12 flex gap-8 justify-center text-gray-600 dark:text-gray-300 text-3xl">
          <a
            href="https://www.linkedin.com/in/gihanzshamike/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://medium.com/@gihanshamikeliyanage"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Medium"
            className="hover:text-green-600 dark:hover:text-green-400 transition"
          >
            <FaMedium />
          </a>

          <a
            href="https://github.com/Gihanz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-900 dark:hover:text-white transition"
          >
            <FaGithub />
          </a>
        </div>
      </Fade>
    </section>
  );
}
