import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import WatchListProvider from './context/WatchListProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    
  <React.StrictMode>
    <WatchListProvider >
        <App />
    </WatchListProvider>
  </React.StrictMode>
    </BrowserRouter>
);