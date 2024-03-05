interface Props {
    value: string;
}

function Cell({ value }: Props) {
    return (
        <p className="cell">{value !== '.' ? value : ''}</p>
    );
}

export default Cell;