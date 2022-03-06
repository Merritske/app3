import { useEffect, useState } from "react";
import Diece from "./diece";
import DieceButton from "./dieceBtn";
import { nanoid } from "nanoid"
import Confetti from "react-confetti";

//Quiz maken 
//trivial questions from  OTDB API (open trivia database)
//check answers and display correct and false answers different
//give score

//EXTRA'S toevoegen om te kunnen gebruiken in portfolio
//real dots in the dice instead of numbers
//how many rolls needed tow in
//how much time needed
//save best time or less rolls to localstorage


export default function Main() {

    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }

    const [dice, setDice] = useState(allNewDice())
    function allNewDice() {
        const newDiece = []
        for (let i = 0; i < 10; i++) {
            newDiece.push(generateNewDie())
        }


        return newDiece
    }

    function handleClick() {
       if(!tenzies){setDice(oldDice => oldDice.map(die => {
            return die.isHeld ?
                die : generateNewDie()
        })
        
        )} else{
            setTenzies(false)
            setDice(allNewDice())
        }

}
    
    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? { ...die, isHeld: !die.isHeld } :
                die
        }))

    }
    const diceElem = dice.map(die => <Diece key={die.id}
        value={die.value}
        isHeld={die.isHeld}
        holdDice={() => holdDice(die.id)}
    />)

    const [tenzies, setTenzies] = useState(false)
    useEffect(function () {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
        }
    }, [dice])

    return (
        <div className="main">
            {tenzies && <Confetti width={500}/>}
            <h1>Tenzies</h1>
            <p>Roll untill all dice are the same. Click each die to freeze
                the current dice and roll again
            </p>
            <div className="diecefamily">
                {diceElem}
            </div>
            <DieceButton tenzies={tenzies} handleClick={handleClick} />
        </div>
    )
}