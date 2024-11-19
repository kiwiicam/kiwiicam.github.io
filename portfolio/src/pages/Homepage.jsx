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
                        <h2>Pricehound &gt;</h2>
                        <h3>Pricehound was a group project for one of my university classes, this project involved web scraping and comparing prices from various sources.</h3>

                        <p>July-October 2023</p>

                    </div>
                    <div className='proj-box'>
                        <h2>Blackjack GUI &gt;</h2>
                        <h3>This project involved creating a blackjack game entirely written in Java, and using libraries such as swing and awt to create a graphical user interface and also includes an Apache Derby embedded database.</h3>

                        <p>April-June 2023</p>
                    </div>
                    <button className='button-proj'>View all &gt;</button>

                </div>
            </div>
            <div className='experience'>
                <div className='center-ex-text'>
                    <div className='ex-text'>
                        <h1>Experience</h1>
                        <h3>My past & current work experience</h3>
                    </div>
                </div>
                <div className='center-inner'>
                    <div className='inner'>
                        <div className='left-side'>
                            <div className='circle'>

                            </div>
                            <div className='line'>

                            </div>
                            <div className='circle'>

                            </div>
                            <div className='line'>

                            </div>
                            <div className='circle'>

                            </div>
                            <div className='line'>

                            </div>
                            <div className='circle'>

                            </div>
                            <div className='line'>

                            </div>
                            <div className='circle'>

                            </div>

                        </div>
                        <div className='right-side'>
                            <div className='work-ex-text'>
        
                            </div>
                            <div className='work-ex-text'>

                            </div>
                            <div className='work-ex-text'>

                            </div>
                            <div className='work-ex-text'>

                            </div>
                            <div className='work-ex-text'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
