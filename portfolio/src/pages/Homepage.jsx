import React from 'react'
import Star from '../components/Star';
import "../css/Homepage.css";
import "../css/Global.css";

function Homepage() {

    // const numStars = 75;
    // const stars = new Array(numStars).fill(0);
    // {stars.map((_, index) => (
    //     <Star key={index} />
    // ))}

    return (
        <div className='bg'>
            <div className='about'>
                <div className='about-text'>
                    <div className='text-container'>
                        <h1>Campbell Boulton</h1>
                        <h3>Software Developer, Hard worker.</h3>
                        <p>Hi, I'm Campbell, I am currently studying at the Auckland University of Technology pursuing a degree in computer and information science, my major being software development, with my minor being artificial intelligence, I enjoy coding and solving problems, and like to code in my spare time, I also enjoy playing football and video games. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur accusamus officia fugit iure ad sed, aspernatur earum exercitationem temporibus quidem dignissimos! Quisquam ea doloremque totam voluptatem fugiat fuga molestiae saepe?</p>
                    </div>

                    <div className='about-image-container'>
                        <img src='http://localhost:3000/pfp.jpg'></img>
                    </div>
                </div>
            </div>
            <div className='projects'>
                <div className='proj-text'>
                    <div className='proj-stuff'>
                        <h1>Projects</h1>
                        <h3>My past, current & future projects</h3>
                    </div>
                    <div></div>
                </div>
                <div className='project-container'>
                    <div className='proj-box'>


                    </div>
                    <div className='proj-box'>
                    </div>
                    <button className='button-proj'>View all</button>

                </div>
            </div>
        </div>
    )
}

export default Homepage
