import React from 'react';

import './Wrapper.css';
import LeftContent from '../../Components/LeftContent/LeftContent';
import RightContent from '../../Components/RightContent/RightContent';

const wrapper = () => {
    return (
        <div className='Wrapper'>
            <LeftContent />
            <RightContent />
        </div>
    )
}

export default wrapper;