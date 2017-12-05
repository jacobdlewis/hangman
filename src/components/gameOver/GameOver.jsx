import React from 'react';
import './GameOver.css';

const reloadPage = () => { window.location.reload()};

const GameOver = ({gameWon}) => {
  return (
    <div className={`game-over game-over-${gameWon ? 'win' : 'loss'}`}>
      <p>{ gameWon ? 'You Win!' : 'You Lose!'}</p>
      <button className="new-game-button" onClick={ reloadPage } >
        New Game
      </button>
    </div>
  );
}

export default GameOver;