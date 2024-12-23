import Square from "../buttons/square.jsx";
import {useState} from "react";
import './table.css';

export default function Table() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(i) {
        const nextSquares = squares.slice();
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <>
            <table className="tictactoe">
                <tbody>
                <tr>
                    <td key="1"><Square value={squares[0]} onClick={() => handleClick(0)}/></td>
                    <td key="2"><Square value={squares[1]} onClick={() => handleClick(1)}/></td>
                    <td key="3"><Square value={squares[2]} onClick={() => handleClick(2)}/></td>
                </tr>
                <tr>
                    <td key="4"><Square value={squares[3]} onClick={() => handleClick(3)}/></td>
                    <td key="5"><Square value={squares[4]} onClick={() => handleClick(4)}/></td>
                    <td key="6"><Square value={squares[5]} onClick={() => handleClick(5)}/></td>
                </tr>
                <tr>
                    <td key="7"><Square value={squares[6]} onClick={() => handleClick(6)}/></td>
                    <td key="8"><Square value={squares[7]} onClick={() => handleClick(7)}/></td>
                    <td key="9"><Square value={squares[8]} onClick={() => handleClick(8)}/></td>
                </tr>
                </tbody>
            </table>
            <div>
                <div className='status'>{status}</div>
            </div>
            <button onClick={() => setSquares(Array(9).fill(null))}>Reset</button>{/*deneme buton*/}
        </>
    )
}

function calculateWinner(squares) {
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
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}