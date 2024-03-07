import Counter from "./Counter";
import SolverButton from "./SolverButton";

interface Props {
    onSolverButtonClick: () => void;
}

function Footer({onSolverButtonClick}: Props) {
    return (
        <section className="footer">
            <Counter />
            <h1>Get To Work!</h1>
            <SolverButton onSolverButtonClick={onSolverButtonClick}/>
        </section>
    );
}

export default Footer;