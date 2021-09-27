import React from 'react';

const Square = ({ value, onClick, isWinningSquare }) => {
  return (
    <button 
      type="button" 
      onClick={onClick}
      className={`square 
      ${isWinningSquare ? 'winning' : ''} 
      ${value ==='X' ? 'text-red' : 'text-green'}`}
      style={{fontWeight: isWinningSquare ? 'bold' : 'normal'}} 
    >
      {value}
    </button>
  );
};

export default Square;
