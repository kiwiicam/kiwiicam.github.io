import React from 'react'
import '../css/Pricehound.css'
function PriceHound() {
  return (
    <div className='ph-main'>
      <div className='ph-text-center'>
        <h1>
          Pricehound
        </h1>
      </div>
      <div className='ph-main-text'>
        <p>This project was a group project for one of my University assignments, the whole point of the class was to create a piece of software, and follow the SCRUM framework, this was a 4 person group project, my group ended up choosing to do a price comparision website which was called pricehound. This project was quite large and included technologies such as React, Node.js, Express.js, Firebase, Puppeteer and Google cloud for hosting. Some features I worked on included authentication through Firebase, the wishlist feature which uses Firestore to store images and text related to the item, currency conversion, changing profile pictures and a cookies banner just to name a few. This project was a very good look at how software is actually maintained and worked on in a group setting and following the SCRUM framework helped us stay organized and keep track of what needed to be done our main organization tool was trello where we kept track of what tickets needed to be done in each sprint. This project was live but has since been taken down due to the class finishing. This project does have a Github repo where you can find <a href="https://github.com/thomasbrears/SDP_PriceHound" target="_blank">here</a>. Provided below are some images from the web application.</p>
      </div>
      <div className='even-space-ph'>
        <div className='bj-img-text'>
          <div className='bj-left'>
            <img src='https://kiwiicam.github.io/ph-img1.jpg'></img>
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
            <img src='https://kiwiicam.github.io/ph-img2.jpg'></img>

          </div>
        </div>
      </div>
    </div>
  )
}

export default PriceHound
