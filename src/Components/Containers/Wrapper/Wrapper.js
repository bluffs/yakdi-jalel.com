import React from 'react';

import './Wrapper.css';
import LeftContent from '../../LeftContent/LeftContent';
import RightContent from '../../RightContent/RightContent';

const wrapper = () => {
    return (
        <div className='Wrapper'>
            <LeftContent />
            <RightContent />
        </div>
    )
}

export default wrapper;