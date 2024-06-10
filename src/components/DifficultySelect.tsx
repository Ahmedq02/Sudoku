interface Props {
    onDifficultyButtonClick: (difficulty: number) => void;
}

function DifficultySelect({ onDifficultyButtonClick }: Props) {
    return (
    <section className="difficulty">
        <h1>Choose your difficulty</h1>
        <button onClick={() => onDifficultyButtonClick(1)}>
            Easy
        </button>
        <button onClick={() => onDifficultyButtonClick(2)}>
            Medium
        </button>
        <button onClick={() => onDifficultyButtonClick(3)}>
            Hard
        </button>
    </section>
    );
}

export default DifficultySelect;