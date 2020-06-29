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
                    One
                </div>
                <div className="Two">
                    Two
                </div>
                <div className="Three">
                    Three
                </div>
            </div>
        </div>
    );
}

export default header;