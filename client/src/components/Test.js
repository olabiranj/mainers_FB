import React, { useState, useReducer } from 'react';
import {initialState, reducer} from './todoReducer'

export default function Test() {
    const [input, setInput] = useState('');

    const [myArray, dispatch] = useReducer(reducer, initialState);
    const addInput = () => {
        if (input === '') {
            alert('Input a value');
        } else {
            dispatch({ type: "add", value: input });
            setInput('')
        }
    }

    return (
        <div>
            <input value={input} onChange={e => setInput(e.target.value)} />
            <button onClick={addInput}>
                Add
      </button>

            {myArray.map((item, index) => (
                <div key={index}>
                    <h2>
                        {item}
                        <button onClick={() => dispatch({ type: "remove", value: index })}>
                            Remove
            </button>
                    </h2>
                </div>
            ))}
        </div>
    );
}