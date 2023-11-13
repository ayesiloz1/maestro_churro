import React from 'react';
import './Forms.css';
import '././Header.css';

function Career() {
  return (
    <div className="form-container">
      <h1>Career Opportunities</h1>
      <p>If you're interested in working with us, please fill out the form below:</p>
      <form className="form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your name..." />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your email..." />

        <label htmlFor="resume">Upload Resume:</label>
        <input type="file" id="resume" name="resume" />

        <button type="submit">Apply</button>
      </form>
    </div>
  );
}

export default Career;
