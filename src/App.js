import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import Main from './components/MainComponent';
import './App.css';

const store = ConfigureStore();

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          {/* <div className="App"> */}
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
      // <BrowserRouter>
      //   <div className="App">
      //     <Main />
      //   </div>
      // </BrowserRouter>
    );
  }  

}

export default App;
