import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles'; 
import Paper from '@material-ui/core/Paper';
import { authInitialState } from "../reducers/authReducer"; 
import { inherits } from 'util';

const StyledBadge = withStyles(theme => ({
    badge: {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: '$ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}))(Badge);


export default function InputPost() {
    const [newPost, setNewPost] = useState({
        post: '',
        postBy: `${authInitialState.user.firstName} ${authInitialState.user.surName}`,
        postMail: `${authInitialState.user.email}`
    });
    const handleChange = e => {
        setNewPost({
            ...newPost, [e.target.name]: e.target.value
        });
    }
    const handleSubmit = event => {
        event.preventDefault();
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        // Request body
        const body = JSON.stringify(newPost);
        console.log(newPost);
        console.log(body);
    }
    const sendButton = {
       borderRadius: '50%',
       background: 'inherit',
       border: 'none'
    }

    return(
        <Paper  style={{padding:14}}>
            <form action="" onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={2}>
                    <StyledBadge
                        overlap="circle"
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        variant="dot"
                    >
                        <Avatar alt={authInitialState.user.firstName} src="/img/IMG_876.jpg" />
                    </StyledBadge>
                </Grid>
                
                    <Grid item xs={7} >
                        <TextField
                            id="outlined-multiline-flexible"
                            label="What's on your mind?"
                            multiline
                            fullWidth
                            rowsMax="5"
                            name='post'
                            value={newPost.post}
                            onChange={handleChange}

                            style={{ marginLeft: 1 }}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <input type="file" name="file" id="file" className='inputfile' />
                        <label htmlFor='file'>
                            <PhotoCameraIcon fontSize='large' color="action" />
                        </label>
                    </Grid>
                    <Grid item xs={1}>
                        <button style={sendButton} type="submit">
                            <IconButton aria-label="send">
                                <SendIcon color='primary' />
                            </IconButton>
                        </button>
                        
                    </Grid>
            </Grid>
            </form>
        </Paper>
        
    )
}