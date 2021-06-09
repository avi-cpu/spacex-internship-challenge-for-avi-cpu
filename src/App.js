import React from 'react'
import DataTable from './components/DataTable'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import logo from './download.png';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <div className='container mt-3'>
        <div className='photo'>
        <img  alt='SpaceX' src={logo}/>
        </div>
        <hr className='mb-6' />
        <Route path='/' component={DataTable} />
      </div>
    </Router>
  )
}

export default App
