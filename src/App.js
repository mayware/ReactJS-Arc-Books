import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from './components/Footer'
import Home from './components/Home';
import Reader from './components/Reader';
import Cart from './components/Cart';
import BooksArea from './components/BooksArea';
import { BooksContext } from './components/BooksContext';
function App() {
  return (
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
            <BooksContext.Provider value="Context value passed through">
              <Route path="/books">
                <BooksArea />
              </Route>
            </BooksContext.Provider>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
