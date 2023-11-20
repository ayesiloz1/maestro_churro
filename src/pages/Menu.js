import React, { useState } from 'react';
import './Menu.css';
// Import the images from the menu_images folder
import churroImage from './menu_images/churro.jpeg';
import nutellaImage from './menu_images/nutella.jpg';
import vanillaImage from './menu_images/vanilla.jpg';

function Menu() {
    const [order, setOrder] = useState({
        'Classic Churro': { quantity: 0, price: 3.99, image: churroImage },
        'Nutella Churro': { quantity: 0, price: 4.99, image: nutellaImage },
        'Vanilla Churro': { quantity: 0, price: 4.49, image: vanillaImage }
    });
    // Function to handle quantity changes
    const handleQuantityChange = (itemName, quantity) => {
        setOrder(prevOrder => ({
            ...prevOrder,
            [itemName]: { ...prevOrder[itemName], quantity: quantity }
        }));
    };

    // Function to calculate the total
    const calculateTotal = () => {
        return Object.values(order).reduce((total, item) => {
            return total + (item.quantity * item.price);
        }, 0).toFixed(2); // Fixing the total to 2 decimal places
    };

    // Function to handle the final order submission
    const submitOrder = async () => {
        const total = calculateTotal();
        console.log(`The total order amount is $${total}`);
        console.log('Order details:', order);

        // Here you would send a POST request to your backend server
        // Replace 'YOUR_BACKEND_ENDPOINT' with your actual backend endpoint
        /*
        const response = await fetch('YOUR_BACKEND_ENDPOINT', {
            method: 'POST',
            body: JSON.stringify({ order, total }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (response.ok) {
            console.log('Order placed successfully');
            // Reset order or navigate to a confirmation page
        } else {
            console.error('Error placing order');
        }
        */
    };

    return (
        <div className="menu-container">
            <h1 className="menu-heading">Our Churros</h1>
            {Object.entries(order).map(([itemName, itemDetails]) => (
                <div className="menu-item" key={itemName}>
                    <img src={itemDetails.image} alt={itemName} className="menu-image" />
                    <h2 className="menu-item-name">{itemName}</h2>
                    <p className="menu-item-description">
                        {/* Item description based on itemName */}
                    </p>
                    <p className="price">${itemDetails.price}</p>
                    <input
                        type="number"
                        min="0"
                        value={itemDetails.quantity}
                        onChange={(e) => handleQuantityChange(itemName, parseInt(e.target.value))}
                    />
                </div>
            ))}
            <div className="total-section">
                <p>Total: ${calculateTotal()}</p>
                <button onClick={submitOrder}>Submit Order</button>
            </div>
        </div>
    );
}

export default Menu;
