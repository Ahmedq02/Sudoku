import { useState } from "react";
import Cell from "./Cell";

interface Props {
    inputBoard: string[][];
}

function Board({ inputBoard }: Props) {
    const [selectedCell, setSelectedCell] = useState("");

    const handleCellClick = (key: string) => {
        setSelectedCell(key);
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