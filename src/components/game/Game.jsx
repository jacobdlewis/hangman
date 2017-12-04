import React from 'react';
import Gallows from '../gallows/Gallows';
import Word from '../word/Word';
import words from '../../data/words';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.word = words[Math.floor(Math.random() * words.length)];
  }

  render () {
    return (
      <div>
        <h1>Hangman</h1>
        <h2>word: {this.word}</h2>
        <Gallows />
        <Word word={this.word} />
      </div>
    );
  }
}

export default Game;