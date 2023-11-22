import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Survey from './Survey'; // Adjust the import path as per your project structure

describe('Survey Component', () => {
  it('renders the survey form with inputs', () => {
    render(<Survey />);
    expect(screen.getByLabelText(/Rate your experience:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Your Feedback:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
  });

  it('allows selection of experience and typing feedback', () => {
    render(<Survey />);
    const experienceDropdown = screen.getByLabelText(/Rate your experience:/i);
    const feedbackTextarea = screen.getByLabelText(/Your Feedback:/i);

    fireEvent.change(experienceDropdown, { target: { value: 'good' } });
    expect(experienceDropdown.value).toBe('good');

    fireEvent.change(feedbackTextarea, { target: { value: 'Great service!' } });
    expect(feedbackTextarea.value).toBe('Great service!');
  });

  it('handles form submission', async () => {
    render(<Survey />);
    
    // Mock fetch or the function used to send data if necessary
    // global.fetch.mockResolvedValueOnce({ ok: true });

    // Fill out the form
    fireEvent.change(screen.getByLabelText(/Rate your experience:/i), { target: { value: 'excellent' } });
    fireEvent.change(screen.getByLabelText(/Your Feedback:/i), { target: { value: 'Loved the experience!' } });
    
    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));

    
  });

  // Additional tests can be added here as needed
});
