import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyComponent from './App.jsx'
import ShowContextProvider from "./context/ShowContextProvider";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShowContextProvider>
    <MyComponent />

    </ShowContextProvider>
  </React.StrictMode>,
)
