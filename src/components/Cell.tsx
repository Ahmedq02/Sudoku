interface Props {
    value: string;
    active: boolean;
    setActive: () => void;
}

function Cell({ value, active, setActive }: Props) {
    const isFixed = value !== '.';

    const classes = `cell ${active ? "active" : ""} ${isFixed ? "fixed" : ""}`;

    return (
        <p className={classes} onClick={setActive}>
            {value !== '.' ? value : ''}
        </p>
    );
}

export default Cell;