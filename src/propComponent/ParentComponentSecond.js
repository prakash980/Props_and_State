import React, { Component } from 'react';
import SecondParentComponent from './SecondChildComponent';

class ParentComponentSecond extends Component {
    render() {
        return (
            <div>
                <SecondParentComponent name="Salina" email="salina@gmail.com" location="USA" />
                <SecondParentComponent name="Arun" email="arun@gmail.com" location="India" />
            </div>
        );
    }
}

export default ParentComponentSecond;