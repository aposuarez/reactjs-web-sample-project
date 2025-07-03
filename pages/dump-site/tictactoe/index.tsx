import { useState } from 'react';
import styles from './TicTacToe.module.css'

export default function Home() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(board);
  const status = winner
    ? `Winner: ${winner}`
    : board.every(Boolean)
    ? "Draw!"
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  const handleClick = (i) => {
    if (board[i] || winner) return;
    const newBoard = [...board];
    newBoard[i] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className={styles.gameContainer}>
      <h1>Tic-Tac-Toe</h1>
      <div className={styles.gameStatus}>{status}</div>
      <div className={styles.gameBoard}>
        {board.map((cell, i) => (
          <div
            key={i}
            className={styles.gameCell}
            onClick={() => handleClick(i)}
          >
            {cell}
          </div>
        ))}
      </div>
      <button onClick={resetGame} className={styles.restartGamebutton}>Restart Game</button>
    </div>
  );
}

// Helper function to determine winner
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6],           // Diagonals
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
