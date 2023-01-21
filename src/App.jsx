import React from 'react'
import Nav from './components/Nav'
import Intro from './components/Intro'
import Project from './components/Project'
import SocialIcon from './components/SocialIcon'
import Contact from './components/Contact'
import Timeline from './components/Timeline'
import TimelineItem from './components/TimelineItem'
import Footer from './components/Footer'
import './styles/tailwind.css'

function App() {

  return (
    <div className="App">
      <Nav/>
      <Intro/>
      <Project/>
      <SocialIcon/>
    </div>
  )
}

export default App
