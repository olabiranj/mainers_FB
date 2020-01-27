import React, {useState, useReducer} from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { authInitialState, authReducer } from "../reducers/authReducer"; 

export default function Index() {
    const history = useHistory();
    const MySwal = withReactContent(Swal);
    const [auth, dispatchAuth] = useReducer(authReducer, authInitialState);
    const [user, changeUser] = useState({
        email: '',
        password: ''
    });

    const handleChange = e => {
        changeUser({
            ...user, [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (event) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        // Request body
        const body = JSON.stringify(user);

        axios
            .post('/api/users/login', body, config)
            .then(res => {
                dispatchAuth({
                    type: 'login_success',
                    payload: res.data
                })
                changeUser({
                    email: '',
                    password: ''
                });
                history.push('/dashboard');
                console.log(authInitialState)

            }
            )
            .catch(err => {
                event.preventDefault();
                MySwal.fire({
                    icon: 'error',
                    text: err.response.data.msg,

                });
                changeUser({
                    email: '',
                    password: ''
                });
                console.log(err)
                dispatchAuth({
                    type: 'login_fail'
                });
            });
        event.preventDefault();
    }
    return(
        <div className='loginContainer'>
            <div className='window '>
                <div className='overlay'></div>
                <div className='content'>
                    <form action="" onSubmit={handleSubmit}>
                        <div className='welcome'>Hello Mainers!</div>
                        <div className='subtitle'>What are you up to today? Login to let's know.</div>
                        <div className='input-fields'>
                            <input type='email' placeholder='Email' required className='input-line full-width'
                                name='email'
                                value={user.email}
                                onChange={handleChange}></input>
                            <input type='password' placeholder='Password' required className='input-line full-width'
                                name='password'
                                value={user.password}
                                onChange={handleChange}></input>

                        </div>
                        <div ><span className='highlight' onClick={() => history.push('/fogortpassword')}>Fogort Password?</span></div>
                        <div className='spacing'>or <span className='highlight' onClick={() => history.push('/signup')}>Sign Up</span> if you're a new user</div>
                        <div>
                            <input className='ghost-round full-width' type="submit" value="Login"  />
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    )
}