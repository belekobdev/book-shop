import React from 'react';
import imgs from '../img/product-img.svg'
import {AiOutlineHeart} from "react-icons/ai";
import {BsShare} from "react-icons/bs";

const ProductDetail = () => {
    return (
        <div className="flex p-[64px] items-center ">
            <img src={imgs} alt="img" className="ml-[236px]" />
            <div className=" ml-[162px]">
                <div className=" flex">
                    <h1 className="text-[#19272E] text-[18px] font-normal  w-[300px]">
                        THE BOY, THE MOLE, THE FOX AND THE HORSE
                    </h1>
                    <AiOutlineHeart className="text-[#19272E] mt-[7px] ml-[18px]" />
                    <BsShare className="text-[#19272E] mt-[7px] ml-[20px] " />
                </div>
                <p className="text-[16px] text-[#19272E] opacity-70  mt-2 mb-8">
                    by Charlie Mackesy
                </p>
                <h3 className=" text-[#19272E] w-[350px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h3>
                <h2 className="text-[#818EEA] text-[24px] mt-8 mb-8">$99</h2>
                <div className="flex">

                    <button className="w-[350px] h-[50px] mr-[16px] rounded-[12px] text-white  bg-[#818EEA]">      {" "}
                        Add to Cart
                    </button>
                    <div className="border-solid border-2 border-[#818EEA] flex w-[100px] h-[50px] items-center justify-center   rounded-[12px]">
                        <button>
                            <h5 className="text-[#818EEA] text-[18px]">-</h5>
                        </button>
                        <h4 className="mr-[10px] ml-[10px] flex  ">1</h4>
                        <button>
                            <h5 className="text-[#818EEA] text-[18px]">+</h5>
                        </button>
                    </div>
                </div>
            </div>
            {/* <h1 className='text-[]'></h1> */}
        </div>
    );
};

export default ProductDetail;