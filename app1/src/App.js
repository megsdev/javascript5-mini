import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super()

    this.state = {
      myName: 'Joe'
    }
  }
  render() {
    console.log('this.state', this.state)
    return (
      <div className="App">
        My name is { this.state.myName }
      </div>
    );
  }
}

export default App;
