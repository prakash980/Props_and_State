import React from 'react';

const ChildComponent = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.email}</p>
        </div>
    );
};

export default ChildComponent;