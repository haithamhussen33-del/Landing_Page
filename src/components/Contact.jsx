import { useState } from "react";
import "./assets/styles/ContactPageStyles.css";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <div className="contact">
      <section className="contact-hero">
        <h1>Get In Touch</h1>
        <p>
          We'd love to hear from you. Send us a message and we'll respond as
          soon as possible.
        </p>
      </section>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Information</h2>

          <div className="info-item">
            <div className="info-icon">📍</div>
            <div>
              <h3>Address</h3>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">📧</div>
            <div>
              <h3>Email</h3>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">📞</div>
            <div>
              <h3>Phone</h3>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">🕒</div>
            <div>
              <h3>Business Hours</h3>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <h2>Send Us a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
