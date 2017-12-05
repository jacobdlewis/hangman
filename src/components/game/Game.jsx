import React from 'react';
import './Game.css';
import Gallows from '../gallows/Gallows';
import Guess from '../guess/Guess';
import Message from '../message/Message';
import Word from '../word/Word';
import words from '../../data/words';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.word = words[Math.floor(Math.random() * words.length)];
    this.letters = this.word.split('').map((letter) => {
      return {
        letter,
        guessedCorrectly: false
      }
    });
    this.state = {
      message: {
        body: undefined,
        type: undefined
      },
      misses: [],
      letters: this.letters
    };
    this.guessIsBlank = this.guessIsBlank.bind(this);
    this.guessIsCorrect = this.guessIsCorrect.bind(this);
    this.guessIsDuplicate = this.guessIsDuplicate.bind(this);
    this.evaluateGuess = this.evaluateGuess.bind(this);
    this.updateMisses = this.updateMisses.bind(this);
  }

  guessIsBlank(guess) {
    return guess === '';
  }
  
  guessIsCorrect(guess) {
    const lettersList = this.state.letters.map((letter) => (letter.letter));
    return lettersList.find((letter) => (letter === guess));
  }

  guessIsDuplicate(guess) {
    return this.state.misses.find((letter) => letter === guess);
  }

  evaluateGuess(guess) {
    // check for duplicate guesses & blank guesses
    const guessIsBlankOrDuplicate = this.guessIsBlank(guess) || this.guessIsDuplicate(guess);
    if (guessIsBlankOrDuplicate) {
      this.setState({
        message: {
          body: `Warning - guesses can't be blank or duplicates`,
          type: 'warning'
        }
      });
    };
    // check for correct/incorrect guesses
    if (this.guessIsCorrect(guess) && !guessIsBlankOrDuplicate) {
      const updatedLetters = this.state.letters.map((letter) => {
        // don't toggle existing correct guesses
        return letter.guessedCorrectly ? letter : { letter: letter.letter, guessedCorrectly: letter.letter === guess };
      });
      this.setState({
        message: {
          body: `HIT - "${guess}" was one of the letters!`,
          type: 'success'
        },
        letters: updatedLetters
      });
    };
    // update misses for incorrect guesses
    if (!this.guessIsCorrect(guess) && !guessIsBlankOrDuplicate) {
      this.updateMisses(guess);
    }
  }

  updateMisses(guess) {
    this.setState({
      message: {
        body: `MISS - "${guess}" was not a valid option!`,
        type: 'error'
      },
      misses: this.state.misses.concat(guess)
    })
  }

  render () {
    return (
      <div className="game">
        <h1 className="game-title">Hangman</h1>
        <Message message={this.state.message} />
        <Guess evaluateGuess={this.evaluateGuess} />
        <Gallows misses={this.state.misses.length} />
        <Word letters={this.state.letters} />
        <div>misses: {this.state.misses}</div>
      </div>
    );
  }
}

export default Game;