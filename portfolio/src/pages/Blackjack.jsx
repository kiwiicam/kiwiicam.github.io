import React from 'react'
import '../css/Blackjack.css';
import '../css/Global.css'
import ProjectCard from '../components/ProjectCard';
function Blackjack() {
  return (
    <div className='bj-main'>
      <div className='bj-text-center'>
        <h1>
          Blackjack
        </h1>
      </div>
      <div className='bj-main-text'>
        <p>This project was a blackjack game coded entirely in java and included a gui using the AWT and Swing libraries, it included an Apache Derby embedded database, you are able to create new accounts or log in to an existing one which tracks your high score, money lost, money won and many other statistics. Before you play you can select an amount to bet. This game is played against a dealer who just like any dealer in a casino will hit until 17 is reached where the dealer will stand or bust. This project originially started out as a CLI blackjack game which was then expanded into a larger game with a gui which is where it stands today. Below are some in-game images, there is also a Github repo for this project which can be found <a href="https://github.com/kiwiicam/kiwimoo-blackjack-gui" target="_blank">here</a>.</p>
      </div>
      <div className="even-space-bj">
        <ProjectCard
          imageURL="https://kiwiicam.github.io/bj-img1.jpg"
          text="Blackjack game with the players statistics on the left side of the screen, your cards on the bottom with buttons to make moves with the dealers cards up the top."
          left={true}
        />
        <ProjectCard
          imageURL="https://kiwiicam.github.io/bj-img2.jpg"
          text="Betting screen allowing you to bet upto $500 and is chosen by clicking on each chip."
          left={true}
        />
      </div>
    </div>
  )
}

export default Blackjack
