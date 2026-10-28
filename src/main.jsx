/*
  ============================================
  📄 main.jsx — React Boot-Up File
  ============================================

  This is where React starts. It:
  1. Finds the <div id="root"> in index.html
  2. Renders our <App /> component inside it
  3. Loads global styles

  Think of this as turning the ignition key in a car.
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
