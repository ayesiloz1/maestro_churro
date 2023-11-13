import React from 'react';


function Contact() {
  return (
    <div>
      <main>
        <h1>Contact Us</h1>
        <p>If you have any questions or need further information, please feel free to contact us.</p>
        
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </main>
    </div>
  );
}

export default Contact;
