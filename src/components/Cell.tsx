interface Props {
    value: string;
    active: boolean;
    fixed: boolean;
    setActive: () => void;
}

function Cell({ value, active, fixed, setActive }: Props) {
    const classes = `cell ${active ? "active" : ""} ${fixed ? "fixed" : ""}`;

    return (
        <p className={classes} onClick={setActive}>
            {value !== '.' ? value : ''}
        </p>
    );
}

export default Cell;