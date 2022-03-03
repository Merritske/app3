import { useState } from "react";
import Diece from "./diece";
import DieceButton from "./dieceBtn";
import {nanoid} from "nanoid"

export default function Main() {
    function handleClick() {
        setDice(allNewDice())
    }

    const [dice, setDice] = useState(allNewDice())
    function allNewDice() {
        const newDiece = []
        for (let i = 0; i < 10; i++) {
            newDiece.push({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            })
        }
      
        return newDiece
    }
    const diceElem = dice.map(die => <Diece key={die.id} value={die.value} isHeld={die.isHeld} />)


    return (
        <div className="main">
            <div className="diecefamily">
                {diceElem}
            </div>
            <DieceButton handleClick={handleClick} />
        </div>
    )
}