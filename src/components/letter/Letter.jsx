import React from 'react';
import './Letter.css';

const Letter = (props) => {
  return (
    <div className="letter">
      {props.letter}
    </div>
  )
}

export default Letter;