import { useState } from "react"

export default function Diece(props){

    const styleDiece ={
        backgroundColor : props.isHeld ? "#59E391" : "white"
    }

return(
    <div className="diece" style= {styleDiece}>
      <h2 className="dieceText">{props.value} </h2> 
    </div>
)
}