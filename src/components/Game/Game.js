import React, { Component } from 'react';
import cards from '../../cards.json';
import './Game/Game.css';
import Card from '../Card';

class Game extends Component {
  state = {
    chihuahuas: cards
  }

  cardClickedOn = (id) => {
    alert(id);
    
  };


  render() {
    return (
      <div className="container">
        <p>Score: {this.state.clickedChihuahua}</p>
        {this.state.chihuahuas.map(chihuahua => (
         <div className = "col-sm-4 chi-card">
          <img src={chihuahua.image} alt={"huahua"} onClick={() => this.cardClickedOn(chihuahua.image)} />
          <p>{chihuahua.name}</p>
          </div>
        ))}
          </div>
        
    );
  }
}

export default Game;
