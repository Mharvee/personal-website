import React from "react";
import { BrowserRouter } from 'react-router-dom';
import YourRoutes from './YourRoutes'; // or your components

function App() {
  return (
    <BrowserRouter basename="/personal-website">
      <YourRoutes />
    </BrowserRouter>
  );
}
const Section = ({ title, children }) => (
  <section className="space-y-4 animate-fade-in-up">
    <h2 className="text-2xl font-semibold text-blue-300 border-b border-blue-500 pb-1 w-fit">
      {title}
    </h2>
    {children}
  </section>
);

const ProjectCard = ({ title, items }) => (
  <div className="bg-slate-800 rounded-2xl p-5 shadow-xl hover:shadow-blue-500/40 transform hover:scale-[1.02] transition duration-500 space-y-2 border border-slate-700">
    <h3 className="text-xl font-semibold text-blue-200">{title}</h3>
    <ul className="list-disc list-inside text-gray-300 ml-2 space-y-1">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white font-sans p-6 space-y-16">
      {/* HEADER */}
      <header className="text-center space-y-2 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-400 transition-all duration-500 hover:scale-105">
          Marvellous Onohwakpor
        </h1>
        <p className="text-xl md:text-2xl text-gray-300">
          Aspiring AI Security Engineer
        </p>
      </header>

      {/* ABOUT */}
      <Section title="About Me">
        <p className="text-gray-300">
          I'm Marvellous, a curious and passionate learner diving into the exciting intersection of cybersecurity and computer vision. I’m building my skills through hands-on labs, coding projects, and real-world challenges. This portfolio showcases my growth and exploration across both fields.
        </p>
      </Section>

      {/* SKILLS */}
      <Section title="Skills">
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Python, JavaScript, React, Tailwind CSS</li>
          <li>Linux, Nmap, Wireshark</li>
          <li>OpenCV, Image Processing</li>
          <li>TryHackMe, Threat Hunting, SIEM Analysis</li>
        </ul>
      </Section>

{/* PROJECTS */}
<section className="space-y-6 animate-fade-in-up">
  <h2 className="text-2xl font-semibold text-blue-300 border-b border-blue-500 pb-1 w-fit">
    Projects
  </h2>

  {/* Cybersecurity Projects */}
  <div className="bg-white rounded-2xl shadow-lg p-6 transition duration-500 hover:shadow-blue-300">
    <h3 className="text-xl font-bold text-blue-600 mb-4">Cybersecurity</h3>
    <ul className="space-y-2">
      <li className="text-slate-700 hover:text-blue-500 transition-all duration-300">
        ▸ TryHackMe Labs Writeups
      </li>
      <li className="text-slate-700 hover:text-blue-500 transition-all duration-300">
        ▸ Log Analysis with ELK Stack
      </li>
      <li className="text-slate-700 hover:text-blue-500 transition-all duration-300">
        ▸ Firewall Configuration
      </li>
      <li className="text-slate-700 hover:text-blue-500 transition-all duration-300">
        ▸ SIEM Alert Investigation
      </li>
    </ul>
  </div>

  {/* Computer Vision Projects */}
  <div className="bg-white rounded-2xl shadow-lg p-6 transition duration-500 hover:shadow-blue-400">
    <h3 className="text-xl font-bold text-blue-600 mb-4">Computer Vision</h3>
    <ul className="space-y-2">
      <li className="text-slate-700 hover:text-blue-500 transition-all duration-300">
        ▸ Face Detection & Recognition
      </li>
      <li className="text-slate-700 hover:text-blue-500 transition-all duration-300">
        ▸ Object Tracking with OpenCV
      </li>
      <li className="text-slate-700 hover:text-blue-500 transition-all duration-300">
        ▸ License Plate Detection
      </li>
      <li className="text-slate-700 hover:text-blue-500 transition-all duration-300">
        ▸ YOLOv5 People Counter
      </li>
    </ul>
  </div>
</section>
import { BrowserRouter } from 'react-router-dom';

<BrowserRouter basename="/personal-website">
  {/* your routes */}
</BrowserRouter>


      {/* BLOG */}
      <Section title="Blog & Articles">
        <ul className="text-gray-300 space-y-2">
          <li>
            <a
              href="https://medium.com/@yourhandle/what-i-learned-from-my-first-tryhackme-room"
              className="text-blue-400 hover:underline hover:text-blue-300 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              ▸ What I Learned from My First TryHackMe Room
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@yourhandle/computer-vision-for-beginners"
              className="text-blue-400 hover:underline hover:text-blue-300 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              ▸ Computer Vision for Beginners: A Quick Start
            </a>
          </li>
        </ul>
      </Section>

      {/* CONTACT */}
      <Section title="Contact">
        <div className="text-gray-300 space-y-1">
          <p>Email: marvellousonohwakpor51@gmail.com</p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/marvellous-onohwakpor"
              className="text-blue-400 hover:underline"
            >
              @marvellous-onohwakpor
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/Mharvee"
              className="text-blue-400 hover:underline"
            >
              @Mharvee
            </a>
          </p>
        </div>
      </Section>
    </div>
  );
}
