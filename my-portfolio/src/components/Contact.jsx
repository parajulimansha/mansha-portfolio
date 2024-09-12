import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Contact() {
  return (
    <div className="container mx-auto my-16 p-8 bg-gray-100 rounded-lg shadow-lg flex flex-col lg:flex-row items-center"
    style={{
      backgroundImage: `url('/images3.jpeg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      {/* Left Side: Image */}
      <div className="lg:w-1/2 w-full p-6 flex justify-center">
        <img 
          src="/images1.png" 
          alt="Contact Visual" 
          className="rounded-lg object-cover h-96 w-full lg:w-4/5"
        />
      </div>

      {/* Right Side: Contact Form and Info */}
      <div className="lg:w-1/2 w-full p-6">
        <h2 className="text-5xl font-bold text-gray-900 mb-8">Contact Me</h2>
        
        <div className="mb-8">
          {/* Contact Info */}
          <p className="text-xl font-semibold mb-2 text-gray-900">Contact</p>
          <p className="text-lg text-gray-700 mb-6">parajulimansha@gmail.com</p>
          
          <p className="text-xl font-semibold mb-2 text-gray-900">Based in</p>
          <p className="text-lg text-gray-700">Kathmandu, Nepal</p>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-gray-800 text-lg font-semibold">Full Name</label>
            <input 
              type="text" 
              className="w-full p-4 border-b border-gray-400 focus:outline-none focus:border-indigo-500 transition-colors" 
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-800 text-lg font-semibold">E-mail</label>
            <input 
              type="email" 
              className="w-full p-4 border-b border-gray-400 focus:outline-none focus:border-indigo-500 transition-colors" 
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-gray-800 text-lg font-semibold">Message</label>
            <textarea 
              className="w-full p-4 border-b border-gray-400 focus:outline-none focus:border-indigo-500 transition-colors" 
              placeholder="Your Message"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-gradient-to-l hover:from-yellow-500 hover:to-red-500 transition-all"
    >
            Contact Me
          </button>
        </form>

        {/* Social Icons */}
        <div className="mt-8 flex space-x-6">
          <a href="https://www.facebook.com/mansha.parajuli.75" className="text-indigo-600 hover:text-indigo-800 text-2xl"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/mansha_parajuli/" className="text-indigo-600 hover:text-indigo-800 text-2xl"><i className="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/in/mansha-parajuli-88b277257/" className="text-indigo-600 hover:text-indigo-800 text-2xl"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/parajulimansha" className="text-indigo-600 hover:text-indigo-800 text-2xl"><i className="fab fa-github"></i></a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
