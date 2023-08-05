import React from 'react';
import newBanner from '../../img/newBanner.jpg';
import './banner.css';


export const Banner = () => {
    return (
        <div>
            <div className="banner-container">
                <img src={newBanner} alt="main banner"  className='image-container'/>
            </div>
        </div>
    )
}
