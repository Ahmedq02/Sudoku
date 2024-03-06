interface Props {
    value: string;
    active: boolean;
    setActive: () => void;
}

function Cell({ value, active, setActive }: Props) {
    return (
        <p className={active === true ? "cell active" : "cell"} onClick={setActive}>
            {value !== '.' ? value : ''}
        </p>
    );
}

export default Cell;