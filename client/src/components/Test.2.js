import React, { useState } from 'react';

export default function Test() {
    const [todos, changeTodo] = useState({
        name: '',
        password: ''
    });

    const handleChange = e => {
        changeTodo({
            ...todos, [e.target.name]: [e.target.value]
        });
    }
    const handleSubmit = (event) => {
        console.log(todos)
        event.preventDefault();
    }
    return (
        <div>
            <h1>Todo App</h1>
            <form onSubmit={handleSubmit}>
                <label >
                    New Todo:
                    <input type="text" name='name' value={todos.name} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="password" name='password' value={todos.password} onChange={handleChange} />
                </label>

                <input type="submit" value="Add" />
            </form>

        </div>
    );
}