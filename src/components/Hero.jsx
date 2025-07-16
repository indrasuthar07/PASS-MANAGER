import React from 'react';

const Hero = () => (
  <section className="flex flex-col mt-20 items-center justify-center py-12 text-center">
    <h1 className="hero-title mb-4">Welcome to PassXpert</h1>
    <p className="text-2xl text-blue-900 font-semibold mb-6" style={{maxWidth: '600px'}}>
      Secure, effortless password management for the next generation. Protect your digital life with style and confidence.
    </p>
    <a href="#manager" className="inline-block bg-gradient-to-r from-blue-600 to-cyan-400 text-white text-lg font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-200">
      Get Started
    </a>
  </section>
);

export default Hero; 