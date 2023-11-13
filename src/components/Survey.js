import React, { useState } from 'react';
import './Survey.css';

function Survey() {
  // State for form fields
  const [experience, setExperience] = useState('');
  const [feedback, setFeedback] = useState('');

  // State for submission status
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form input changes
  const handleExperienceChange = (e) => {
    setExperience(e.target.value);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission, e.g., sending data to a server
    setIsSubmitted(true);
  };

  return (
    <div className="form-container">
      <h1>Customer Satisfaction Survey</h1>

      {isSubmitted ? (
        <div className="form-submission-confirmation">
          Thank you for your feedback!
        </div>
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="experience">Rate your experience:</label>
          <select id="experience" name="experience" value={experience} onChange={handleExperienceChange}>
            <option value="">Select an option</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
          </select>

          <label htmlFor="feedback">Your Feedback:</label>
          <textarea
            id="feedback"
            name="feedback"
            rows="5"
            placeholder="Your comments..."
            value={feedback}
            onChange={handleFeedbackChange}
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default Survey;