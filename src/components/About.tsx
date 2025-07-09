import React from 'react';
import { Code, Palette, Zap, Users } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code with best practices'
    },
    {
      icon: Palette,
      title: 'Design Focus',
      description: 'Creating beautiful, intuitive user interfaces'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Building fast, optimized applications'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in agile development teams'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            As a passionate and dedicated fresher in web development, I have built a strong foundation 
            in both frontend and backend technologies through hands-on projects and continuous learning. 
            I'm eager to bring my fresh perspective, enthusiasm for learning, and problem-solving skills 
            to a dynamic development team. When I'm not coding, you can find me exploring new technologies, 
            working on personal projects, or learning from the developer community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Through various projects, I have gained practical experience in modern web technologies 
              including React, Node.js, MongoDB, and more. I believe in writing clean, maintainable code 
              and following industry best practices. Each project I work on teaches me something new and 
              helps me grow as a developer.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With a strong foundation in both frontend and backend development, I specialize in creating 
              comprehensive web solutions that deliver exceptional user experiences. My journey in web 
              development has been driven by a constant desire to learn and adapt to new technologies.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I believe in writing clean, maintainable code and following industry best practices. 
              Whether it's building responsive user interfaces, developing robust APIs, or optimizing 
              application performance, I approach each project with attention to detail and a focus on quality.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <highlight.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}