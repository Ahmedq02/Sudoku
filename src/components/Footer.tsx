import Counter from "./Counter";
import ResetButton from "./ResetButton";
import SolverButton from "./SolverButton";

interface Props {
    onSolverButtonClick: () => void;
    onResetButtonClick: () => void;
    boardComplete: boolean;
}

function Footer({onSolverButtonClick, onResetButtonClick, boardComplete}: Props) {
    return (
        <>
            { boardComplete ? (
                <section className="footer complete">
                    <h1>You Did It!</h1>
                    <ResetButton onResetButtonClick={onResetButtonClick}/>
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