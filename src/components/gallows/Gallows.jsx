import React from 'react';
import './Gallows.css';
import hangmanZero from '../../images/hangman_0.png';

const Gallows = () => {
  return (
    <div className="gallows-container">
      <div className="gallows">
        <img src={hangmanZero} />
      </div>
    </div>
  )
}

export default Gallows;