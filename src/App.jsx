import React from 'react'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Timeline from './components/Timeline'
import Intro from './components/Intro'
import Footer from './components/Footer'
import './styles/tailwind.css'

function App() {

  return (
    <div className="App">
      <Intro/>
      <Portfolio/>
    </div>
  )
}

export default App
