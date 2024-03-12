import Counter from "./Counter";
import SolverButton from "./SolverButton";

interface Props {
    onSolverButtonClick: () => void;
    boardComplete: boolean
}

function Footer({onSolverButtonClick, boardComplete}: Props) {
    return (
        <>
            { boardComplete ? (
                <section className="footer complete">
                    <h1>You Did It!</h1>
                </section>
            ) : (
                <section className="footer">
                    <Counter />
                    <h1>Get To Work!</h1>
                    <SolverButton onSolverButtonClick={onSolverButtonClick}/>
                </section>
            )}
        </>
    );
}

export default Footer;