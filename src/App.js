import React, { Component } from 'react';
// import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import './App.css';
import Intro from './components/Intro';
// import Header from './components/Header';
// import Footer from './components/Footer';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        {window.location.hash === "#/" && <div>
          <h2>Welcome to Red Rock Shipping</h2>
          <Intro />
        </div>}
        <div>
          {routes}
        </div>
      </div>
    );
  }
}

export default App;
