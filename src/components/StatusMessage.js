import React from 'react'

const StatusMessage = ({winner, current}) => {
    const noMoves = current.board.every((el) => el !== null);
    
    return (
    <div className="status-message"> 
        { winner &&   (
        <>
        `Winner is {'   '}
        <span className={winner === 'O' ? 'text-green' : 'text-red'}> 
        {winner} 
        </span>
        </>
        )}
        {!winner && 
        !noMoves && 
        <>
        Next player is {'   '}<span className={current.isXNext ? 'text-green' : 'text-red'}>
            {current.isXNext ? 'X'  : 'O'} {'   '}
            </span>
        </>}
        {!winner && 
        noMoves && 
        <>
        <span className="text-orange">
        It's a Tie
        </span>
        </>}
    </div>
    );
};

export default StatusMessage
