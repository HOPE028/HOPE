import React from 'react'
import './App.css'
import HopeProjects from './Components/HopeProjects'
import Navbar from './Components/Navbar'
import './Components/Projects.css'

function App() {
  return (
    <div className='App'>
      <Navbar />

      <div style={{ marginTop: 'calc(5vh + 50px)' }}></div>

      <h1>Tools:</h1>

      <HopeProjects />
    </div>
  )
}

export default App
