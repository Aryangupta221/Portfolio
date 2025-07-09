import React from 'react';
import { ExternalLink, Github, FileText, Calendar, Star, Globe } from 'lucide-react';

export default function Projects() {
  const project = {
    title: 'BlogCrafter',
    description: 'A modern full-stack blogging platform built with React, Appwrite, and Netlify. Features rich text editing with TinyMCE, secure user authentication, and CRUD operations for posts with image uploads. Enhanced user engagement by enabling personalized content creation with seamless scalability.',
    image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['React', 'Appwrite', 'Netlify', 'Tailwind CSS', 'TinyMCE', 'Cloud Storage'],
    icon: FileText,
    github: 'https://github.com/Aryangupta221',
    live: 'https://blogcrafter4442.netlify.app/',
    timeline: 'Dec 2024 - Feb 2025',
    status: 'Live',
    features: [
      'Rich Text Editing with TinyMCE',
      'User Authentication & Management',
      'CRUD Operations for Posts',
      'Image Upload & Storage',
      'Responsive UI Design',
      'Cloud Storage Integration',
      'Secure User Management',
      'Seamless Scalability'
    ],
    highlights: [
      'Deployed on Netlify with continuous integration',
      'Integrated Appwrite for backend services',
      'Responsive design optimized for all devices',
      'Enhanced user engagement features'
    ]
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Project
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My latest full-stack web application showcasing modern development practices
          </p>
        </div>

        {/* Main Project Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 border border-gray-100">
            {/* Project Header */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              
              {/* Status Badge */}
              <div className="absolute top-6 left-6">
                <div className="flex items-center gap-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  {project.status}
                </div>
              </div>

              {/* Project Icon */}
              <div className="absolute top-6 right-6 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                <project.icon size={28} className="text-blue-600" />
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-white/90">
                  <Calendar size={16} />
                  <span className="text-sm">{project.timeline}</span>
                </div>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Star className="text-yellow-500" size={20} />
                  Key Features
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Highlights */}
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Project Highlights
                </h4>
                <div className="space-y-2">
                  {project.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full font-medium text-sm border border-blue-200 hover:from-blue-200 hover:to-purple-200 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Globe size={20} />
                  View Live Project
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Github size={20} />
                  View Source Code
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              More Projects Coming Soon!
            </h3>
            <p className="text-gray-700 mb-6">
              I'm continuously working on new projects and learning new technologies. 
              Check out my GitHub for the latest updates and contributions.
            </p>
            <a
              href="https://github.com/Aryangupta221"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Github size={20} />
              Follow My Journey on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}