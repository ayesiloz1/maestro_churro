import React, { useState, useEffect } from 'react';
import { getChurros } from './Api.js'; // Import the API call

const ChurrosComponent = () => {
  const [churros, setChurros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadChurros = async () => {
      try {
        setLoading(true);
        const data = await getChurros();
        setChurros(data);
      } catch (error) {
        setError('Could not fetch churros');
        console.error("Could not fetch churros", error);
      } finally {
        setLoading(false);
      }
    };

    loadChurros();
  }, []);

  if (loading) {
    return <div>Loading churros...</div>; // Placeholder for loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Placeholder for error state
  }

  // Render logic for displaying churros
  return (
    <div>
      <h1>Churros List</h1>
      {churros.length > 0 ? (
        <ul>
          {churros.map((churro) => (
            <li key={churro.id}>{churro.name} - ${churro.price}</li>
          ))}
        </ul>
      ) : (
        <div>No churros available.</div>
      )}
    </div>
  );
};

export default ChurrosComponent;
