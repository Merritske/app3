export default function DieceButton(props){

    

    return(
        <button className="button" onClick={props.handleClick}>
            {props.tenzies ? "New game" : "Roll"}
            </button>
    )
}