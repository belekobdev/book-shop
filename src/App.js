import './App.css';
import Header from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./page/Home";
import AllBooks from "./page/AllBooks";
import ProductDetail from "./page/ProductDetail";
import MyCart from "./page/MyCart";
import MainPage from "./components/main-page/MainPage";
import Books from "./components/books/Books";
import BooksAll from "./components/book-all/BooksAll";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/books"} element={<AllBooks/>}/>
                <Route path={"/productDetail"} element={<ProductDetail/>}/>
                <Route path={"/myCart"} element={<MyCart/>}/>
            </Routes>
          <MainPage/>
          <Books/>
          <BooksAll/>
          <About/>
          <Footer/>
        </div>
    );
}

export default App;
