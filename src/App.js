import './App.css';
import Header from "./components/header/Header";
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
            <Home/>
            <MainPage/>
            <BooksAll/>
            <Books/>
            <About/>
            <Footer/>
            <AllBooks/>
            <ProductDetail/>
            <MyCart/>
        </div>
    );
}

export default App;
