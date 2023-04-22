import React from 'react';
import Slider from "react-slick";
import image1 from "../../img/image 6.png";
import IMG1 from "../../img/Product1.png"
import {AiOutlineLeft} from "react-icons/ai";

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
                <div className="flex justify-around items-center mt-32 font-bold">
                    <h1 className="text-4xl text-gray-600">Books</h1>
                    <p className="text-blue-500">View all</p>
                </div>

<AiOutlineLeft/>
                <Slider  {...settings}>
                    <div className="mt-28">

                        <div>
                            <img src={IMG1} alt=""/>
                            <h1 className="text-gray-800 w-[150px] my-1">THE SUBTLE ART OF NOT GIVING A F*CK</h1>
                            <p className="text-gray-600">by Mark Manson</p>
                        </div>

                    </div>
                </Slider>
            </div>

        </>
    )
};

export default Books;

