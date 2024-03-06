import { useState } from "react";
import Cell from "./Cell";

interface Props {
    inputBoard: string[][];
}

function Board({ inputBoard }: Props) {
    const [selectedCell, setSelectedCell] = useState("");

    const handleCellClick = (key: string) => {
        // verify that the clicked cell is not a fixed cell (if it is don't select it)
        const [rowIndex, colIndex] = key.split("-").map(Number);
        if (inputBoard[rowIndex][colIndex] === ".") {
            setSelectedCell(key);
        }
    };

    return (
        <section className="board">
           {inputBoard.map((row, rowIndex) => (
            row.map((value, colIndex) => (
            <Cell
                key={`${rowIndex}-${colIndex}`} 
                value={value} 
                setActive={() => handleCellClick(`${rowIndex}-${colIndex}`)}
                active={selectedCell ===  `${rowIndex}-${colIndex}` ? true : false}
            />
            ))
        ))}
        </section>
    );
}

export default Board;