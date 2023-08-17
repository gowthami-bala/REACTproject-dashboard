import React from 'react'
import { Square } from './Square'

const style = {
	border: "2px solid rgb(91 91 177)",
	borderRadius: "5px",
	width: "200px",
	height: "200px",
	margin: "0 auto",
	display: "grid",
	gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};

export const Board = ({squares,onClick}) => {

  return (
    <div style={style}>
        {squares.map((square, i) => (
			<Square key={i} value={square} onClick={() => onClick(i)} />
		))}
        {/* <Square value="1" onclick={()=> onClick("sample data")}></Square>
        <Square value="2" onclick={()=> onClick("sample data")}></Square>
        <Square value="3" onclick={()=> onClick("sample data")}></Square>
        <Square value="4" onclick={()=> onClick("sample data")}></Square>
        <Square value="5" onclick={()=> onClick("sample data")}></Square>
        <Square value="6" onclick={()=> onClick("sample data")}></Square>
        <Square value="7" onclick={()=> onClick("sample data")}></Square>
        <Square value="8" onclick={()=> onClick("sample data")}></Square>
        <Square value="9" onclick={()=> onClick("sample data")}></Square> */}
    </div>
  )
}
