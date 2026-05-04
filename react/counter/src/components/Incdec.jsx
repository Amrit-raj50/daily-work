import React from 'react';
import { useState } from 'react';

export default function Incdec() {
    const [count, setCount] = useState(0);

    function increment() {//increment
        setCount(count + 1);
    }

    function decrement() {//decrement
        if (count == 0) {
            setCount(0)
        }
        else {
            setCount(count - 1);
        }
    }

    function reset() {//reset
        setCount(0);
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={increment}>INC</button>
            <button onClick={decrement}>DEC</button>
            <button onClick={reset}>RESET</button>
        </>
    )
}