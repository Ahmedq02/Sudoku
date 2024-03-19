interface Props {
    onResetButtonClick: () => void;
}

function ResetButton({ onResetButtonClick }: Props) {
    return <button className="reset-button" onClick={onResetButtonClick}>Play Again</button>
}

export default ResetButton;