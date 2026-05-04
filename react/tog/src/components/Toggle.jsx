import React from 'react';
import { useState } from 'react';

export default function Toggle() {
    const [isVisible, setIsVisible] = useState(true);

    function toggleHandler() {
        if (isVisible) {
            setIsVisible(false);
        }
        else {
            setIsVisible(true);
        }
    }

    return (
        <>
            {isVisible && <p>Para is Visible</p>}

            <button onClick={toggleHandler}>{isVisible ? "hide" : "show"}</button>
        </>
    )
}