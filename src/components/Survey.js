import React from 'react';
import './Forms.css';
import '././Header.css';


function Survey() {
  return (
    <div className="form-container">

      <h1>Customer Satisfaction Survey</h1>
      <form className="form">
        <label htmlFor="experience">Rate your experience:</label>
        <select id="experience" name="experience">
          <option value="excellent">Excellent</option>
          <option value="good">Good</option>
          <option value="fair">Fair</option>
          <option value="poor">Poor</option>
        </select>

        <label htmlFor="feedback">Your Feedback:</label>
        <textarea id="feedback" name="feedback" rows="5" placeholder="Your comments..."></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Survey;
