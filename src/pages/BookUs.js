import React, { useState } from 'react';
import './BookNow.css'; 

function BookNow() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: '',
    date: '',
    additionalInfo: ''
  });

  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1; 
    let day = today.getDate();
  
    // Add leading zeros if the month or day is a single digit
    if (month < 10) {
      month = `0${month}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }
  
    // Return the date in "YYYY-MM-DD" format
    return `${year}-${month}-${day}`;
  }

  // State to track if the form is submitted
  const [isSubmitted, setIsSubmitted] = useState(false); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const sendBookingData = (data) => {
    const endpoint = 'http://localhost:8000/api/submit-booking/'; 

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

    sendBookingData(formData)
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
    <div className="booknow-container">
      <h2>Book Us for Your Event</h2>
      {isSubmitted ? (
        <div className="form-submission-confirmation">
          Thank you for your booking!
        </div>
      ) : (
        <form className="booknow-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleInputChange} 
            required 
          />

          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleInputChange} 
            required 
          />

          <label htmlFor="eventType">Type of Event:</label>
          <select 
            id="eventType" 
            name="eventType" 
            value={formData.eventType} 
            onChange={handleInputChange} 
            required
          >
            <option value="">Please select an event type</option>
            <option value="wedding">Wedding</option>
            <option value="festival">Festival</option>
            <option value="corporate">Corporate Event</option>
            <option value="private">Private Party</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="date">Date of Event:</label>
            <input 
              type="date" 
              id="date" 
              name="date" 
              value={formData.date} 
              onChange={handleInputChange} 
              required 
              min={getCurrentDate()} 
            />

          <label htmlFor="additionalInfo">Additional Information:</label>
          <textarea 
            id="additionalInfo" 
            name="additionalInfo" 
            rows="5" 
            value={formData.additionalInfo} 
            onChange={handleInputChange}
          ></textarea>

          <button type="submit">Submit Booking</button>
        </form>
      )}
    </div>
  );
}

export default BookNow;
