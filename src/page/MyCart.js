import React from 'react';
import imgs from "../img/product-img.svg";
import img1 from '../img/img1.svg'
import img5 from '../img/img5.svg'
import {AiOutlineRight} from "react-icons/ai";



const MyCart = () => {
    return (
        <div className=" p-[64px]  items-center  ">
            <div className="containers">
            <div>
                <h1 className="text-[36px] text-[#19272E]">Your cart</h1>
                <h6 className="text-[16px] text-[#19272E]">
                    Not ready to checkout?{" "}
                    <a href="#" className="text-[#818EEA]">
                        Continue Shopping
                    </a>
                </h6>
            </div>
            <div className="flex">
                <div>
                    <div>
                        <div className="flex mt-[40px] start">
                            <img
                                src={imgs}
                                alt="img"
                                className=" mr-[37px] w-[150px] h-[225px]"
                            />
                            <div>
                                <div>
                                    <div className="flex  ">
                                        <h1 className="text-[#19272E] text-[18px] font-normal   mt-[5px]mb-[16px] w-[300px]">
                                            THE BOY, THE MOLE, THE FOX AND THE HORSE
                                        </h1>
                                        <button className="text-[#FF0000] underline md:decoration-brown font-bold ml-[37px] mb-[40px]">
                                            Remove
                                        </button>
                                    </div>
                                    <p className="text-[16px] text-[#19272E] opacity-70  mb-[60px]">
                                        by Charlie Mackesy
                                    </p>
                                </div>
                                <h4 className="text-[16px]">Quantity: 1</h4>
                                <h2 className="text-[#818EEA] text-[24px] mt-[8px]  ">$99</h2>
                            </div>
                        </div>
                        <hr className="w-[585px] h-[2px] bg-stone-400 mt-[20px] " />
                    </div>

                    <div>
                        <div className="flex mt-[40px] start">
                            <img
                                src={img1}
                                alt="img"
                                className=" mr-[37px] w-[150px] h-[225px]"
                            />
                            <div>
                                <div>
                                    <div className="flex  ">
                                        <h1 className="text-[#19272E] text-[18px] font-normal   mt-[5px]mb-[16px] w-[300px]">
                                            THE SUBTLE ART OF NOT GIVING A F*CK{" "}
                                        </h1>
                                        <button className="text-[#FF0000] underline md:decoration-brown font-bold ml-[37px] mb-[40px]">
                                            Remove
                                        </button>
                                    </div>
                                    <p className="text-[16px] text-[#19272E] opacity-70  mb-[60px]">
                                        by Mark Manson{" "}
                                    </p>
                                </div>
                                <h4 className="text-[16px]">Quantity: 1</h4>
                                <h2 className="text-[#818EEA] text-[24px] mt-[8px]  ">$99</h2>
                            </div>
                        </div>
                        <hr className="w-[585px] h-[2px] bg-stone-400 mt-[20px] " />
                    </div>

                    <div>
                        <div className="flex mt-[40px] start">
                            <img
                                src={imgs}
                                alt="img"
                                className=" mr-[37px] w-[150px] h-[225px]"
                            />
                            <div>
                                <div>
                                    <div className="flex  ">
                                        <h1 className="text-[#19272E] text-[18px] font-normal   mt-[5px]mb-[16px] w-[300px]">
                                            HARRY POTTER{" "}
                                        </h1>
                                        <button className="text-[#FF0000] underline md:decoration-brown font-bold ml-[37px] mb-[20px]">
                                            Remove
                                        </button>
                                    </div>
                                    <p className="text-[16px] text-[#19272E] opacity-70  mb-[60px]">
                                        by J.K. Rowling
                                    </p>
                                </div>
                                <h4 className="text-[16px]">Quantity: 1</h4>
                                <h2 className="text-[#818EEA] text-[24px] mt-[8px]  ">$99</h2>
                            </div>
                        </div>
                        <hr className="w-[585px] h-[2px] bg-stone-400 mt-[20px] " />
                    </div>
                </div>

                <div className="  ml-[91px]">
                    <h1 className=" text-[22px] text-[#19272E] mb-[64px]">
                        Order Summary
                    </h1>
                    <div className="flex">
                        <div className="mr-[207px]">
                            <h3 className=" text-[14px] text-[#0D0D0D] mb-[32px]">Shippin</h3>
                            <h3 className=" text-[14px] text-[#0D0D0D]">Payment</h3>
                        </div>

                        <div>
                            <h2 className=" flex items-center text-[16px] text-[#19272E] mb-[29px]">
                                Select Method <AiOutlineRight className="ml-[8px]" />
                            </h2>

                            <h2 className=" flex items-center text-[16px] text-[#19272E] mb-[29px]">
                                Select Method <AiOutlineRight className="ml-[8px]" />
                            </h2>
                        </div>
                    </div>
                    <hr className="w-[402px] h-[2px] bg-stone-400 mt-[32px] mb-[32px] " />
                    <div className="flex items-center ">
                        <h5 className="text-[14px] text-[#0D0D0D]">Total</h5>
                        <h4 className="text-[#818EEA] text-[14px] mt-[8px] ml-[336px] ">
                            $188
                        </h4>
                    </div>
                    <button className=" w-[397px] h-[50px] mt-[36px] mr-[16px] rounded-[12px] text-white bg-[#818EEA] duration-[.2s]  text-[16px] hover:bg-[#618EEA]">
                        Continue to checkout
                    </button>
                </div>
            </div>
            </div>
        </div>

    );
};

export default MyCart;