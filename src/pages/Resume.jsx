import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Resume() {
  return (
    <section id="resume" className="container py-5">
      <h2 className="text-center fw-bold mb-4">💼 Resume</h2>

      <div className="text-center mb-4">
        <p>You can view or download my resume here:</p>
        <a
          href="/resume.pdf" // ✅ Make sure the PDF is inside public/
          download
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          📥 Download Resume
        </a>
      </div>

      {/* Resume Preview */}
      <div className="d-flex justify-content-center">
        <iframe
          src="/resume.pdf"
          width="100%"
          height="600px"
          title="My Resume"
          style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            maxWidth: '900px'
          }}
        />
      </div>
    </section>
  );
}

export default Resume;
