import React from 'react';
import "./Button.css"

// This is a functional component - just sent up a little differently as an arrow function!
const Button = (props) => (
    <button type="submit" className={props.type}> Search </button>
)

export default Button; 