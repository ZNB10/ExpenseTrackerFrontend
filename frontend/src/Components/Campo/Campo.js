import React from 'react';

export default ( {caption, type, value, name, ...props})=>{
    return(
        <fieldset>
            <legend>{caption}</legend>
            <input type={type||"text"} value={value||""} name={name} placeholder="Ingrese..."></input>
        </fieldset>
    );
};