import { useEffect, useState } from "react";
import Cell from "./Cell";

interface Props {
    inputBoard: string[][];
    solverActive: boolean;
    deactivateSolver: () => void;
}

// utility function to copy the board
const copyBoard = (arr: string[][]) => {
    return arr.map(row => [...row]);
}

// utility funciton to return the valid numbers that can go in a certain cell
const getValidNums = (i: number, j: number, curState: string[][]) => {
    const used = new Set();

    // add the numbers in the row
    for (let k = 0 ; k < curState[i].length ; k++) {
        const val = curState[i][k]; 
        if (val !== '.') {
            used.add(val);
        }
    }

    // add the numbers in the column
    for (let k = 0 ; k < curState.length ; k++) {
        const val = curState[k][j];
        if (val !== '.') {
            used.add(val);
        }
    }

    // add the numbers in the square
    const startI = Math.floor(i / 3) * 3;
    const startJ = Math.floor(j / 3) * 3;
    for (let u = startI ; u < startI + 3 ; u++) {
        for (let v = startJ ; v < startJ + 3 ; v++) {
            const val = curState[u][v];
            if (val !== '.') {
                used.add(val);
            }
        }
    }

    const valid = [];
    for (let k = 1 ; k < 10 ; k++) {
        const val = k.toString();
        if (!used.has(val)) {
            valid.push(val);
        }
    }

    return valid;
}

// global variable to track completion
let boardComplete = false;

function Board({ inputBoard, solverActive, deactivateSolver }: Props) {
    const [selectedCell, setSelectedCell] = useState("");
    const [boardState, setBoardState] = useState(copyBoard(inputBoard));
    let invalidState = false;

    // the backtracking solver algorithm 
    const solve = () => {
        // find the first empty cell
        let empty = false;
        let rowIndex = 0;
        let colIndex = 0;

        for (let i = 0 ; i < boardState.length ; i++) {
            for (let j = 0 ; j < boardState[i].length ; j++) {
                if (boardState[i][j] === '.') {
                    empty = true;
                    rowIndex = i;
                    colIndex = j;
                    break;
                }
            }
            if (empty) {
                break;
            }
        }

        if (!empty) {
            return true;
        }

        // return the possible values for the cell being considered
        let validNums = getValidNums(rowIndex, colIndex, boardState);
        // if there are no valid squares it is a dead end -> backtrack
        if (validNums.length === 0) {
            return false;
        }

        for (let k = 0 ; k < validNums.length ; k++) {
            const curNum = validNums[k];
            boardState[rowIndex][colIndex] = curNum; 
            let res = solve();
            if (res) {
                return true;
            }
            boardState[rowIndex][colIndex] = '.'
        }
    }

    useEffect(() => {
        if (solverActive) {
            solve();
            deactivateSolver();
        }
    }, [solverActive]);

    // utility function to check if a cell is valid
    const isValidCell = (i: number, j: number, curState: string[][]) => {
        const val = curState[i][j];
        curState[i][j] = '.';
        const validNums = getValidNums(i, j, curState);
        curState[i][j] = val;
        if (val === '.' || validNums.includes(val)) {
            return true;
        }
        else {
            invalidState = true;
            return false;
        }
    }

    const handleCellClick = (key: string) => {
        // check that the clicked cell is not a fixed cell (if it is don't select it)
        const [rowIndex, colIndex] = key.split("-").map(Number);
        if (inputBoard[rowIndex][colIndex] === "." && !invalidState && !solverActive) {
            setSelectedCell(key);
        }
    };

    const handleKeyPress = (event: KeyboardEvent) => {
        // check that a cell is selected
        if (selectedCell !== "") {
            let newValue;
            // backspace is used to set a cell to blank
            if (event.key === 'Backspace') {
                newValue = '.';
            }
            // otherwise a number 1-9 will be accepted as input
            else if (!isNaN(Number(event.key)) && event.key !== '0') {
                newValue = event.key;
            }
            else {
                return;
            }
            const [rowIndex, colIndex] = selectedCell.split('-').map(Number);
            // create a new updated board
            const newBoardState = boardState.map(row => [...row]);
            newBoardState[rowIndex][colIndex] = newValue;
            setBoardState(newBoardState);
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [selectedCell, boardState])

    useEffect(() => {
        if (!invalidState) {
            for (let i = 0 ; i < boardState.length ; i++) {
                for (let j = 0 ; j < boardState[i].length ; j++) {
                    if (boardState[i][j] === '.') {
                        return;
                    }        
                }
            }
            boardComplete = true;
        }
    }, [boardState])

    return (
        <section className="board">
           {boardState.map((row, rowIndex) => (
            row.map((value, colIndex) => (
            <Cell
                key={`${rowIndex}-${colIndex}`}
                loc={`${rowIndex}-${colIndex}`}
                value={value} 
                setActive={() => handleCellClick(`${rowIndex}-${colIndex}`)}
                active={selectedCell ===  `${rowIndex}-${colIndex}` ? true : false}
                fixed={inputBoard[rowIndex][colIndex] !== '.' ? true : false}
                invalid={!isValidCell(rowIndex, colIndex, boardState)}
                locked={solverActive}
            />
            ))
        ))}
        </section>
    );
}

export default Board;