import React from 'react'
import '../css/Pricehound.css'
import ProjectCard from '../components/ProjectCard'
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
      <div className="even-space-ph">
        <ProjectCard
          imageURL="https://kiwiicam.github.io/ph-img1.jpg"
          text="Homepage showcasing our sleek UI and real-time product comparison."
          left={true}
        />
        <ProjectCard
          imageURL="https://kiwiicam.github.io/ph-img2.jpg"
          text="Login page with an email login, Google sign in and forgot password options all with functionality."
          left={true}
        />
        <ProjectCard
          imageURL="https://kiwiicam.github.io/ph-img3.jpg"
          text="Search page after a search was made displaying the results, with filters and currency coversion on the left."
          left={true}
        />
      </div>
    </div>
  )
}

export default PriceHound
