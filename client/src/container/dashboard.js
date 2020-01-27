import React from 'react';
import { Link } from "react-router-dom";
import Container from '@material-ui/core/Container';
import Navbar from '../components/navbar';
import InputPost from '../components/inputPost';
import Posts from '../components/posts';
import { authInitialState} from '../reducers/authReducer';
export default function Dashboard() {
    const myStyle = {
        maxWidth: 400,
        margin: 'auto',
        marginTop: 20,
    }
    return (
        <React.Fragment>
            {!authInitialState.isLoggedin ? <Link to='/'>Login to Continue</Link> : <React.Fragment>
                <Navbar />
                <div style={myStyle}>
                    <Container>
                        <InputPost />
                        <Posts />
                    </Container>
                </div>
            </React.Fragment>}
        </React.Fragment>
    )
}