import Board from './components/Board';
import './App.css';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import { useRef, useState } from 'react';
import easySudokuBoards from './easySudoku';
import mediumSudokuBoards from './mediumSudoku';
import hardSudokuBoards from './hardSudoku';

function App() {
  const defaultBoard = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ];

  const [solverActive, setSolverActive] = useState(false);
  const [boardComplete, setBoardComplete] = useState(false);

  const getBoard = (difficulty: number) => {
    if (difficulty == 1) {
      const randomIndex = Math.floor(Math.random() * easySudokuBoards.length);
      return easySudokuBoards[randomIndex];
    }
    else if (difficulty == 2) {
      const randomIndex = Math.floor(Math.random() * mediumSudokuBoards.length);
      return mediumSudokuBoards[randomIndex];
    }
    else {
      const randomIndex = Math.floor(Math.random() * hardSudokuBoards.length);
      return hardSudokuBoards[randomIndex];
    }
  }

  const difficulty = 1;
  const inputBoard = useRef(getBoard(difficulty));

  const handleSolverButtonClick = () => {
    setSolverActive(true);
  }

  const handleResetButtonClick = () => {
    setBoardComplete(false);
  }

  const handleBoardCompletion = () => {
    setBoardComplete(true);
  }

  const deactivateSolver = () => {
    setSolverActive(false);
  }

  return <main>
    <section className='UI'>
      <TopBar
        boardComplete={boardComplete}
      />
      <Board 
        inputBoard={inputBoard.current}
        solverActive={solverActive}
        deactivateSolver={deactivateSolver}
        boardComplete={boardComplete}
        handleBoardCompletion={handleBoardCompletion}
      />
      <Footer
        onSolverButtonClick={handleSolverButtonClick}
        onResetButtonClick={handleResetButtonClick}
        boardComplete={boardComplete}
      />
    </section>
  </main>
}

export default App
