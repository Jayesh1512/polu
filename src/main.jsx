import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Home />
  </React.StrictMode>,
)
