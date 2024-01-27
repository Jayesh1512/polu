import React from 'react'
import ReactDOM from 'react-dom/client'
import Page3 from './components/Page3.jsx'
import './index.css'
import Home from './components/Home.jsx'
import Page2 from './components/Page2.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <Page2 />
    <Page3 />
  </React.StrictMode>,
)
