import React from 'react'
import { Board } from './NewBoard'
import { calculateWinner } from './helper'
import { useState } from 'react'

export const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);
    const onhandleClick = (i) => {
        const boardCopy = [...board];
        // console.log(boardCopy);
        // If user click an occupied square or if game is won, return
        if (winner || boardCopy[i]) {
            return;
        }
        // Put an X or an O in the clicked square
        boardCopy[i] = xIsNext ? "X" : "O";
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    }

    return (
        <div>
            <Board squares={board} onClick={onhandleClick}></Board>
            <p>
                {winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}
            </p>
            <button onClick={() => setBoard(Array(9).fill(null))}>
                Start Game
            </button>
        </div>
    )
}
