import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript ES6+', 'Vue.js']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'Python', 'Django', 'REST APIs', 'GraphQL', 'MongoDB', 'PostgreSQL']
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'Webpack', 'Jest', 'Cypress', 'Figma', 'Linux']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 px-4 py-2 rounded-lg text-center font-medium hover:from-blue-100 hover:to-purple-100 transition-all duration-300 transform hover:scale-105"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}