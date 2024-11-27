import React from 'react'
import '../css/Star.css';
import "../css/Global.css";
const Star = () => {

    const width = window.innerWidth;
    const height = window.innerHeight;

    const size = Math.random() * 4 + 3;
    const positionX = Math.random() * 96;
    const positionY = Math.random() * 455;
    const animationDuration = Math.random() * 5 + 5;
    const animationDelay = Math.random() * 1 + 's';

    const rand = Math.random();
    var dir = 'bounce';

    if (rand >= 0.75) {
        dir = 'bounce2'
    }
    else if (rand >= 0.5 && rand < 0.75) {
        dir = 'bounce3'
    }
    else if (rand >= 0.25 && rand < 0.5) {
        dir = 'bounce4'
    }

    const style = {
        width: `${size}px`,
        height: `${size}px`,
        left: `${positionX}%`,
        top: `${positionY}%`,
        animationDuration: `${animationDuration}s`,
        animationDelay: animationDelay,
        animationTimingFunction: 'ease-in-out',
        animation: `${dir} 10s infinite`,

    };

    return <div className="star" style={style}></div>;
};

export default Star;
