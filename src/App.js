import './App.css';
import Header from "./components/header/Header";
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
            </Routes>
            <Home/>
            <AllBooks/>
            <ProductDetail/>
            <MyCart/>
            <MainPage/>
            <Books/>
            <BooksAll/>
            <About/>
            <Footer/>
        </div>
    );
}

export default App;
