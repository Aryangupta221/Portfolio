import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex gap-6">
            {[
              { icon: Github, href: 'https://github.com/Aryangupta221', label: 'GitHub' },
              { icon: Linkedin, href: 'www.linkedin.com/in/aryan-gupta-0b9b5332a', label: 'LinkedIn' },
              { icon: Twitter, href: '#', label: 'Twitter' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="p-2 hover:text-blue-400 transition-colors duration-300"
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              Made with <Heart size={16} className="text-red-500" /> by Aryan Gupta
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}