import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {MercanciaProvider} from './context/jollas'
import {CartProvider} from './context/cart';
import {BrowserRouter as Router} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
 
    <MercanciaProvider>
    <CartProvider>
    <React.StrictMode>
      <Router>
      <App />
      </Router>
        
    </React.StrictMode>
    </CartProvider>
    </MercanciaProvider>
   
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
