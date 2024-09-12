import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-5 px-8  hover:bg-gradient-to-l  inset-x-0 w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        
        {/* Left Side: Branding/Logo */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-2xl font-bold">Mansha Parajuli</h3>
          <p className="text-gray-400">Frontend Developer</p>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex space-x-6 mb-6 md:mb-0">
        <li><a href="#home" className="hover:text-gray-300">Home</a></li>
            <li><a href="#about" className="hover:text-gray-300">About Me</a></li>
            <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          </div>

        {/* Right Side: Social Media Links */}
        <div className="flex space-x-4">
        <a href="https://www.facebook.com/mansha.parajuli.75" className="text-white-600 hover:text-indigo-800 text-2xl"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/mansha_parajuli/" className="text-white-600 hover:text-indigo-800 text-2xl"><i className="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/in/mansha-parajuli-88b277257/" className="text-white-600 hover:text-indigo-800 text-2xl"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/parajulimansha" className="text-white-600 hover:text-indigo-800 text-2xl"><i className="fab fa-github"></i></a>
          </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Mansha Parajuli. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
