// Create a component that has an initial state with a boolean value of false.
// The component should display a button with the text "Toggle" that toggles the boolean value when
// clicked.The component should also display a message that says "The boolean value is currently: "
// followed by the current value of the boolean state variable.

import React, { useState } from "react";

function BoolUpdate() {
    const [boolValue, setBoolValue] = useState(false);
    const handleToggle = () => {
    setBoolValue(!boolValue);
    };

    return (
        <div>
        <button onClick={handleToggle}>Toggle</button>
            <h1>The boolean value is currently : {boolValue.toString()}</h1>
        </div>
    )
}

export default BoolUpdate;