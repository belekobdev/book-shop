import React from 'react';
import Slider from "react-slick"
import IMG from "../../img/card.svg"
import IMG2 from "../../img/card (2).svg"
import IMG3 from "../../img/card (3).svg"
import IMG4 from "../../img/card (4).svg"
import IMG5 from "../../img/card (5).svg"
import IMG6 from "../../img/card (6).svg"
import {Link, NavLink} from "react-router-dom";
import image1 from "../../img/image 6.png";
import image2 from "../../img/image 7.png";
import image3 from "../../img/image 8.png";


const   BooksAll = () => {
        const   settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
    return (
        <>
            <div className="font-bold containers">
                    <div className="flex justify-around mt-24">
                        <h1 className="text-4xl text-gray-600"> h1Genres</h1>
                        <NavLink to={"/books"} className="text-blue-500 mt-4">View all</NavLink>
                    </div>


                <div className="mt-20 justify-between">
                    <Slider  {...settings}>
                        <img src={IMG} alt="" className="w-[200px] h-[200px]"/>
                        <img src={IMG2} alt="" className="w-[200px] h-[200px]"/>
                        <img src={IMG3} alt="" className="w-[200px] h-[200px]"/>
                        <img src={IMG4} alt="" className="w-[200px] h-[200px]"/>
                        <img src={IMG5} alt="" className="w-[200px] h-[200px]"/>
                        <img src={IMG5} alt="" className="w-[200px] h-[200px]"/>
                        <img src={IMG5} alt="" className="w-[200px] h-[200px]"/>
                        <img src={IMG5} alt="" className="w-[200px] h-[200px]"/>
                        <img src={IMG5} alt="" className="w-[200px] h-[200px]"/>
                        <img src={IMG5} alt="" className="w-[200px] h-[200px]"/>
                        <img src={IMG5} alt="" className="w-[200px] h-[200px]"/>
                        <img src={IMG5} alt="" className="w-[200px] h-[200px]"/>
                        <img src={IMG5} alt="" className="w-[200px] h-[200px]"/>
                        <img src={IMG5} alt="" className="w-[200px] h-[200px]"/>
                        <img src={IMG6} alt="" className="w-[200px] h-[200px]"/>
                    </Slider>
                </div>
                <div className="containers pt-20 font-bold">
                    <h1 className="text-center text-4xl text-gray-600">New Books</h1>
                    <div className="pt-20 flex justify-around">
                        <div className="mt-12">
                            <img src={image1} alt=""/>
                            <h1 className="text-gray-800 w-[150px] my-1">The Climate Book: The Facts and the Solutions</h1>
                            <p className="text-gray-600">by Greta Thunberg</p>
                        </div>
                        <div>
                            <img src={image2} alt=""/>
                            <h1 className="text-gray-800 w-[150px] py-1.5">Rest Is Resistance: A Manifesto</h1>
                            <p className="text-gray-600">by Tricia Hersey</p>
                        </div>
                        <div className="mt-16">
                            <img src={image3} alt=""/>
                            <h1 className="text-gray-800 w-[150px] py-1.5">A New Name: Septology VI-VII</h1>
                            <p className="text-gray-600">by Jon Fosse</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};
export default BooksAll;