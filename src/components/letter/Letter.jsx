import React from 'react';
import './Letter.css';

class Letter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guessedCorrectly: false
    };
    this.evaluateGuess = this.evaluateGuess.bind(this);
  }

  evaluateGuess = (input) => {
    const guess = input.target.value;
    if (guess === this.props.letter) {
      this.setState({
        guessedCorrectly: true
      })
    } else {
      this.props.updateMisses(guess)
    }
  }

  render () {
    return (
      <div className="letter">
        { this.state.guessedCorrectly ?
          <div>{this.props.letter}</div> :
          <input maxLength="1" onChange={(guess) => this.evaluateGuess(guess)} />
        }
      </div>
    );
  }
}
  

export default Letter;