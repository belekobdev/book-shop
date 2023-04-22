import React from 'react';
import img from '../img/ALLbooks-1.svg'
import img2 from '../img/ALLbooks-2.svg'
import img3 from '../img/img3.png'
import img4 from '../img/img4.png'
import img5 from '../img/img5.png'
import img6 from '../img/img6.png'
import img7 from '../img/img7.png'
import img8 from '../img/img8.png'
import img9 from '../img/img9.png'

const AllBooks = () => {
    return (
        <div id="allBooks">
            <div className="container">
                <h1 className="text-black font-[600] text-[36px]">All Books</h1>
                <h4 className="text-black font-[400] text-[20px]">Here you can find all the books you need</h4>
                <div className="allBooks">
                        <div className="flex items-center pt-[60px] justify-between">
                           <div className="flex items-end">
                               <h2 className="text-black font-[600] text-[22px]">Filters</h2>
                               <a href="#" className="text-[#818EEA] underline pl-[15px]">Clear filters</a>
                           </div>
                            <div className="flex items-center justify-between w-[160px] px-[10px] border-[1px] border-[#818EEA] rounded-[12px] h-[37px]">
                                <h5 className="text-[#818EEA] opacity-[0.5]">Sort By</h5>
                                <select className="text-[#818EEA] font-[700]">
                                    <option >Popular</option>
                                    <option>Popular</option>
                                    <option>Popular</option>
                                </select>
                            </div>
                        </div>
                </div>
                <h5 className="font-[700] text-[16px pt-[20px]">Genres</h5>
                <div className="flex items-start justify-between   pt-[15px]">
                    <div>
                        <div className="flex ">
                            <input  type="radio"/>
                            <h4 className="font-[400] pl-[10px]  text-[16px]">Autographed Books</h4></div>
                        <div className="flex pt-[15px]" >
                            <input  type="radio"/>
                            <h4 className="font-[400] pl-[10px]  text-[16px]">Sci-Fi</h4></div>
                        <div className="flex pt-[15px]" >
                            <input  type="radio"/>
                            <h4 className="font-[400] pl-[10px]  text-[16px]">For kids</h4></div>
                        <div className="flex pt-[15px]" >
                            <input  type="radio"/>
                            <h4 className="font-[400] pl-[10px]  text-[16px]">For teenagers</h4></div>
                        <div className="flex pt-[15px]" >
                            <input  type="radio"/>
                            <h4 className="font-[400] pl-[10px]  text-[16px]">Finance</h4></div>
                        <div className="flex pt-[15px]" >
                            <input  type="radio"/>
                            <h4 className="font-[400] pl-[10px]  text-[16px]">Detective</h4></div>
                        <div className="flex pt-[15px]" >
                            <input  type="radio"/>
                            <h4 className="font-[400] pl-[10px]  text-[16px]">Romantic</h4></div>
                        <div className="flex pt-[15px]" >
                            <input  type="radio"/>
                            <h4 className="font-[400] pl-[10px]  text-[16px]">Psychology</h4></div>
                        <div className="flex pt-[15px]" >
                            <input  type="radio"/>
                            <h4 className="font-[400] pl-[10px]  text-[16px]">Self-Improvement</h4></div>
                        <div className="flex pt-[15px]" >
                            <input  type="radio"/>
                            <h4 className="font-[400] pl-[10px]  text-[16px]">Educational</h4></div>
                        <div className="flex pt-[15px]" >
                            <input  type="radio"/>
                            <h4 className="font-[400] pl-[10px]  text-[16px]">Literature</h4></div>
                        <div className="flex pt-[15px]" >
                            <input  type="radio"/>
                            <h4 className="font-[400] pl-[10px]  text-[16px]">Religion</h4></div>
                    </div>
                    <div className="flex items-start flex-wrap">
                        <div className="ml-[70px]">
                            <img src={img} alt=""/>
                            <h3 className="font-bold pt-[5px] text-[18px] text-[#19272]">THE SUBTLE ART OF <br/> NOT GIVING A F*CK</h3>
                            <h4 className="font-[400]  text-[16px] text-[#19272]">by Mark Manson</h4>
                        </div >
                        <div className="ml-[70px] ">
                            <img src={img2} alt=""/>
                            <h3 className="font-bold pt-[5px] text-[18px] text-[#19272]">8 RULES OF LOVE</h3>
                            <h4 className="font-[400]  text-[16px] text-[#19272]">by Jay Shetty</h4>
                        </div>
                        <div className="ml-[70px] ">
                            <img src={img3} alt=""/>
                            <h3 className="font-bold pt-[5px] text-[18px] text-[#19272]">THE CREATIVE ACT</h3>
                            <h4 className="font-[400]  text-[16px] text-[#19272]">by Rick Rubin with Neil <br/> Strauss</h4>
                        </div >
                        <div className="ml-[70px] ">
                            <img src={img4} alt=""/>
                            <h3 className="font-bold pt-[5px] text-[18px] text-[#19272]">THE BOY, THE MOLE, <br/> THE FOX AND THE <br/> HORSE</h3>
                            <h4 className="font-[400]  text-[16px] text-[#19272]">by Charlie Mackesy</h4>
                        </div>
                        <div className="ml-[70px] mt-[60px]">
                            <img src={img5} alt=""/>
                            <h3 className="font-bold pt-[5px] text-[18px] text-[#19272]">HARRY POTTER</h3>
                            <h4 className="font-[400]  text-[16px] text-[#19272]">by J.K. Rowling</h4>
                        </div >
                        <div className="ml-[70px] mt-[60px]">
                            <img src={img6} alt=""/>
                            <h3 className="font-bold pt-[5px] text-[18px] text-[#19272]">IT ENDS WITH US</h3>
                            <h4 className="font-[400]  text-[16px] text-[#19272]">by Colleen Hoover</h4>
                        </div>
                        <div className="ml-[70px] mt-[60px]">
                            <img src={img7} alt=""/>
                            <h3 className="font-bold pt-[5px] text-[18px] text-[#19272]">IT STARTS WITH US</h3>
                            <h4 className="font-[400]  text-[16px] text-[#19272]">by Colleen Hoover</h4>
                        </div >
                        <div className="ml-[70px] mt-[60px]">
                            <img src={img8} alt=""/>
                            <h3 className="font-bold pt-[5px] text-[18px] text-[#19272]">HEART BONES</h3>
                            <h4 className="font-[400]  text-[16px] text-[#19272]">by Colleen Hoover</h4>
                        </div>
                        <div className="ml-[70px] mt-[60px]">
                            <img src={img9} alt=""/>
                            <h3 className="font-bold pt-[5px] text-[18px] text-[#19272]">SOMEONE ELSE'S <br/> SHOES</h3>
                            <h4 className="font-[400]  text-[16px] text-[#19272]">by Jojo Moyes</h4>
                        </div >

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBooks;