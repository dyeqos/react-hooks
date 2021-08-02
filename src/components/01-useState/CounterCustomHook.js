import React from 'react';
import { useCounter } from '../../Hooks/useCounter';
import './counter.css';

export const CounterCustomHook = () => {

    const valInicial = 100;
    const {state:counter, increment, decrement, reset} = useCounter(valInicial);

    return (
        <>
            <h1>Counter Custom Hook { counter }</h1>   
            <hr />

            <button
                className="btn btn-danger"
                onClick= {decrement}
            >
            - 1
            </button>

            <button
                className="btn btn-primary"
                onClick= {increment}
            >
            + 1 
            </button>

            <button
                className="btn btn-info"
                onClick= {reset}
            >
            Reset
            </button>
        </>
    )
}
