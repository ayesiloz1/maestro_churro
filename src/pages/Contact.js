import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [contactMethod, setContactMethod] = useState('');

  const handleMethodChange = (method) => {
    setContactMethod(method);
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>If you have any questions or need further information, please feel free to contact us.</p>
      
      <div className="contact-methods">
        <button onClick={() => handleMethodChange('email')}>Email</button>
        <button onClick={() => handleMethodChange('message')}>Message</button>
        <button onClick={() => handleMethodChange('call')}>Call</button>
      </div>


        {contactMethod === 'email' && (
          <form>
            {/* Email Form Fields */}
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Send Email</button>
          </form>
        )}

        {contactMethod === 'message' && (
          <form>
            {/* Message Form Fields */}
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        )}

        {contactMethod === 'call' && (
        <div className="call-section">
          <a href="tel:+1234567890">+1 (234) 567-890</a> {/* Replace with your actual phone number */}
        </div>
      )}
     
    </div>
  );
}

export default Contact;
