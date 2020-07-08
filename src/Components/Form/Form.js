import React from 'react';
import "./Form.css"

// This is a functional component - just sent up a little differently as an arrow function!


const Form = (props) => (
    <div className="formDiv">
        <form>
            <label className="formLabel"> Country Name: </label>
            <input type="text" />
        </form>
    </div>
)

export default Form; 