import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
        <Route path = '/' element= {<Login />} />
        <Route path = '/signup' element= {<Signup />} />
        <Route path = '/home' element= {<Home />} />
        </Routes> 
      </Router>
    </div>
  )
} 

export default App
