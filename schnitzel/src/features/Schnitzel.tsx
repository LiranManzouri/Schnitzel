import React, {FC, useEffect, useState} from "react";

const Schnitzel: FC = () => {
    const [seconds, setSeconds] = useState<number>(6);

    useEffect(() => {
        const counterId = setInterval(() => {
            setSeconds(perv => Math.max(0, perv - 1));
        }, 1000);
        return () => clearInterval(counterId);
    }, [])


    function onButtonClicked() {
        if (seconds === 0) {
            alert(`You got a Schnitzel!`);
            setSeconds(6);
        } else {
            alert(`Wait ${seconds} seconds before trying again!`);
        }
    }

    return (
        <button onClick={onButtonClicked}>I want Schnitzel!</button>
    );
}

export default Schnitzel;