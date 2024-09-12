import React, { useState } from 'react';
import { Menu, X, Linkedin, GitHub, Mail, ChevronDown, Download } from 'lucide-react';
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get all GitHub buttons
    const githubButtons = document.querySelectorAll('.btn-github');
    // Get all Demo buttons
    const demoButtons = document.querySelectorAll('.btn-demo');
  
    // Add click event listeners to GitHub buttons
    githubButtons.forEach(button => {
      button.addEventListener('click', function() {
        const repoUrl = this.getAttribute('data-repo');
        window.open(repoUrl, '_blank');
      });
    });
  
    // Add click event listeners to Demo buttons
    demoButtons.forEach(button => {
      button.addEventListener('click', function() {
        const demoUrl = this.getAttribute('data-demo');
        window.open(demoUrl, '_blank');
      });
    });
  
    // Add hover effect to project cards
    const projectCards = document.querySelectorAll('#projects .bg-white');
    projectCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.classList.add('shadow-2xl');
      });
      card.addEventListener('mouseleave', function() {
        this.classList.remove('shadow-2xl');
      });
    });
  });

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const NavLink = ({ href, children }) => (
    <a href={href} className="text-gray-600 hover:text-gray-900 transition duration-300">
      {children}
    </a>
  );

  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">Portfolio</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-900">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="profile" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              Hello, I'm Shivam Suryawanshi
            </h1>
            <p className="mt-3 max-w-md mx-auto text-xl sm:text-2xl md:mt-5 md:max-w-3xl">
              Full Stack Developer
            </p>
            <div className="mt-10 flex justify-center space-x-6">
              <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded-full hover:bg-blue-100 transition duration-300">
                Download CV
              </button>
              <button className="bg-transparent border-2 border-white text-white font-bold py-2 px-4 rounded-full hover:bg-white hover:text-blue-600 transition duration-300">
                Contact Info
              </button>
            </div>
            <div className="mt-10 flex justify-center space-x-6">
              <a href="https://www.linkedin.com/in/shivam-suryawanshi-9525b11a9/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="text-white hover:text-gray-300 transition duration-300" size={32} />
              </a>
              <a href="https://github.com/Shivam107" target="_blank" rel="noopener noreferrer">
                <GitHub className="text-white hover:text-gray-300 transition duration-300" size={32} />
              </a>
              <a href="mailto:shivamsuryawanshi000@gmail.com">
                <Mail className="text-white hover:text-gray-300 transition duration-300" size={32} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">
            About Me
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <img src="/api/placeholder/400/400" alt="Profile" className="rounded-lg shadow-lg" />
            </div>
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                As a passionate and dedicated MERN stack developer, my experience spans building full-stack applications, optimizing backend services, and delivering seamless user experiences. I am an avid problem solver, consistently sharpening my algorithmic skills on LeetCode. I am also a strong communicator with the ability to lead and inspire teams, successfully driving group projects from concept to completion. I thrive on challenges and am always eager to expand my knowledge and take on new and exciting projects.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-bold text-lg mb-2">Experience</h3>
                  <p>2+ years Full Stack Development</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-bold text-lg mb-2">Education</h3>
                  <p>B. Tech in CSE (IOT & IS) Manipal University Jaipur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">
            Experience
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold mb-4">Frontend Development</h3>
              <ul className="space-y-2">
                {['HTML', 'CSS', 'React', 'JavaScript', 'TypeScript', 'Figma UI'].map((skill) => (
                  <li key={skill} className="flex items-center">
                    <ChevronDown className="text-green-500 mr-2" size={20} />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Backend Development</h3>
              <ul className="space-y-2">
                {['PostgreSQL', 'Node.js', 'Express.js', 'Git'].map((skill) => (
                  <li key={skill} className="flex items-center">
                    <ChevronDown className="text-green-500 mr-2" size={20} />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">
            Projects
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {['PriorityPal', 'Muscle Hub', 'Transcribe'].map((project) => (
              <div key={project} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="/api/placeholder/400/300" alt={project} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{project}</h3>
                  <div className="mt-4 flex space-x-4">
                    <a href="#" className="text-blue-600 hover:text-blue-800 transition duration-300">
                      Github
                    </a>
                    <a href="#" className="text-blue-600 hover:text-blue-800 transition duration-300">
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">
            Contact Me
          </h2>
          <div className="mt-12 flex flex-col items-center">
            <a href="mailto:shivamsuryawanshi000@gmail.com" className="flex items-center text-lg text-gray-600 hover:text-gray-900 transition duration-300">
              <Mail className="mr-2" size={24} />
              shivamsuryawanshi000@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/shivam-suryawanshi-9525b11a9/" target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center text-lg text-gray-600 hover:text-gray-900 transition duration-300">
              <Linkedin className="mr-2" size={24} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Shivam Suryawanshi. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;