import React from 'react'
import img1 from '../Assest/img1.jpg'
import img2 from '../Assest/img2.jpg'
import img3 from '../Assest/img3.jpg'
import img4 from '../Assest/img4.jpg'
import './ImageSlider2.css'

function ImageSlider2() {
    return (
        <div>
            <div class="slideshow-container">
                <div class="mySlides fade">
                    <img src={img1} alt="Slide 1"/>
                </div>

                <div class="mySlides fade">
                    <img src={img2} alt="Slide 2"/>
                </div>
               
            </div>

        </div>
    )
}

export default ImageSlider2
