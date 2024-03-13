import Square from "./components/square";
import {useState} from "react";
import "./App.css"

function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null))

    function handleClickSquare(index: number) {
        const newSquares = squares.slice()
        newSquares[index] = "X";
        setSquares(newSquares);
    }

    return (
        <>
            <div className="board-row">
                <Square value={squares[0]} clickSquare={() => handleClickSquare(0)}/>
                <Square value={squares[1]} clickSquare={() => handleClickSquare(1)}/>
                <Square value={squares[2]} clickSquare={() => handleClickSquare(2)}/>
            </div>
            <div className="board-row">
                <Square value={squares[3]} clickSquare={() => handleClickSquare(3)}/>
                <Square value={squares[4]} clickSquare={() => handleClickSquare(4)}/>
                <Square value={squares[5]} clickSquare={() => handleClickSquare(5)}/>
            </div>
            <div className="board-row">
                <Square value={squares[6]} clickSquare={() => handleClickSquare(6)}/>
                <Square value={squares[7]} clickSquare={() => handleClickSquare(7)}/>
                <Square value={squares[8]} clickSquare={() => handleClickSquare(8)}/>
            </div>
        </>
    );
}

export default Board;