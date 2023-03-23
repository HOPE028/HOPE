import React from 'react'
import './App.css'
import HopeProjects from './Components/HopeProjects'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className='App'>
      <Navbar />

      <div style={{ marginTop: 'calc(5vh + 50px)' }}></div>

      <HopeProjects />
    </div>
  )
}

export default App
