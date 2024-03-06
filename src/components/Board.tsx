import { useEffect, useState } from "react";
import Cell from "./Cell";

interface Props {
    inputBoard: string[][];
}

const copyBoard = (arr: string[][]) => {
    return arr.map(row => [...row]);
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
            boardState[rowIndex][colIndex] = newValue;
            setBoardState(boardState);
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