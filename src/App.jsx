//import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Components/MenuComponents';

import { DISHES } from './shared/dishes';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <div className="container">
          <Menu dishes={this.state.dishes} />
        </div>
      </div>
    );
  }
}
/*
function App() {
    return (
        <div className="App">
            <header className="App-header" >
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code> src/App.js </code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer">
                    Learn React </a> </header >
        </div>
    );
}*/

export default App;