import React from 'react';
import img from '../../img/about-img.png'

const About = () => {
    return (
        <div id="about" className="py-[80px]">
            <div className="container">
                <h1 className="text-center text-black font-normal text-[48px]">About Us</h1>
                <div className="about flex items-center justify-between ">
                    <img src={img} alt=""/>
                    <h5 className="text-[18px] font-[400] line-clamp-[140%]">We believe that books have the power to change lives, and <br/> we're dedicated to helping our customers find the perfect <br/> book for them. Whether you're looking for an escape from <br/> reality, an educational read, or a book to inspire you, we've <br/> got you covered. <br/>
                        Thank you for choosing to  shop with us. We look forward to <br/> helping you discover your next favorite book!</h5>
                </div>
            </div>
        </div>
    );
};

export default About;