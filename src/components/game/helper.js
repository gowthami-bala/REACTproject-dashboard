import React from 'react'

export function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
        // console.log(lines[i]);
		const [a, b, c] = lines[i];
        // console.log(squares[a],squares[b])
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return null;
}


// const squares = [
//     "O","O","X",
//     "X", "O"  , "O" ,
//     "O","X","X",
// ]

// console.log(calculateWinner(squares));