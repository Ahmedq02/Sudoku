import { useState } from "react";
import Cell from "./Cell";

interface Props {
    inputBoard: string[][];
}

function Board({ inputBoard }: Props) {
    const [selectedCell, setSelectedCell] = useState(-1);

    return (
        <section className="board">
           {inputBoard.map((row, rowIndex) => (
            row.map((value, colIndex) => (
            <Cell key={`${rowIndex}-${colIndex}`} value={value} />
            ))
        ))}
        </section>
    );
}

export default Board;