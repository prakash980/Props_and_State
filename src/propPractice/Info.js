import React, { Component } from "react";
import GreetingMessage from "./GreetingMessage";

class Info extends Component {
    render() {
        return (
            <div>
                <GreetingMessage name="John" />
            </div>
        );
    }
}

export default Info;