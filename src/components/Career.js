import React, { useState } from 'react';
import './career.css';

function Career() {
  // State for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState(null);

  // State for submission status
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form input changes
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };

  const sendCareerData = (formData) => {
    const endpoint = 'http://localhost:8000/api/submit-career/';

    return fetch(endpoint, {
      method: 'POST',
      body: formData,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the form data for sending
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('resume', resume);

    // Send the data to the server
    sendCareerData(formData)
      .then(response => {
        if (response.ok) {
          setIsSubmitted(true); // Update the submission status
        } else {
          console.error('Server error:', response);
        }
      })
      .catch(error => {
        console.error('Network error:', error);
      });
  };

  return (
    <div className="form-container">
      <h1>Career Opportunities</h1>
      {isSubmitted ? (
        <div className="form-submission-confirmation">
          Thanks for applying!
        </div>
      ) : (
        <>
          <p>If you're interested in working with us, please fill out the form below:</p>
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Your name..." onChange={handleNameChange} />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your email..." onChange={handleEmailChange} />

            <label htmlFor="resume">Upload Resume:</label>
            <input type="file" id="resume" name="resume" onChange={handleResumeChange} />

            <button type="submit">Apply</button>
          </form>
        </>
      )}
    </div>
  );
}

export default Career;
