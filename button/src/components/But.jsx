import React from "react";
import { useState } from "react";

export default function But() {
    const [isDisable, setDisable] = useState(false);

    function handleDisable() {
        setDisable(true);
    }

    return (
        <>
            <button onClick={handleDisable} disabled={isDisable}>{isDisable ? "Clicked" : "Click me"}</button>
        </>
    )

}