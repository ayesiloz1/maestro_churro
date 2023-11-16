import React, { useState, useEffect } from 'react';
import { getChurros } from './Api'; // Import the API call
import './ChurrosComponent.css';

const ChurrosComponent = () => {
  const [churros, setChurros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadChurros = async () => {
      try {
        setLoading(true);
        const data = await getChurros();
        console.log('Churros data:', data); // Log the fetched churro data
        setChurros(data);
      } catch (error) {
        console.error("Could not fetch churros", error);
        setError('Could not fetch churros');
      } finally {
        setLoading(false);
      }
    };

    loadChurros();
  }, []);

  if (loading) {
    return <div className="churros-loading">Loading churros...</div>;
  }

  if (error) {
    return <div className="churros-error">Error: {error}</div>;
  }

  return (
    <div className="churros-container">
      {churros.map(churro => (
        <div key={churro.id} className="menu-item">
          <div className="menu-item-details">
            <h2 className="menu-item-name">{churro.name}</h2>
            <p className="menu-item-description">{churro.description}</p>
            <p className="menu-item-price">{churro.price}</p> 
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default ChurrosComponent;
