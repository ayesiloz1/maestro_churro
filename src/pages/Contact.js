import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [contactMethod, setContactMethod] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleMethodChange = (method) => {
    setContactMethod(method);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendContactData = (data) => {
    const endpoint = 'http://localhost:8000/api/submit-contact/';

    return fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const contactData = {
      method: contactMethod,
      email: email,
      name: name,
      message: message,
    };

    sendContactData(contactData)
      .then(response => {
        if (response.ok) {
          setIsSubmitted(true);
        } else {
          console.error('Server error:', response);
        }
      })
      .catch(error => {
        console.error('Network error:', error);
      });
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      {isSubmitted ? (
        <div className="form-submission-confirmation">
          Thank you for contacting!
        </div>
      ) : (
        <>
          <p>If you have any questions or need further information, please feel free to contact us.</p>
          
          <div className="contact-methods">
            <button onClick={() => handleMethodChange('email')}>Email</button>
            <button onClick={() => handleMethodChange('message')}>Message</button>
            <button onClick={() => handleMethodChange('call')}>Call</button>
          </div>

          {(contactMethod === 'email' || contactMethod === 'message') && (
            <form onSubmit={handleSubmit}>
              {contactMethod === 'email' && (
                <>
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" required onChange={handleEmailChange} />
                </>
              )}

              {contactMethod === 'message' && (
                <>
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" required onChange={handleNameChange} />
                </>
              )}

              <label htmlFor="message">Your Message:</label>
              <textarea id="message" name="message" rows="4" required onChange={handleMessageChange}></textarea>

              <button type="submit">Send {contactMethod === 'email' ? 'Email' : 'Message'}</button>
            </form>
          )}

          {contactMethod === 'call' && (
            <div className="call-section">
              <a href="tel:+1234567890">+1 (234) 567-890</a> {/* Replace with your actual phone number */}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Contact;
