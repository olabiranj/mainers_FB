import React from 'react';
import Container from '@material-ui/core/Container';
import Navbar from '../components/navbar';
import SinglePost from '../components/singlePost';
import Footer from '../components/footer';
import { authInitialState} from "../reducers/authReducer"; 
export default function Post() {
    const myStyle = {
        maxWidth: 600,
        margin: 'auto',
        marginTop: 20,
        marginBottom: 20,
    }
    return (
        <React.Fragment>
            {!authInitialState.isLoggedin ? 'Login to Continue' : <React.Fragment>
                <Navbar />
                <div style={myStyle}>
                    <Container>
                        <SinglePost />
                    </Container>
                </div>
                <Footer />
            </React.Fragment>}
        </React.Fragment>
    )
}