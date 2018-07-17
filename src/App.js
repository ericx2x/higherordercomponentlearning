import React, { Component } from 'react';
import './App.css';
// import './components/ButtonOne.js';
import ButtonOne from './components/ButtonOne.js';

//tutorial from
//https://www.youtube.com/watch?v=A9_9gQIkfx4

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonOne disable/>
      </div>
    );
  }
}

export default App;
