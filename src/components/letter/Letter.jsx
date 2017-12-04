import React from 'react';
import './Letter.css';

const Letter = ({letter}) => {
  return (
    <div className="letter">
      { letter.guessedCorrectly ? letter.letter : '' }
    </div>
  );
}

export default Letter;