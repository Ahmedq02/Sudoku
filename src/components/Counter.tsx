import { useEffect, useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    useEffect (() => {
        const intervalId = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    // calculate the current count in hours, minutes and seconds
    const hours = Math.floor(count / 3600);
    const minutes = Math.floor((count % 3600) / 60);
    const seconds = count % 60;

    const formattedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    return (
        <section className="count">
            {formattedTime}
        </section>
    );
}

export default Counter;