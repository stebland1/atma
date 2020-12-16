import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import GlobalStyle from './styles/globalStyles';
import FontStyle from './styles/fontStyles';
import './index.css';
import 'normalize.css';

import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';

import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <FontStyle />
      <div className="container">
        <Header />
        <main>
          <Route component={Home} path="/" exact />
          <Route component={Shop} path="/shop" />
          <Route component={About} path="/about" exact />
          <Route component={Contact} path="/contact" exact />
          <Route component={Login} path="/login" exact />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
