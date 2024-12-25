import { useState } from 'react';
import Table from "./table/table.jsx";
import './App.css';

export default function MyApp() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];
    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }
    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = `${move} numaralı hamleye git`;
        } else {
            description = 'Oyunun başlangıcına git';
        }
        return (
            <li key={move}>
                <button className='historyButton' onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });
    return (
        <div className='game'>
            <div className='game-table'>
                <Table xIsNext={xIsNext} onPlay={handlePlay} squares={currentSquares}/>
            </div>
            <div className='history'>
                <ol>
                    {moves}
                </ol>
            </div>
        </div>
    );
}
