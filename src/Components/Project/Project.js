import React from 'react';

import './Project.css';

const project = (props) => {
    return (
        <div className='Project'>
            <div className='Left'>
                Image
            </div>
            <div className='Right'>
                <div className='Title' >{props.title}</div>
                <br />
                <div className='Desc' >{props.desc}</div>
            </div>
        </div>
    )
}

export default project;