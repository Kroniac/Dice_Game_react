import React, { Component } from 'react';
import Player0 from './components/Player0/player0';
import Player1 from './components/Player1/player1';
import Button from './components/Button/button';
import Image from './img/dice-5.png';
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
        <Button btncss="btn-roll" iconName="ion-ios-loop" name="Roll Dice" />
        <Button
          btncss="btn-hold"
          iconName="ion-ios-download-outline"
          name="Hold"
        />
        <img src={Image} alt="Dice" className="dice" />
      </div>
    );
  }
}

export default App;
