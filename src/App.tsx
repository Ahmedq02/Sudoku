import Board from './components/Board';
import './App.css';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const inputBoard = [
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

  const handleSolverButtonClick = () => {
    setSolverActive(true);
  }

  return <main>
    <section className='UI'>
      <TopBar />
      <Board 
        inputBoard={inputBoard}
        solverActive={solverActive}
      />
      <Footer
        onSolverButtonClick={handleSolverButtonClick}
      />
    </section>
  </main>
}

export default App
