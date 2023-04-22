import React from 'react';
import {NavLink} from "react-router-dom";
import {FaSearch} from "react-icons/fa";
import {BsBagHeartFill} from "react-icons/bs";

const Header = () => {
    return (
       <div className="border">
           <div className="containers flex justify-between py-4">
               <nav className="flex font-bold">
                   <NavLink to={"/"} className="text-blue-400 font-bold hover:text-blue-800">Bookshop</NavLink>
                   <NavLink to={"/productDetail"} className="mx-6">Categories</NavLink>
                   <NavLink to={"/myCart"}>Resent</NavLink>
                   <NavLink to={"/books"} className="mx-6">Books</NavLink>
                   <NavLink to={"/about"}>About us</NavLink>
               </nav>
               <div className="flex">
                   <FaSearch/>
                   <BsBagHeartFill className="mx-6"/>
               </div>

           </div>
       </div>
    );
};

export default Header;