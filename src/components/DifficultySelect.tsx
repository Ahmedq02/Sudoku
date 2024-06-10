interface Props {
    onDifficultyButtonClick: (difficulty: number) => void;
}

function DifficultySelect({ onDifficultyButtonClick }: Props) {
    return (
        <>
            <h1>Choose your difficulty</h1>
            <button className="diff-btn easy" onClick={() => onDifficultyButtonClick(1)}>
                Easy
            </button>
            <button className="diff-btn medium" onClick={() => onDifficultyButtonClick(2)}>
                Medium
            </button>
            <button className="diff-btn hard" onClick={() => onDifficultyButtonClick(3)}>
                Hard
            </button>
        </>
    );
}

export default DifficultySelect;