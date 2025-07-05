import React, { useRef, useEffect } from 'react';
import profileImg from '../assets/profile.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

const skills = [
  { title: 'App Design', icon: 'bi-grid' },
  { title: 'Website Design', icon: 'bi-pencil-square' },
  { title: 'HTML & CSS', icon: 'bi-filetype-html' },
  { title: 'Logo Designing', icon: 'bi-easel3' },
];

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="about-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-light glow-purple">About</h2>
          <div className="mx-auto" style={{ width: '60px', borderBottom: '3px solid #a855f7' }}></div>
          <p className="mt-3 text-muted">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
          </p>
        </div>

        <div className="row align-items-center">
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <img src={profileImg} alt="Profile" className="img-fluid rounded-circle shadow custom-glow" />
          </div>
          <div className="col-md-7 text-light">
            <h4 className="fw-bold text-info">MERN Stack Trainer & Web Developer</h4>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>

            <div className="row">
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li><i className="bi bi-chevron-right text-primary"></i> <strong>Birthday:</strong> 15 Aug 1996</li>
                  <li><i className="bi bi-chevron-right text-primary"></i> <strong>Website:</strong> www.mutharasi.com</li>
                  <li><i className="bi bi-chevron-right text-primary"></i> <strong>Phone:</strong> +91 98765 43210</li>
                  <li><i className="bi bi-chevron-right text-primary"></i> <strong>City:</strong> Chennai, India</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li><i className="bi bi-chevron-right text-primary"></i> <strong>Age:</strong> 28</li>
                  <li><i className="bi bi-chevron-right text-primary"></i> <strong>Degree:</strong> Master</li>
                  <li><i className="bi bi-chevron-right text-primary"></i> <strong>Email:</strong> muthu@example.com</li>
                  <li><i className="bi bi-chevron-right text-primary"></i> <strong>Freelance:</strong> Available</li>
                </ul>
              </div>
            </div>

            <p className="mt-3">
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="text-center mt-5">
          <h3 className="fw-bold mb-4 text-light">
            <span className="text-warning">My</span> Skills
          </h3>

          <div className="row justify-content-center">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="col-md-3 col-6 mb-4 skill-card"
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div
                  className="border border-warning rounded-circle text-center p-4 mx-auto custom-skill-glow"
                  style={{ width: '160px', height: '160px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
                >
                  <i className={`bi ${skill.icon} fs-2 mb-2 text-warning`}></i>
                  <h6 className="fw-bold mb-0 text-light">{skill.title}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
