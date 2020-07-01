import React from 'react';

import './Header.css';
import Logo from '../../images/logo.png';

const header = () => {
    return (
        <div className="Header">
            <div className="Left">
                <img className='Logo' src={Logo} alt='LOGO' />
            </div>
            <div className="Right">
                <div className="One">
                    <a href='#intro' className='Link'>Intro</a>
                </div>
                <div className="Two">
                    <a href='#projets' className='Link'>Mes Projets</a>
                </div>
                <div className="Three">
                    <a href='' className='Link'>Mon CV</a>
                </div>
            </div>
        </div>
    );
}

export default header;