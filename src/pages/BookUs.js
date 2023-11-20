import React, { useState } from 'react';
import './BookNow.css'; // Make sure to create a corresponding CSS file for styling

function BookNow() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: '',
    date: '',
    additionalInfo: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, like sending data to a server or displaying a confirmation message
    console.log(formData);
    // Reset form or navigate user to a confirmation page or display modal
  };

  return (
    <div className="booknow-container">
      <h2>Book Us for Your Event</h2>
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
    </div>
  );
}

export default BookNow;
