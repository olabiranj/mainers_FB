import React, { useState, useReducer, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { postInitialState, postReducer } from "../reducers/postReducer"; 
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ForumIcon from '@material-ui/icons/Forum';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import nodeId from 'node-id';




const ITEM_HEIGHT = 48;
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        '& > * + *': {
            margin: 'auto',
        },
        padding: 'auto'
    },
    card: {
        marginTop: 20,
    },
    media: {
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor:' #0066ff',
    },
}));

export default function Posts() {
    const history = useHistory();
    const [posts, dispatchPost] = useReducer(postReducer, postInitialState); //posts and dispatch are used in the useReducer hooks
    const [page, setPage] = useState(15);
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    window.onscroll =() => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        
        if (
            clientHeight + scrollTop === scrollHeight
        ) {
            dispatchPost({ type: 'LOADING'})
            fetch(`https://jsonplaceholder.typicode.com/posts?_start=${page}&_limit=15`)
                .then(response => response.json())
                .then(payload => {
                    dispatchPost({ type: 'ADD', payload })
                })
                .then(() => setPage(page+5))
        }
    };
    useEffect(() => {
        dispatchPost({ type: 'LOADING'}) // I can dispatch actions on posts from any component
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=15')
            .then(response => response.json())
            .then(payload => {
                dispatchPost({ type: 'GET', payload }) // I can dispatch actions on posts from any component
            })
    }, []);

    return(
        <div>
            {posts.posts.map((post) => ( // I can also access posts from any component
                <Card className={classes.card} key={nodeId()} >
            <CardHeader 
                avatar={
                            <Avatar alt={post.title} src={`https://randomuser.me/api/portraits/thumb/men/${Math.floor(Math.random() * 100) + 1}.jpg`} className={classes.avatar}/>
                }
                action={
                    <React.Fragment>
                        <IconButton
                            aria-label="more"
                            aria-controls="long-menu"
                            aria-haspopup="true"
                            onClick={handleClick}>                    
                        <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="long-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={open}
                            onClose={handleClose}
                            PaperProps={{
                                style: {
                                    maxHeight: ITEM_HEIGHT * 4.5,
                                    width: 200,
                                },
                            }}
                        >  
                        <MenuItem key={nodeId()} onClick={handleClose}>
                            Hide posts from Olabiran
                        </MenuItem>
                        <MenuItem key={nodeId()} onClick={handleClose}>
                            Copy Link
                        </MenuItem>
                        <MenuItem key={nodeId()} onClick={handleClose}>
                            Save Post
                        </MenuItem>
                        
                        </Menu>
                    </React.Fragment>
                }
                title={post.name}
                subheader={post.date}
            />
            <CardMedia onClick={() => history.push('/post')}
                className={classes.media}
                        image={`https://i.picsum.photos/id/${Math.floor(Math.random() * 100) + 1}/300/200.jpg`}
                title={post.name}
            />
            <CardContent onClick={() => history.push('/post')}>
                <Typography variant="body2" color="textSecondary" component="p">
                    {post.body}
                   
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <ThumbUpIcon color='primary' />
                </IconButton>
                <IconButton aria-label="add to favorites">
                    <ForumIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
            
            ))}
            <div className={posts.isLoading ? 'show' : 'loading'}>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
            </div>
            
        </div>
    )
}