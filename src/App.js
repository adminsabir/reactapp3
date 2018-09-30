import React, { Component } from 'react';
import Projects from './components/Projects';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          Sabir Khan
          <Projects test ="Khan" />
      </div>
    );
  }
}

export default App;
