import React from "react";

const GreetingMessage = (props) => {
    return (
        <div>
            <h1>Hello {props.name}!</h1>
        </div>
    )
}

export default GreetingMessage;