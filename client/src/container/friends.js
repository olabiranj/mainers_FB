import React from 'react';
import Container from '@material-ui/core/Container';
import Navbar from "../components/navbar";
import ProfileHeader from "../components/profileHeader";
import FriendList from '../components/friendList';
import Footer from '../components/footer';
export default function Friends() {

    return(
        <React.Fragment>
            <Navbar />
            <Container>
                <ProfileHeader />
                <FriendList />
            </Container>
            <Footer />
        </React.Fragment>
    )
}