import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from './Contact'; // Adjust the path according to your project structure

// Mock `fetch` globally before all tests
beforeAll(() => {
  global.fetch = jest.fn();
});

// Restore `fetch` to its original state after all tests
afterAll(() => {
  global.fetch.mockRestore();
});
// Verifies that the form and contact method buttons are rendered correctly.
describe('Contact Component', () => {
  it('renders the contact form correctly', () => {
    render(<Contact />);
    expect(screen.getByRole('heading', { name: /Contact Us/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Email/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Message/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Call/i })).toBeInTheDocument();
  });
//Checks if user input is handled correctly for each form field, depending on the contact method selected.
  it('allows selection of contact method and input for fields', () => {
    render(<Contact />);
    fireEvent.click(screen.getByRole('button', { name: /Message/i }));
    expect(screen.getByLabelText(/Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Your Message:/i)).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText(/Name:/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Your Message:/i), { target: { value: 'Hello there!' } });

    expect(screen.getByLabelText(/Name:/i).value).toBe('John Doe');
    expect(screen.getByLabelText(/Your Message:/i).value).toBe('Hello there!');
  });
//Simulates form submission and verifies that a thank you or confirmation message is displayed.
  it('handles form submission', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ message: 'Thank you for contacting!' })
    });

    render(<Contact />);
    fireEvent.click(screen.getByRole('button', { name: /Message/i }));
    fireEvent.change(screen.getByLabelText(/Name:/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Your Message:/i), { target: { value: 'Hello there!' } });
    fireEvent.click(screen.getByRole('button', { name: /Send/i }));

    await waitFor(() => {

      expect(screen.getByText(/Thank you for contacting!/i)).toBeInTheDocument();
    });
  });
});
