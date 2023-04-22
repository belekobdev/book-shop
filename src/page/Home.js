import React from 'react';
import MAIN from "../img/Main.png";
import BooksAll from "../components/book-all/BooksAll";
import Books from "../components/books/Books";
import About from "../components/about/About";

const Home = () => {
    return (
            <>
                <div className="relative mt-4  font-bold">
                    <img className="w-full relative" src={MAIN} alt="img"/>
                    <div className="containers absolute  flex text-center justify-center items-center flex-col top-[40%] left-[12%]">
                        <h1 className="text-white  text-5xl top-0">Welcome to our Bookshop</h1>
                        <p className="text-black text-xl mt-3">A place where you can get all the books you want!</p>
                    </div>
                </div>
                <BooksAll/>
                <Books/>
                <About/>

            </>
    );
};

export default Home;