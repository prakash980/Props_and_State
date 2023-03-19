import React from 'react';

const SecondParentComponent = (props) => {
    return (
        <div>
        <h2>Name: {props.name}</h2>
        <p>Email: {props.email}</p>
        <p>Location: {props.location}</p>
        </div>
    )
}

export default SecondParentComponent;