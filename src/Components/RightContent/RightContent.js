import React from 'react';
import {Animated} from 'react-animated-css';

import './RightContent.css';
import Dev from "../../images/dev-design.svg";

const rightContent = () => {
    return (
        <div className='RightContent'>
            <Animated animationIn="bounceInRight" isVisible={true} >
            <img className="Dev" src={Dev} alt="Dev-Design" />
            </Animated>
        </div>
    );
};

export default rightContent;