import React from 'react'
import '../css/Projects.css'
import { useNavigate } from 'react-router-dom'
function Projects() {
  const navigate = useNavigate();
  return (
    <div className='project-page'>
      <div className='center-txt'>
        <h1>Projects</h1>
        <h3>My past, current & future projects</h3>
      </div>

      <div className='proj-box' onClick={() => { navigate('/projects/pricehound') }}>
        <h2>Pricehound &gt;</h2>
        <h3>Pricehound was a group project for one of my university classes, this project involved web scraping and comparing prices from various sources. The technologies used include React, Node.js/Express.js, Puppeteer and Firebase</h3>

        <p>July-October 2024</p>

      </div>
      <div className='proj-box' onClick={() => { navigate('/projects/blackjack') }}>
        <h2>Blackjack GUI &gt;</h2>
        <h3>This project involved creating a blackjack game entirely written in Java, and using libraries such as swing and awt to create a graphical user interface and also includes an Apache Derby embedded database.</h3>

        <p>April-June 2024</p>
      </div>
      <div className='proj-box' onClick={() => { navigate('/projects/minimax')}}>
        <h2>Minimax Connect-4 &gt;</h2>
        <h3>This project involved creating a minimax algorithm to find a near optimal move against an opponent in the game Connect-4.</h3>

        <p>March 2025 - April 2025</p>
      </div>
      
    </div>
  )
}

export default Projects
