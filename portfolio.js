import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const App = () => {
  return (
    <div className="font-sans text-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4 flex justify-between px-10">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <div>
          <a href="#about" className="mx-3">About</a>
          <a href="#projects" className="mx-3">Projects</a>
          <a href="#contact" className="mx-3">Contact</a>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center">
        <h2 className="text-5xl font-bold">Hello, I'm [Your Name]</h2>
        <p className="mt-4 text-lg">Frontend Developer | React Enthusiast</p>
        <a href="#projects" className="mt-6 px-6 py-3 bg-white text-blue-500 rounded-full">View My Work</a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-10 text-center">
        <h2 className="text-4xl font-bold">About Me</h2>
        <p className="mt-4 max-w-2xl mx-auto">I'm a passionate frontend developer who loves creating sleek, responsive, and dynamic web applications.</p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-100 px-10 text-center">
        <h2 className="text-4xl font-bold">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-xl font-semibold">Project 1</h3>
            <p className="text-gray-600">A brief description of the project.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-xl font-semibold">Project 2</h3>
            <p className="text-gray-600">A brief description of the project.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-xl font-semibold">Project 3</h3>
            <p className="text-gray-600">A brief description of the project.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-10 text-center">
        <h2 className="text-4xl font-bold">Contact Me</h2>
        <div className="flex justify-center mt-4 space-x-6">
          <a href="#" className="text-2xl"><FaGithub /></a>
          <a href="#" className="text-2xl"><FaLinkedin /></a>
          <a href="#" className="text-2xl"><FaEnvelope /></a>
        </div>
      </section>
    </div>
  );
};

export default App;
