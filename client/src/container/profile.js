import React from 'react';
import Container from '@material-ui/core/Container';
import Navbar from "../components/navbar";
import ProfileHeader from "../components/profileHeader";
import Posts from '../components/posts';

export default function Proflie() {
    const myStyle = {
        maxWidth: 600,
        margin: 'auto',
        marginTop: 20,
    }

    return (
        <React.Fragment>
            <Navbar />
            <Container>
                <ProfileHeader />
                <div style={myStyle}>
                    <Posts />
                </div>
            </Container>
        </React.Fragment>
    )
}