import React from 'react';
import { useHistory } from "react-router-dom";

export default function FogortPassword() {
    const history = useHistory()
    return (
        <div className='loginContainer'>
            <div className='window '>
                <div className='overlay'></div>
                <div className='content'>
                    <div className='welcome'>Hey Mainers!</div>
                    <div className='subtitle'>Input your mail, we'll recover your password.</div>
                    <div className='input-fields'>
                        <input type='email' placeholder='Email' className='input-line full-width'></input>
                    </div>
                    <div class='spacing'>Back to <span class='highlight' onClick={() => history.push('/')}>Login</span></div>
                    <div>
                        <input className='ghost-round full-width' type="submit" value="Recover Password" />
                    </div>
                </div>
            </div>
        </div>

    )
}