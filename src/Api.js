// api.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/'; // Replace with your backend's actual URL



export const getChurros = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const submitSurvey = async (data) => {
  try {
    // Correct URL to match Django's 'submit-survey/' endpoint
    const response = await axios.post('http://127.0.0.1:8000/submit-survey/', data);

    // Check the response and handle success or errors
    if (response.status === 200) {
      console.log('Survey submitted successfully.');
      // You can perform additional actions here on success
    } else {
      console.error('Survey submission failed with status:', response.status);
      // Handle errors here
    }
  } catch (error) {
    console.error('An error occurred while submitting the survey:', error);
    // Handle network or other errors here
  }
};

export const submitCareer = async (data) => {
  try {
    // Correct URL to match Django's 'submit-career/' endpoint
    const response = await axios.post('http://127.0.0.1:8000/submit-career/', data);

    // Check the response and handle success or errors
    if (response.status === 201) { // HTTP status for "Created" is 201
      console.log('Career application submitted successfully.');
      // You can perform additional actions here on success
    } else {
      console.error('Career submission failed with status:', response.status);
      // Handle errors here
    }
  } catch (error) {
    console.error('An error occurred while submitting the career application:', error);
    // Handle network or other errors here
  }
};

export const submitOrder = async (orderData) => {
  try {
    // Replace with the correct URL for your 'submit-order/' endpoint
    const response = await axios.post('http://127.0.0.1:8000/submit-order/', orderData);

    // Check the response and handle success or errors
    if (response.status === 200) {
      console.log('Order submitted successfully.');
      // Perform additional actions here on success, like showing a confirmation message
    } else {
      console.error('Order submission failed with status:', response.status);
      // Handle errors here, like showing an error message to the user
    }
  } catch (error) {
    console.error('An error occurred while submitting the order:', error);
    // Handle network or other errors here
  }
};