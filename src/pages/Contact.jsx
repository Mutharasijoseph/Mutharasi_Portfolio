import React from 'react';

function Contact() {
  return (
    <section id="contact"className="container py-5">
      <h2 className="text-center mb-4">Contact Me</h2>

      <div className="row">
        {/* Contact Info */}
        <div className="col-md-6 mb-4">
          <div className="card shadow p-4 h-100">
            <h4>Get in Touch</h4>
            <p>Email: <a href="mailto:mutharasi@example.com">mutharasi@example.com</a></p>
            <p>Phone: <a href="tel:+919876543210">+91 98765 43210</a></p>
            <p>Location: Chennai, Tamil Nadu, India</p>
            <p>
              <a href="https://github.com/yourname" target="_blank" rel="noreferrer" className="btn btn-dark btn-sm me-2">GitHub</a>
              <a href="https://linkedin.com/in/yourname" target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">LinkedIn</a>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-md-6 mb-4">
          <div className="card shadow p-4 h-100">
            <h4>Send a Message</h4>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="name@example.com" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Type your message..." required></textarea>
              </div>
              <button type="submit" className="btn btn-success">Send</button>
            </form>
          </div>
        </div>
      </div>

      {/* Optional: Google Map Embed */}
      <div className="row">
        <div className="col-12">
          <div className="ratio ratio-16x9 shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.179447788255!2d80.27071811532936!3d13.082680716618315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ddc6c975a1%3A0x35e18a4b12c64b8!2sChennai!5e0!3m2!1sen!2sin!4v1613889080590!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
