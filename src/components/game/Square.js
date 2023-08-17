import React from 'react'

const style = {
	background: "#a1b5ef",
	border: "1px solid #7878d7",
	fontSize: "20px",
	fontWeight: "600",
	cursor: "pointer",
	outline: "none",
};

export const Square = ({value,onClick}) => {
    return (
          <button  style={style} onClick={onClick}>{value}</button>
 
    )
  }


// export const Square = (props) => {
//   return (
//     <div>
//         <button onClick={props.onclick}>{props.value}</button>
//     </div>
//   )
// }
