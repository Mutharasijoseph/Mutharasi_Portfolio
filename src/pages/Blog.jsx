import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './blog.css'; // Custom dark theme styles

function Blog() {
  const [blogs, setBlogs] = useState([
    {
      title: 'How I Built My First React Project',
      description: 'A quick walkthrough of building a portfolio website using React and Bootstrap.',
      image: 'https://via.placeholder.com/400x250?text=React+Portfolio',
      author: 'Brave (Mutharasi)'
    },
    {
      title: 'Top 5 VS Code Extensions for Web Devs',
      description: 'These extensions saved my time and made coding smoother!',
      image: 'https://via.placeholder.com/400x250?text=VSCode+Tips',
      author: 'Student: Janani'
    }
  ]);

  const [modalImage, setModalImage] = useState('');
  const [newBlog, setNewBlog] = useState({
    title: '',
    description: '',
    image: '',
    author: ''
  });

  const handleImageClick = (img) => {
    setModalImage(img);
    const modal = new window.bootstrap.Modal(document.getElementById('blogImageModal'));
    modal.show();
  };

  const handleChange = (e) => {
    setNewBlog({ ...newBlog, [e.target.name]: e.target.value });
  };

  const handleAddBlog = (e) => {
    e.preventDefault();
    if (!newBlog.title || !newBlog.description || !newBlog.image || !newBlog.author) return;
    setBlogs([...blogs, newBlog]);
    setNewBlog({ title: '', description: '', image: '', author: '' });
  };

  return (
    <section id="blog" className="blog-section py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4 text-light glow-purple">📚 Blogs</h2>

        <div className="card mb-5 shadow-sm bg-dark text-light border border-purple">
          <div className="card-header bg-info text-white">Add a New Blog Post</div>
          <div className="card-body">
            <form onSubmit={handleAddBlog} className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                  name="title"
                  value={newBlog.title}
                  className="form-control"
                  placeholder="Blog Title"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="author"
                  value={newBlog.author}
                  className="form-control"
                  placeholder="Author Name"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="image"
                  value={newBlog.image}
                  className="form-control"
                  placeholder="Image URL"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="description"
                  value={newBlog.description}
                  className="form-control"
                  placeholder="Short Description"
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-outline-light w-100">Add Blog</button>
              </div>
            </form>
          </div>
        </div>

        <div className="row">
          {blogs.map((blog, idx) => (
            <div key={idx} className="col-md-4 mb-4">
              <div className="card h-100 shadow bg-dark text-light border border-purple">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="card-img-top blog-img-glow"
                  style={{ cursor: 'pointer', height: '250px', objectFit: 'cover' }}
                  onClick={() => handleImageClick(blog.image)}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text flex-grow-1">{blog.description}</p>
                  <small className="text-muted">✍️ {blog.author}</small>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="modal fade" id="blogImageModal" tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content bg-dark">
              <div className="modal-body p-0">
                <img src={modalImage} alt="Zoomed Blog" className="img-fluid w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
