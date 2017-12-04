import React from 'react';
import './Gallows.css';
import hangman0 from '../../images/hangman_0.png';
import hangman1 from '../../images/hangman_1.png';
import hangman2 from '../../images/hangman_2.png';
import hangman3 from '../../images/hangman_3.png';
import hangman4 from '../../images/hangman_4.png';
import hangman5 from '../../images/hangman_5.png';
import hangman6 from '../../images/hangman_6.png';
import hangman7 from '../../images/hangman_7.png';

const getGallowsImage = (missesCount) => {
  switch (missesCount) {
    case 0:
      return hangman0;
    case 1:
      return hangman1;
    case 2:
      return hangman2;
    case 3:
      return hangman3;
    case 4:
      return hangman4;
    case 5:
      return hangman5;
    case 6:
      return hangman6;
    case 7:
      return hangman7;
    default:
      return hangman7;
  }
}

const Gallows = (props) => {
  return (
    <div className="gallows-container">
      <div className="gallows">
        <img src={getGallowsImage(props.misses)} />
      </div>
    </div>
  )
}

export default Gallows;