interface Props {
    onSolverButtonClick: () => void;
}

function SolverButton({ onSolverButtonClick }: Props) {
    return <button className="solver-button" onClick={onSolverButtonClick}>I Give Up!</button>
}

export default SolverButton;