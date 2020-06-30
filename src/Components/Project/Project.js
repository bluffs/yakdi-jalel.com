import React from 'react';

import './Project.css';
import Circle from '../../images/circle.png';

const project = (props) => {
    return (
        <div className='Project'>
            <div className='LeftProject'>
                <img className="ImageProject" src={require('../../images/' + props.image)} alt={props.title} />
                <img className="Circle" src={Circle} alt="circle" />
            </div>
            <div className='RightProject'>
                <div className='Title' >{props.title}</div>
                <br />
                <div className='Desc' >{props.desc}</div>
            </div>
        </div>
    )
}

export default project;