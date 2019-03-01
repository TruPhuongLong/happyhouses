import React, { Component } from 'react';

import './App.css'
import Nav from './components/nav'
import Header from './components/header'
import About from './components/about'
import Creative from './components/creative'
import Counter from './components/couter'
import Portfolio from './components/portfolio'
import Partners from './components/partners'
import Team from './components/team'
import Contact from './components/contact'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <About />
        <Creative />
        <Counter />
        <Portfolio />
        <Partners />
        <Team />
        <Contact />
      </div>
    );
  }
}

export default App;
