import React from 'react';
import profileImg from '../assets/profile.jpg';
import './Home.css'; // 🔥 Dark + Glow theme

function Home() {
  return (
    <section id="home" className="home-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side: Text */}
          <div className="col-md-6 text-md-start text-center">
            <h1 className="display-4 fw-bold glow-purple">Hello, I'm Mutharasi</h1>
            <h3 className="text-info">MERN Stack Trainer</h3>
            <p className="lead mt-3 text-light">
              I enjoy building web applications and helping others learn full-stack development from scratch.
            </p>
          </div>

          {/* Right Side: Image */}
          <div className="col-md-6 text-center mt-4 mt-md-0">
            <img
              src={profileImg}
              alt="Mutharasi"
              className="img-fluid rounded-circle shadow custom-glow"
              style={{ maxWidth: '400px', height: '400px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
