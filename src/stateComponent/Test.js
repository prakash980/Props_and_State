import React, { Component } from 'react';

class Test extends Component {
    constructor() {
        super();
            this.state = {
                id: 1,
                name: "John"
        }
    }
    render() {
        return (
            <div>
                <p>Id: {this.state.id}</p>
                <p>Name: {this.state.name}</p>
            </div>
        );
    }
}

export default Test;