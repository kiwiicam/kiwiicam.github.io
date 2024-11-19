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
                        <h3>Pricehound was a group project for one of my university classes, this project involved web scraping and comparing prices from various sources. The technologies used include React, Node.js/Express.js, Puppeteer and Firebase</h3>

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
                                <img src="http://localhost:3000/pushpay.png" />
                            </div>
                            <div className='line'>

                            </div>
                            <div className='circle'>
                                <img src='http://localhost:3000/briscoe.png'></img>
                            </div>
                            <div className='line'>

                            </div>
                            <div className='circle'>
                                <img src="http://localhost:3000/ropes.png" />
                            </div>
                            <div className='line'>

                            </div>
                            <div className='circle'>
                                <img src="http://localhost:3000/side.png" />
                            </div>
                            <div className='line'>

                            </div>
                            <div className='circle'>
                                <img src="http://localhost:3000/spotless.png" />
                            </div>

                        </div>
                        <div className='right-side'>
                            <div className='work-ex-text'>
                                <h1>
                                    Pushpay / Command IT
                                </h1>
                                <h3>
                                    Working as a contractor for Pushpay through Command IT. Onsite IT, includes duties involving setting up Macbooks/Windows laptops, setting up docking stations and monitors, coordinating desk setups and troubleshooting issues whilst coordinating with their US IT team.
                                </h3>
                                <p>
                                    September 2024 - Present
                                </p>

                            </div>
                            <div className='work-ex-text'>
                                <h1>
                                    Briscoe Group
                                </h1>
                                <h3>
                                    Sales assistant, includes duties such ass fulfilling web orders, customer enquiries, stocking shelves, attending to checkout operations whilst maintaing a varity of knowledge of our products and where they are located around the store.
                                </h3>
                                <p>
                                    August 2023 - Present
                                </p>
                            </div>
                            <div className='work-ex-text'>
                                <h1>
                                    Rocket ropes
                                </h1>
                                <h3>
                                    Level 2 instructor, includes duties such as leading groups through the climbing setup including safety and rules whilst assisting putting on gear, kept watch on the course and provided rescues when necessary.
                                </h3>
                                <p>
                                    Febuary 2022 - January 2023
                                </p>
                            </div>
                            <div className='work-ex-text'>
                                <h1>
                                    Sidekicker
                                </h1>
                                <h3>
                                    General labour, includes duties such as heavy lifting, cleaning and any form of assistance/help needed.
                                </h3>
                                <p>
                                    August 2021 - Febuary 2022
                                </p>
                            </div>
                            <div className='work-ex-text'>
                                <h1>
                                    Eden park catering
                                </h1>
                                <h3>
                                    General assistance, includes duties such as deep frying food, packing/seasoning food, stocking drink fridges and cleaning.
                                </h3>
                                <p>
                                    November 2020 - December 2021
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='education'>
                <div className='edu-title'>
                    <h1>
                        Education
                    </h1>
                    <h3>Academic background</h3>
                </div>
                <div className='edu-text'>
                    <div className='edu-para'>
                        <h3>
                            Primary/Intermediate Years
                        </h3>
                        <p>
                            My schooling during these years resided at Blockhouse Bay Primary school and Blockhouse Bay intermediate school. Throughout these years I was heavily invested in sports quite heavily, whilst still maintaining my grades, this is also where I got my first glance at computers - during my ICT classes.
                        </p>
                    </div>
                    <div className='edu-para'>
                        <h3>
                            College/High school Years
                        </h3>
                        <p>
                            My schooling throughout this period was centered at Lynfield College, where my sporting passion took a backseat and my academics took first place, I took more advanced mathematics classes and during my final 2 years at college my school offered 2 computer related classes which I found kicked off my passion for computer science and it’s related fields, one of these classes was programming, specifically in Python, where I struggled but enjoyed.
                        </p>
                    </div>
                    <div className='edu-para'>
                        <h3>
                            University Years (Current)
                        </h3>
                        <p>
                            I am currently studying at the Auckland University of Technology, pursuing a degree in computer science, majoring in software development and minoring in artificial intelligence, where I have taken classes such as Data structures and algorithms, Software development practice, Many programming classes, Operating Systems and multiple Math classes, such as Algebra and discrete mathematics and also Math for computing, My time so far at AUT has been unmatched the amount I have learned, from group projects to my coding skills, I hope to learn much more as my time here continues.
                        </p>
                    </div>
                </div>

            </div>
            <div className='contact'>
                <div className='contact-title'>
                    <h1>Contact</h1>
                    <h3>
                        Ways you could contact me!
                    </h3>
                </div>
                <div className='contact-container'>
                    <h3>
                        Via contact form
                    </h3>
                    <input id='email' className='contact-form' placeholder='Email' type='email'>
                    </input>

                    <input id='name' className='contact-form' placeholder='Name' >
                    </input>

                    <input id='message' className='contact-form' placeholder='Message'>
                    </input>

                    <button className='contact-button'> Send message &gt;</button>
                </div>
            </div>
        </div>
    )
}

export default Homepage
