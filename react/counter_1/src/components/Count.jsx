import React from "react";
import { useState } from "react";

export default function Count() {
    const [count, setCount] = useState(0);

    //increment func
    function incre() {
        setCount(count + 1);
    }

    //decrement func
    function decre() {
        if (count === 0) {
            setCount(0);
        } else {
            setCount(count - 1);
        }
    }

    //reset func
    function reset() {
        setCount(0);
    }

    return (
        <>
            <h2>{count}</h2>
            <button onClick={incre}>INC</button>
            <button onClick={decre}>DEC</button>
            <button onClick={reset}>RESET</button>
        </>
    )
}