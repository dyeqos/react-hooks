import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

const [formState, setFormState] = useState({
    name : '',
    email : ''
});

const {name , email} = formState;

useEffect( () => {

}, []);

const handleInputChange = ( (e) => {
    setFormState({
        ...formState,
        [e.target.name] : e.target.value
    })
})

    return (
        <>
            <h1>useEffect</h1>
            <hr/>

            <div className="form-group">
                <input
                    type = "text"
                    name = "name"
                    className = "form-control"
                    placeholder = "tu nombre"
                    autoComplete = "off"
                    value = {name}
                    onChange = {handleInputChange}
                >
                </input>
            </div>

            <div className="form-group">
                <input
                    type = "email"
                    name = "email"
                    className = "form-control"
                    placeholder = "nombre@email.com"
                    autoComplete = "off"
                    value = {email}
                    onChange = {handleInputChange}
                >
                </input>
            </div>


            { name === '123' && <Message/> }
        </>
    )
}
