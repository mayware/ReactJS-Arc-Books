import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from './components/Footer'
import Home from './components/Home';
import Reader from './components/Reader';
import Cart from './components/Cart';
import BooksArea from './components/BooksArea';
import CartContext from './context/CartContext';
import React from 'react';
function App() {
  // Setting up an empty array
  const [cartItems, setCartItems] = React.useState([]);

  const addToCart = (book) => {
    setCartItems([...cartItems, book]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/reader">
                <Reader />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/books">
                <BooksArea />
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
