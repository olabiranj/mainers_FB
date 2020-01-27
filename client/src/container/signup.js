import React, {useState, useReducer} from 'react';
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2';
import axios from 'axios';
import withReactContent from 'sweetalert2-react-content';
import { authInitialState, authReducer } from "../reducers/authReducer"; 


export default function Signup() {
    const MySwal = withReactContent(Swal);
    const [newUser, changeUser] = useState({
        firstName: '',
        surName: '',
        email: '',
        password: ''
    });
    const [auth, dispatchAuth] = useReducer(authReducer, authInitialState);


    const handleChange = e => {
        changeUser({
            ...newUser, [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (event) => {
        if (newUser.password.length < 8) {
            MySwal.fire({
                icon: 'error',
                text: 'Password must be a minimum of 8 characters',

            })
            event.preventDefault();
        } else {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            // Request body
            const body = JSON.stringify(newUser);
            
            axios
                .post('/api/users/register', body, config )
                .then(res => {
                    dispatchAuth({
                        type: 'register_success',
                        payload: res.data
                    })
                    changeUser({
                        firstName: '',
                        surName: '',
                        email: '',
                        password: ''
                    });
                    console.log(authInitialState);
                    history.push('/dashboard');
                }
                )
                .catch(err => {
                    event.preventDefault();
                    MySwal.fire({
                        icon: 'error',
                        text: err.response.data.msg,

                    });
                    changeUser({
                        firstName: '',
                        surName: '',
                        email: '',
                        password: ''
                    });
                    console.log(err.response.data.msg)
                    dispatchAuth({
                        type: 'register_fail'
                    });
                });
            event.preventDefault();
        }
        
        event.preventDefault();
    }
const history = useHistory()
    return (
        <div className='loginContainer'>
            <div className='window '>
                <div className='overlay'></div>
                <div className='content'>
                    <div className='welcome'>Hello There!</div>
                    <div className='subtitle'>Welcome to MAINERS. Before using our services you need to create an account.</div>
                    <form action="" method="post" onSubmit={handleSubmit}>
                        <div className='input-fields'>
                            <input type='text' placeholder='Firstname' required className='input-line full-width'
                            name='firstName' value={newUser.firstName} onChange={handleChange}
                            ></input>
                            <input type='text' placeholder='Surname' required className='input-line full-width'
                            name='surName' value={newUser.surName} onChange={handleChange}
                            ></input>
                            <input type='email' placeholder='Email' required className='input-line full-width'
                                name='email' value={newUser.email} onChange={handleChange}
                                ></input>
                            <input type='password' placeholder='Password' required className='input-line full-width'
                                name='password' value={newUser.password} onChange={handleChange}
                            ></input>

                        </div>
                        <div className='spacing'>or <span className='highlight' onClick={() => history.push('/')}>Login</span> if already created an account</div>
                        
                            <input className='ghost-round full-width' type="submit" value="Create Account" />
                        
                    </form>
                </div>
            </div>
        </div>

    )
}