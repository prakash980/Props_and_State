import React from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends React.Component {
    render() {
        return (
            <div>
                <ChildComponent name="John Doe" email="johndoe@gmail.com" />
            </div>
        )
    }
}

export default ParentComponent;