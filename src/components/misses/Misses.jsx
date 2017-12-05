import React from 'react';
import shortid from 'shortid';
import "./Misses.css";

const Misses = ({misses}) => {
  return (
    <div className="misses">
      <strong>Misses:</strong>
      { misses.map((miss) => (<span key={shortid.generate()} className="miss">{miss}</span>)) }
    </div>
  )
}

export default Misses;