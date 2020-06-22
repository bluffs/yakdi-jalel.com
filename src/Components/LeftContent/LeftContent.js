import React from 'react';
import {Animated} from 'react-animated-css';

import './LeftContent.css';
import Img from '../../images/bonjour.svg';

const leftContent = () => {
    return (
        <div className='LeftContent'>
            <Animated animationIn="bounceInLeft" isVisible={true} >
            <img className="Welcome" src={Img} alt="Bonjour et bienvenue" />
            <p>Je suis 
                <br />
                <span className="Name">Jalel Yakdi</span>
            </p>
            <p>
                Je suis un
                <br />
                <span className="Name" >Développeur web fullstack </span>
            </p>
            </Animated>
        </div>
    );
};

export default leftContent;