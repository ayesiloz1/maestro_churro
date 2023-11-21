import React, { useState } from 'react';
import './Menu.css';
import ChurroImage from './menu_images/churro.jpeg';
import NutellaImage from './menu_images/nutella.jpg';
import DulceImage from './menu_images/vanilla.jpg';

function Menu() {
    const initialOrderState = {
        'Classic Churros': { quantity: 0, price: 3.99, image: ChurroImage },
        'Stuffed Churro with Nutella': { quantity: 0, price: 4.99, image: NutellaImage },
        'Stuffed Churro with Dulce de Leche': { quantity: 0, price: 4.99, image: DulceImage }
    };

    const [order, setOrder] = useState(initialOrderState);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState("");

    const handleQuantityChange = (itemName, quantity) => {
        setOrder(prevOrder => ({
            ...prevOrder,
            [itemName]: { ...prevOrder[itemName], quantity: parseInt(quantity) }
        }));
    };

    const calculateTotal = () => {
        return Object.values(order).reduce((total, item) => {
            return total + (item.quantity * item.price);
        }, 0).toFixed(2);
    };

    const submitOrder = async () => {
        const total = calculateTotal();
        const orderItems = Object.keys(order).reduce((acc, key) => {
          if (order[key].quantity > 0) {
            acc[key] = order[key].quantity;
          }
          return acc;
        }, {});

        if (Object.keys(orderItems).length === 0) {
          setSubmitError("Please add some items to your order.");
          return;
        }

        try {
          const response = await fetch('http://localhost:8000/api/submit-order/', {
            method: 'POST',
            body: JSON.stringify({ order: orderItems, total }),
            headers: {
              'Content-Type': 'application/json'
            },
          });

          if (response.ok) {
            setIsSubmitted(true);
            setOrder(initialOrderState);
            setSubmitError("");
          } else {
            const errorText = await response.text();
            setSubmitError(`Error placing order: ${errorText}`);
          }
        } catch (error) {
          setSubmitError(`An error occurred: ${error.message}`);
        }
    };

    return (
        <div className="menu-container">
            <h1 className="menu-heading">Our Churros</h1>
            {isSubmitted ? (
                <div className="order-confirmation">Thank you for ordering!</div>
            ) : (
                <>
                    {Object.entries(order).map(([itemName, itemDetails]) => (
                        <div className="menu-item" key={itemName}>
                            <div className="menu-item-info">
                                <h2 className="menu-item-name">{itemName}</h2>
                                <p className="price">${itemDetails.price}</p>
                                <input
                                    type="number"
                                    min="0"
                                    value={itemDetails.quantity}
                                    onChange={(e) => handleQuantityChange(itemName, e.target.value)}
                                />
                            </div>
                            <img src={itemDetails.image} alt={itemName} className="menu-item-image" />
                        </div>
                    ))}
                    <div className="total-section">
                        <p>Total: ${calculateTotal()}</p>
                        <button onClick={submitOrder}>Submit Order</button>
                        {submitError && <div className="submit-error">{submitError}</div>}
                    </div>
                </>
            )}
        </div>
    );
}

export default Menu;
