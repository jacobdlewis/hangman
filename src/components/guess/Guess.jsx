import React from 'react';
import "./Guess.css";

class Guess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.props.evaluateGuess(this.state.value);
    this.setState({value: ''});
    event.preventDefault();
  }

  render () {
    return (
      <div className="guess">
        <form onSubmit={this.handleSubmit}>
          <input
            autoFocus="autofocus"
            maxLength="1"
            onChange={this.handleChange}
            value={this.state.value}
          />
          <button type="submit">Guess</button>
        </form>
      </div>
    );
  }
}

export default Guess;