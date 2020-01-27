import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function Footer() {

    return(
        <Container style={{padding: 20,}}>
            <Typography variant='subtitle1' align='center' color='primary'>
                All rights reserved. MAINJOE {new Date().getFullYear()}
            </Typography>
        </Container>
    )
}