import React, { Component } from 'react';
import './App.css';
// import {Header} from './Header';
import NavBar from './components/NavBar';


class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <header className="App-header">
          <h1 className="App-title">Clicky Game</h1>
          <NavBar/>
        </header> 
         <p className="testRender">
          This is rendering what I want
        </p>
      </div> 
    );
  }
}

export default App;
