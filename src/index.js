import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18+
import App from './App';
import './index.css';

// Create a root element to render the App
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
