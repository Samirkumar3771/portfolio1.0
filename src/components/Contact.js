import React from "react";

function Contact() {
  return (
    <section id="contact">
      <div className="contact-container">
        <h2>📩 Get in Touch</h2>
        <p>
          Have a project in mind or just want to say hello?  
          Feel free to drop me a message — I’d love to connect! 💬
        </p>

        <div className="contact-form">
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
