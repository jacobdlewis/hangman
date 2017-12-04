import React from 'react';
import Gallows from '../gallows/Gallows';
import Word from '../word/Word';
import words from '../../data/words';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.word = words[Math.floor(Math.random() * words.length)];
    this.state = {
      misses: []
    };
    this.updateMisses = this.updateMisses.bind(this);
  }

  updateMisses(guess) {
    this.setState({
      misses: this.state.misses.concat(guess)
    })
  }

  render () {
    return (
      <div>
        <h1>Hangman</h1>
        <h2>word: {this.word}</h2>
        <h2>misses: {this.state.misses}</h2>
        <Gallows />
        <Word
          updateMisses={this.updateMisses}
          word={this.word}
        />
      </div>
    );
  }
}

export default Game;