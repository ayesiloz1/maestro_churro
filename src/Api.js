
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/'; 



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
    
  }
};
export const submitOrder = async (orderData) => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/submit-order/', orderData);

    if (response.status === 201) {
      console.log('Order submitted successfully.');
     
    } else {
      // If the server responded with a status other than 201, it's an unexpected scenario.
      console.error(`Order submission failed with status: ${response.status} and message: ${response.statusText}`);
    }
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error(`Server responded with status: ${error.response.status}`);
      console.error(`Error data: ${error.response.data}`);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('The request was made but no response was received', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error', error.message);
    }
  }
};
