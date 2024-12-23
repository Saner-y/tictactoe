import Square from "../buttons/square.jsx";
import {useState} from "react";

    let count = 0;
export default function Table() {
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(i) {
        const nextSquares = squares.slice();
        if (count % 2 === 0) {
            nextSquares[i] = 'X';
            count++;
            console.log(count);
        } else {
            nextSquares[i] = 'O';
            count++;
            console.log(count);
        }
        setSquares(nextSquares);
    }

    return (
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
    )
}
