import React from 'react';
import './HeaderSection.css';
import ImageSlider from './ImageSlider';
import ImageSlider2 from './ImageSlider2';
import logo from '../Assest/logo.png'

function HeaderSection() {
    return (
        <div className='bgHeader'>
            <div className='d-flex justify-content-center align-items-center h-100'>
                <div className='row'>
                    <div className="text-center">
                        <img src={logo} width={100} className='mainlogo my-4' />
                        <h1>Welcome to CareCode</h1>
                        <p>Elevating your healthcare software experience.<br/>We focus on robust, user-friendly solutions for healthcare institutions.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderSection;
