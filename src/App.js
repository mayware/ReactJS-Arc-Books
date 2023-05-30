import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from './components/Footer'
import Home from './components/Home';
import Cart from './components/Cart';
import BooksArea from './components/BooksArea';
import CartContext from './context/CartContext';
import SearchArea from './components/SearchArea';
import Login from './components/Login';
import React, { useEffect, useState } from 'react';
function App() {

  const [cartItems, setCartItems] = useState([]);
  const [searchUrl, setSearchUrl] = useState(``);
  const [currentPage, setCurrentPage] = useState(1);

  function changeCurrentPage() {
    setCurrentPage(1);
  }

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  const addToCart = (book) => {
    const isInCart = cartItems.some(item => item.id === book.id);
    if (!isInCart) {
      setCartItems(prevCartItems => {
        const updatedCartItems = [...prevCartItems, book];
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        return updatedCartItems;
      });
    }
  };

  const removeItem = (book) => {
    const booksLeft = cartItems.filter((item) => item.id !== book.id);
    setCartItems(booksLeft);
    localStorage.setItem('cartItems', JSON.stringify(booksLeft));
  };

  const clearBookshelf = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
  }

  function searchBooks(term) {
    setSearchUrl(`https://www.googleapis.com/books/v1/volumes?q=${term}&startIndex=${(currentPage - 1) * 10}&maxResults=10&key=AIzaSyD2wDUQrHWijCmYof8fR2BexK8uxs_ZZ0c`);
  }

  function paginPrev() {
    setCurrentPage((prevPage) => prevPage - 1);
  }

  function paginNext() {
    setCurrentPage((prevPage) => prevPage + 1);
  }



  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeItem, clearBookshelf, searchUrl, searchBooks }}>
      <Router>
        <div className="App">
          <Navbar changeCurrentPage={changeCurrentPage} />
          <div className="container">
            <Switch>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/books">
                <BooksArea />
              </Route>
              <Route path="/search">
                <SearchArea paginPrev={paginPrev} paginNext={paginNext} currentPage={currentPage} />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
