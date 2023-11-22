
import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookNow from './BookUs'; 

// Mock global fetch for the test
global.fetch = jest.fn();

beforeEach(() => {
  fetch.mockClear();
  fetch.mockResolvedValue({ ok: true, json: () => Promise.resolve({}) });
});

//Verifies that all form inputs and the submit button are rendered correctly.
describe('BookNow Component', () => {
  it('renders the booking form with all inputs', () => {
    render(<BookNow />);
    expect(screen.getByLabelText(/Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Type of Event:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date of Event:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Additional Information:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit Booking/i })).toBeInTheDocument();
  });
  
//Checks if the component correctly updates its state when the user types or selects values in the form fields.
  it('allows input for all fields', () => {
    render(<BookNow />);
    const nameInput = screen.getByLabelText(/Name:/i);
    const emailInput = screen.getByLabelText(/Email:/i);
    const eventTypeSelect = screen.getByLabelText(/Type of Event:/i);
    const dateInput = screen.getByLabelText(/Date of Event:/i);
    const additionalInfoTextarea = screen.getByLabelText(/Additional Information:/i);

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    expect(nameInput.value).toBe('John Doe');

    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    expect(emailInput.value).toBe('john@example.com');

    fireEvent.change(eventTypeSelect, { target: { value: 'wedding' } });
    expect(eventTypeSelect.value).toBe('wedding');

    fireEvent.change(dateInput, { target: { value: '2023-12-31' } });
    expect(dateInput.value).toBe('2023-12-31');

    fireEvent.change(additionalInfoTextarea, { target: { value: 'Some additional info' } });
    expect(additionalInfoTextarea.value).toBe('Some additional info');
  });

  
//Simulates a user submitting the form and verifies that the fetch function is called correctly, and a thank you message is displayed.
  it('handles form submission', async () => {
    render(<BookNow />);
    
    fireEvent.change(screen.getByLabelText(/Name:/i), { target: { value: 'Jane Doe' } });
    // ... other changes to form fields
    fireEvent.click(screen.getByRole('button', { name: /Submit Booking/i }));

    await waitFor(() => {
      expect(screen.getByText(/Thank you for your booking!/i)).toBeInTheDocument();
    });

    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
