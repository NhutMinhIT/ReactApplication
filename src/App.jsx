import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './Components/MainComponents';
import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }

}

export default App;