import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CoursesProvider } from './context/courses_context';
import { CartProvider } from './context/cart_context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <CoursesProvider>
      <CartProvider>
      <App />
      </CartProvider>
      </CoursesProvider>
    </BrowserRouter>
   
  </React.StrictMode>,
)
