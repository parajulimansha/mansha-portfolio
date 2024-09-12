import React from 'react';

function ProjectCard({ image, title, description, link }) {
  return (
    <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 ">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-700 text-lg mb-4">{description}</p>
        <a
          href={link}
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-gradient-to-l hover:from-yellow-500 hover:to-red-500 transition-all"
    >
          View on GitHub
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
