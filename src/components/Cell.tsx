interface Props {
    loc: string;
    value: string;
    active: boolean;
    fixed: boolean;
    invalid: boolean;
    setActive: () => void;
}

function Cell({loc, value, active, fixed, invalid, setActive }: Props) {
    const [rowIndex, colIndex] = loc.split('-').map(Number);
    const i = Math.floor(rowIndex / 3);
    const j = Math.floor(colIndex / 3);
    const even = (i + j) % 2 === 0;

    const classes = `cell ${active ? "active" : ""} ${fixed ? "fixed" : ""} ${invalid ? "invalid" : ""} ${even ? "even" : ""}`;

    return (
        <p className={classes} onClick={setActive}>
            {value !== '.' ? value : ''}
        </p>
    );
}

export default Cell;