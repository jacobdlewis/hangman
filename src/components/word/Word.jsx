import React from 'react';
import shortid from 'shortid';
import Letter from '../letter/Letter';
import "./Word.css";

const Word = (props) => {
  return (
    <div className="word">
      {props.letters.map((letter) => {
        return (
          <Letter
            key={shortid.generate()}
            letter={letter}
          />
        );
      })}
    </div>
  )
}

export default Word;