import React from 'react'
import '../css/Blackjack.css';
import '../css/Global.css'
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
      <div className='even-space-bj'>
        <div className='bj-img-text'>
          <div className='bj-left'>
            <img src='https://kiwiicam.github.io/bj-img1.jpg'></img>
          </div>
          <div className='bj-right'>
            <p>
              Shown on the left is the main playing screen, after a user has selected the betting amounts and entered a new or existing name, their statistics will show up, the user will then be able to play, this game utilizes a Apache Derby database to store the data locally on the users computer, Apache Derby uses SQL to store and retrieve data which allows users to pick back up where they left off with the same stats based on the name they enter which acts as the primary key.
            </p>
          </div>
        </div>
        <div className='bj-img-text2'>
          <div className='bj-left2'>
            <p>
              Shown on the right is the betting screen which includes some chips where the user can click to increase the betting amount, they start with 500 chips and can bet a maximum of 500 chips and a minimum of 50 chips, and when they run out must restart and get reset to 500. The way the deck is shuffled is by utlizing the random Class in Java which essentially loads all the cards into an arraylist and then is called anytime a card is drawn which randomly selects a card adds it to the total of who drew the card.
            </p>
          </div>
          <div className='bj-right2'>
            <img src='https://kiwiicam.github.io/bj-img2.jpg'></img>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Blackjack
