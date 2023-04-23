import React from 'react';
import Slider from "react-slick";
import IMG1 from "../../img/Product1.png";
import IMG2 from "../../img/Product2.png";
import IMG3 from "../../img/Product3.png";
import IMG4 from "../../img/Product4.png";
import IMG5 from "../../img/Product5.png";
import {NavLink} from "react-router-dom";


const Books = () => {
    const settings = {
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
            },
        ]
    };


    return (
        <>
            <div className="containers mt-20">
                <div className="flex justify-between items-center mt-32 font-bold">
                    <h1 className="text-4xl text-gray-600">Books</h1>
                    <NavLink to={"/books"} className="text-blue-500 mt-4">View all</NavLink>
                </div>


               <div className="mt-20 font-bold">
                   <Slider  {...settings}>
                       <div>
                           <img src={IMG1} alt=""/>
                           <h1 className="text-gray-800 w-[190px] my-1">THE SUBTLE ART OF NOT GIVING A F*CK</h1>
                           <p  className="text-gray-600">by Mark Manson</p>
                       </div>
                       <div>
                           <img src={IMG2} alt=""/>
                           <h1 className="text-gray-800 w-[150px] my-1">8 RULES OF LOVE</h1>
                           <p  className="text-gray-600">by Jay Shetty</p>
                       </div>
                       <div>
                           <img src={IMG3} alt=""/>
                           <h1 className="text-gray-800 w-[150px] my-1">THE CREATIVE ACT</h1>
                           <p  className="text-gray-600 w-[180px]">by Rick Rubin with Neil Strauss</p>
                       </div>
                       <div>
                           <img src={IMG4} alt=""/>
                           <h1 className="text-gray-800 w-[200px] my-1">THE BOY, THE MOLE, THE FOX AND THE HORSE</h1>
                           <p  className="text-gray-600">by Charlie Mackesy</p>
                       </div>
                       <div>
                           <img src={IMG5} alt=""/>
                           <h1 className="text-gray-800 w-[150px] my-1">HARRY POTTER</h1>
                           <p  className="text-gray-600">by J.K. Rowling</p>
                       </div>
                   </Slider>
               </div>
            </div>
        </>
    )
};

export default Books;

