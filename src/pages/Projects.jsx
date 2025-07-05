import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Projects.css'; // custom dark theme CSS
import portfolioImg from '../assets/portfolio.jpg';
import portfolioImge from '../assets/portfo.jpg';
import portfolioImage from '../assets/port.jpg';

function Projects() {
  const [modalImage, setModalImage] = useState('');

  const projects = [
    {
      name: 'Portfolio Site',
      desc: 'Personal website built using React and Bootstrap',
      github: '#',
      live: '#',
      image: portfolioImg,  // Correct variable name here
    },
    {
      name: 'Task Manager App',
      desc: 'A simple MERN-based task manager with auth',
      github: '#',
      live: '',
      image: portfolioImge,
    },
    {
      name: 'Weather App',
      desc: 'A React app fetching weather using API',
      github: '#',
      live: '#',
      image: portfolioImage,
    },
  ];

  const handleImageClick = (imageUrl) => {
    setModalImage(imageUrl);
    const modal = new window.bootstrap.Modal(document.getElementById('imageModal'));
    modal.show();
  };

  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">
        <h2 className="text-center fw-bold text-light glow-purple mb-4">Projects</h2>
        <div className="row">
          {projects.map((proj, idx) => (
            <div key={idx} className="col-md-4 mb-4">
              <div className="card h-100 bg-dark text-light border border-purple shadow-lg">
                <img
                  src={proj.image}
                  alt={proj.name}
                  className="card-img-top project-img-glow"
                  style={{ cursor: 'pointer', height: '250px', objectFit: 'cover' }}
                  onClick={() => handleImageClick(proj.image)}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{proj.name}</h5>
                  <p className="card-text flex-grow-1">{proj.desc}</p>
                  <div>
                    <a href={proj.github} className="btn btn-outline-light btn-sm me-2" target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                    {proj.live && (
                      <a href={proj.live} className="btn btn-outline-warning btn-sm" target="_blank" rel="noreferrer">
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Zoom Modal */}
        <div className="modal fade" id="imageModal" tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content bg-dark">
              <div className="modal-body p-0">
                <img src={modalImage} alt="Zoomed Project" className="img-fluid w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
