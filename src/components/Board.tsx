import { useEffect, useState } from "react";
import Cell from "./Cell";

interface Props {
    inputBoard: string[][];
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

function Board({ inputBoard }: Props) {
    const [selectedCell, setSelectedCell] = useState("");
    const [boardState, setBoardState] = useState(copyBoard(inputBoard));

    const handleCellClick = (key: string) => {
        // check that the clicked cell is not a fixed cell (if it is don't select it)
        const [rowIndex, colIndex] = key.split("-").map(Number);
        if (inputBoard[rowIndex][colIndex] === ".") {
            setSelectedCell(key);
        }
    };

    const handleKeyPress = (event: KeyboardEvent) => {
        // check that a cell is selected and the input is a number
        if (selectedCell !== "" && !isNaN(Number(event.key))) {
            const newValue = event.key;
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

    return (
        <section className="board">
           {boardState.map((row, rowIndex) => (
            row.map((value, colIndex) => (
            <Cell
                key={`${rowIndex}-${colIndex}`} 
                value={value} 
                setActive={() => handleCellClick(`${rowIndex}-${colIndex}`)}
                active={selectedCell ===  `${rowIndex}-${colIndex}` ? true : false}
                fixed={inputBoard[rowIndex][colIndex] !== '.' ? true : false}
            />
            ))
        ))}
        </section>
    );
}

export default Board;