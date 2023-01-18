import React from 'react'
import Nav from './components/Nav'
import Header from './components/Header'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Timeline from './components/Timeline'
import TimelineItem from './components/TimelineItem'
import Footer from './components/Footer'
import './styles/tailwind.css'

function App() {

  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Intro/>
      <Portfolio/>
      <TimelineItem/>
      {/* <Contact/>
      <Footer/> */}
    </div>
  )
}

export default App
