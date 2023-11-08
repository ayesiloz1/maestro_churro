import React from 'react';
import Home from './pages/Home/Home'; // Ensure that the path is correct based on your file structure
import './App.css'; // Your global styles for the app

function App() {
  return (
    <div className="App">
      {/* Render the Home component as the main content */}
      <Home />
    </div>
  );
}

export default App;
