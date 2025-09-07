import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Entry point for the React application. Mounts the App component
// onto the root DOM node defined in index.html.
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);