import React from 'react';
import ProjectCard from './components/ProjectCard';
import Contact from './components/Contact';
import Footer from './components/Footer';

const projects = [
  {
    image: '/counter.PNG',
    title: 'Counter App',
    description: 'Brief description of project 1.',
    link:  'https://github.com/parajulimansha/Counter-Application',
  },
  {
    image: '/to-do.PNG',
    title: 'To-Do List',
    description: 'Brief description of project 2.',
    link: 'https://github.com/parajulimansha/To-Do-List-React',
  },
  {
    image: '/firstassesment.PNG',
    title: 'Static Website(Edumy) ',
    description: 'Brief description of project 3.',
    link: 'https://github.com/parajulimansha/Internship_assesment',
  },
  {
    image: '/rockpaperscissor.PNG',
    title: 'Rock Paper Scissor Game',
    description: 'Brief description of project 4.',
    link: 'https://github.com/parajulimansha/RockPaperScissor_Javascript',
  },
  {
    image: '/blogcards.PNG',
    title: 'Blog Cards',
    description: 'Brief description of project 5.',
    link: 'https://github.com/parajulimansha/blog-cards',
  },
  {
    image: '/fullstack.PNG',
    title: 'Fll Stack E-commerce Website',
    description: 'Brief description of project 6.',
    link: 'https://github.com/parajulimansha/Java-FullStack-Website',
  },
];

function App() {
  return (
    <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-100 min-h-screen" >
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-3 px-8  hover:bg-gradient-to-l">
        <nav className="container mx-auto flex justify-between">
          <div className="text-3xl font-bold">Portfolio</div>
          <ul className="flex space-x-6 text-lg">
            <li><a href="#home" className="hover:text-gray-300">Home</a></li>
            <li><a href="#about" className="hover:text-gray-300">About Me</a></li>
            <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
            <li><a href="/ManshaParajuli_CV.pdf" download="ManshaParajuli_CV.pdf" className="hover:text-gray-300">Resume</a></li>

          </ul>
        </nav>
      </header>

      {/* Landing Page Section */}
      <main className="container mx-auto p-6">
        <section id="home" 
        className="h-screen flex flex-col items-center justify-center bg-gray-200 text-center"
         style={{
          backgroundImage: `url('/images3.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
  >
          <h1 className="text-6xl font-bold mb-4 text-gray-900">Hey, I'm Mansha Parajuli</h1>
          <p className="text-2xl text-gray-700 mb-6">
            A newbie in Frontend-focused  Web Developer building the Frontend of Websites and Web Applications that lead to the success of the overall product.

          </p>
          <a href="#projects" className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-gradient-to-l hover:from-yellow-500 hover:to-red-500 transition-all">
            Projects
          </a>
        </section>

         {/* About me section */}

        <section id="about" class="bg-gray-100 py-12">
            <div class="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
              
              <div class="w-full md:w-1/2 mb-8 md:mb-0">
                <img 
                  src="/mansha.PNG" 
                  alt="animated photo" 
                  class="rounded-lg shadow-lg w-full object-cover"
                />
              </div>

              <div class="w-full md:w-1/2 md:pl-10">
                <h2 class="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
                <p class="text-lg text-gray-600 mb-4">
                  Hi! I'm <strong class="text-indigo-600">Mansha Parajuli</strong>, currently working at Bluefox Pvt. Ltd as a frontend developer and excited to begin my journey in the tech industry. I’m eager to learn, grow, and contribute by building user-friendly and efficient digital experiences.
                </p>
                <p class="text-lg text-gray-600 mb-4">
                  With a foundational knowledge of JavaScript, React, and Node.js, I’m looking forward to collaborating with experienced professionals to refine my skills, learn best practices, and work on meaningful projects that make a difference.
                </p>
                <a 
                  href="#contact" 
                  className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-gradient-to-l hover:from-yellow-500 hover:to-red-500 transition-all">
                  Let's Connect
                </a>
              </div>
            </div>
        </section>


        {/* Projects Section */}
        <section id="projects" className="my-20">
          <h2 className="text-4xl font-bold text-center mb-10 text-indigo-800">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="my-20">
          <Contact />
        </section>

        
      </main>
      {/* Footer Section */}
    <section>
    <Footer />
  </section>
    </div>
    );
}

export default App;
