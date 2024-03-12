interface Props {
    boardComplete: boolean
}

function TopBar({ boardComplete }: Props) {
    return (
        <>
            {boardComplete ? (
                <h1 className="top-bar complete">Congratulations!!!</h1>
            ) : (
                <h1 className="top-bar">Sudoku!</h1>
            )}
        </>
    );
    
}

export default TopBar;