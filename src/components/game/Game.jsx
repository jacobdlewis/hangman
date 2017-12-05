import React from 'react';
import './Game.css';
import GameOver from '../gameOver/GameOver';
import Gallows from '../gallows/Gallows';
import Guess from '../guess/Guess';
import Message from '../message/Message';
import Misses from '../misses/Misses';
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
      gameOver: false,
      gameWon: false,
      message: {
        body: undefined,
        type: undefined
      },
      misses: [],
      letters: this.letters
    };
    this.checkGameWon = this.checkGameWon.bind(this);
    this.checkGameLost = this.checkGameLost.bind(this);
    this.guessIsBlank = this.guessIsBlank.bind(this);
    this.guessIsCorrect = this.guessIsCorrect.bind(this);
    this.guessIsDuplicate = this.guessIsDuplicate.bind(this);
    this.evaluateGuess = this.evaluateGuess.bind(this);
    this.updateMisses = this.updateMisses.bind(this);
  }

  checkGameLost() {
    const maxMisses = 6;
    const overDueToMisses = this.state.misses.length === maxMisses;
    if (overDueToMisses) {
      this.setState({
        gameOver: true
      });
    };
  }

  checkGameWon(updatedLetters) {
    const lettersCount = this.state.letters.length;
    const lettersCorrect = updatedLetters.filter((letter) => letter.guessedCorrectly === true).length;
    const overDueToSuccess = lettersCount === lettersCorrect;
    if (overDueToSuccess) {
      this.setState({
        gameOver: true,
        gameWon: true
      })
    };
  }

  guessIsBlank(guess) {
    return guess === '';
  }
  
  guessIsCorrect(guess) {
    const lettersList = this.state.letters.map((letter) => (letter.letter));
    return lettersList.find((letter) => (letter === guess));
  }

  guessIsDuplicate(guess) {
    const hits = this.state.letters.filter((letter) => letter.guessedCorrectly === true).map((letter) => letter.letter);
    const misses = this.state.misses;
    return hits.find((letter) => letter === guess) || misses.find((letter) => letter === guess);
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
      }, this.checkGameWon(updatedLetters));
    };
    // update misses for incorrect guesses
    if (!this.guessIsCorrect(guess) && !guessIsBlankOrDuplicate) {
      this.updateMisses(guess);
    }
  }

  updateMisses(guess) {
    this.setState({
      message: {
        body: `MISS - "${guess}" was not one of the options!`,
        type: 'error'
      },
      misses: this.state.misses.concat(guess)
    }, this.checkGameLost());
  }

  render () {
    return (
      <div className="game">
        <h1 className="game-title">Hangman</h1>
        { this.state.gameOver ?
          <GameOver gameWon={this.state.gameWon} /> :
          <div>
            <Message message={this.state.message} />
            <Guess evaluateGuess={this.evaluateGuess} />
          </div>
        }
        <Gallows misses={this.state.misses.length} />
        <Word letters={this.state.letters} />
        <Misses misses={this.state.misses} />
      </div>
    );
  }
}

export default Game;