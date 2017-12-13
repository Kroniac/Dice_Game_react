import React, { Component } from 'react';
import Player0 from './components/Player0/player0';
import Player1 from './components/Player1/player1';
import Button from './components/Button/button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper clearfix">
        <Player0 />
        <Player1 />
        <Button
          btncss="btn-new"
          iconName="ion-ios-plus-outline"
          name="New Game"
        />
      </div>
    );
  }
}

export default App;
