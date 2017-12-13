import React, { Component } from 'react';
import Player0 from './components/Player0/player0' 
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper clearfix">
        <Player0 />
      </div>
    );
  }
}

export default App;
