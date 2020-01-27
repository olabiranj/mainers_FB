import React from 'react';
import Container from '@material-ui/core/Container';
import Navbar from "../components/navbar";
import MesaageBody from "../components/messageBody";
import Footer from '../components/footer';
import { authInitialState } from "../reducers/authReducer"; 

export default function Message() {
    const myStyle = {
        maxWidth: 600,
        margin: 'auto',
        marginTop: 20,
    }

    return (
        <React.Fragment>
            {!authInitialState.isLoggedin ? 'Login to continue'
             : <React.Fragment>
                <Navbar />
                <Container>
                    <div style={myStyle}>
                        <MesaageBody />
                    </div>
                </Container>
                <Footer/>
            </React.Fragment>}
        </React.Fragment>
    )
}