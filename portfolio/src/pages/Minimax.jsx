import React from 'react'
import ProjectPage from './ProjectPage'
import { useNavigate } from 'react-router-dom';
function Minimax() {
    const navigate = useNavigate();
    const title = "Minimax Connect-4 Bot"
    const para = (
        <h3>
            This project involved creating a bot to be quite good at connect-4 and utilizes an evaluation function alongside the minimax algorithm to go through the game tree based on the depth chosen and find the best move for that position. The reason for this project was due to my Artificial Intelligence class, which at the time was going over game theory. Learning about Minimax and how it was used in the first chess bot to beat the top chess player at the time was very interesting. I learned about how it worked then implemented it.
            This project has a GitHub repo which can be found <a href='https://github.com/kiwiicam/connect-four-bot' target="_blank" rel="noopener noreferrer">here</a>.
            You can verse the bot by going to this page <span onClick={() => {navigate('/')}}>here</span>. Provided below are some images of the bot.
        </h3>
    );
    const image = [
        {
            imageURL: 'https://kiwiicam.github.io/ph-img1.jpg',
            text: 'This is project 1',
            left: true
        },
        {
            imageURL: 'https://kiwiicam.github.io/ph-img2.jpg',
            text: 'This is project 2',
            left: false
        }
    ];

    return (
        <ProjectPage title={title} text={para} image={image} />
    )
}

export default Minimax
