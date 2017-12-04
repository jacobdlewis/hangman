import React from 'react';
import Letter from '../letter/Letter';
import "./Word.css";

const Word = (props) => {
  return (
    <div className="word">
      {props.word.split('').map((letter) => {
        return (
          <Letter
            key={letter}
            letter={letter}
            updateMisses={props.updateMisses}
          />
        );
      })}
    </div>
  )
}

export default Word;