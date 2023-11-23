import React from "react";

function User(props) {
    return (
        <div>
            <h1>User Component</h1>
            <h3>Name: {props.data.name}</h3>
            <h4>Age: {props.data.age}</h4>
        </div>
    );
}

export default User;
