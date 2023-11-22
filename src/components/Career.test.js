import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Career from './Career'; // Adjust the import path as per your project structure

// Optional: Mock global fetch if your tests require it
global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({ success: true }),
}));

beforeEach(() => {
  fetch.mockClear();
});

describe('Career Component', () => {
  it('renders the form correctly', () => {
    render(<Career />);
    expect(screen.getByLabelText(/Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Upload Resume:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Apply/i })).toBeInTheDocument();
  });

  it('allows input for name and email', () => {
    render(<Career />);
    const nameInput = screen.getByLabelText(/Name:/i);
    const emailInput = screen.getByLabelText(/Email:/i);

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    expect(nameInput.value).toBe('John Doe');

    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    expect(emailInput.value).toBe('john@example.com');
  });

  it('handles form submission', async () => {
    render(<Career />);
  
    // Mock fetch
    global.fetch.mockResolvedValueOnce({ ok: true });
  
    // Fill out the form
    fireEvent.change(screen.getByLabelText(/Name:/i), { target: { value: 'Jane Doe' } });
    fireEvent.change(screen.getByLabelText(/Email:/i), { target: { value: 'jane@example.com' } });
    // Mock the file input if necessary
  
    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /Apply/i }));
  
    // Wait for expected outcome
    await waitFor(() => {
      expect(screen.getByText(/Thanks for applying!/i)).toBeInTheDocument();
    });

  });

  
});