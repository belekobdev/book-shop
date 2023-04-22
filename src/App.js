import './App.css';
import Header from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./page/Home";
import AllBooks from "./page/AllBooks";
import ProductDetail from "./page/ProductDetail";
import MyCart from "./page/MyCart";
import MainPage from "./components/main-page/MainPage";
import Books from "./components/books/Books";
import About from "./components/about/About";
import OurBook from "./ourBook/ourBook";


function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                {/*<Route path={"/b ooks"} element={<Books/> }/>*/}
                {/*<Route path={"/books"} element={<OurBook/>}/>*/}
                {/*<Route path={"/productDetail"} element={<ProductDetail/>}/>*/}
                {/*<Route path={"/myCart"} element={<MyCart/>}/>*/}
                {/*<Route path={"/about"} element={<About/>}/>*/}
                {/*<Route path={"/allBooks"} element={<AllBooks/>}/>*/}
            </Routes>
        </div>
    );
}

export default App;
