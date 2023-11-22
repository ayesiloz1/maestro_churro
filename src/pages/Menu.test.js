import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Menu from './Menu'; 

describe('Menu Component', () => {
  it('renders the menu items correctly', () => {
    render(<Menu />);
    expect(screen.getByText(/Classic Churros/i)).toBeInTheDocument();
    expect(screen.getByText(/Stuffed Churro with Nutella/i)).toBeInTheDocument();
    expect(screen.getByText(/Stuffed Churro with Dulce de Leche/i)).toBeInTheDocument();
  });

  it('handles quantity changes for menu items', () => {
    render(<Menu />);
    const firstItemQuantityInput = screen.getByLabelText('Classic Churros Quantity');
    fireEvent.change(firstItemQuantityInput, { target: { value: '3' } });
    expect(firstItemQuantityInput.value).toBe('3');
  });

  it('calculates total based on selected quantities', () => {
    render(<Menu />);
    const firstItemQuantityInput = screen.getByLabelText('Classic Churros Quantity');
    fireEvent.change(firstItemQuantityInput, { target: { value: '2' } });

    const total = screen.getByText(/Total: \$7.98/i); 
    expect(total).toBeInTheDocument();
  });

  it('handles order submission', async () => {
    // Mock fetch if your component uses it for submitting orders
    global.fetch = jest.fn(() =>
      Promise.resolve({ ok: true, json: () => Promise.resolve({ message: 'Order submitted successfully!' }) })
    );

    render(<Menu />);
    const firstItemQuantityInput = screen.getByLabelText('Classic Churros Quantity');
    fireEvent.change(firstItemQuantityInput, { target: { value: '2' } });

    const submitButton = screen.getByRole('button', { name: /Submit Order/i });
    fireEvent.click(submitButton);

    // Wait for an expected outcome, such as an order confirmation message
    await waitFor(() => {
      expect(screen.getByText(/Thank you for ordering!/i)).toBeInTheDocument();
    });
  });

  
});
