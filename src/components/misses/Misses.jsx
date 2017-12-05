import React from 'react';
import "./Misses.css";

const Misses = ({misses}) => {
  return (
    <div className="misses">
      <strong>Misses:</strong>
      { misses.map((miss) => (<span className="miss">{miss}</span>)) }
    </div>
  )
}

export default Misses;