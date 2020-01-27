import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },

}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FindFriends() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase onClick={handleClickOpen}
                placeholder="Find Friends"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
            />
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Find Friends..."
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                        
                    </Toolbar>
                </AppBar>
                <List>
                    <ListItem button>
                        <Avatar alt="O" src="/img/IMG_0876.jpg" />
                        <ListItemText primary="Olabiran Joshua Olaiya" secondary="Lagos Sate University, Ojo" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <Avatar alt="O" src="/static/images/avatar/1.jpg" />
                        <ListItemText primary="Odulaja Fisayo Imoleayo" secondary="F.H.S" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <Avatar alt="O" src="/static/images/avatar/1.jpg" />
                        <ListItemText primary="Olusi Oluwaseyi Lateef" secondary="Nigerian Navy" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <Avatar alt="Oso Margret" src="/static/images/avatar/1.jpg" />
                        <ListItemText primary="Oso Margret Oluwatosin" secondary="Tosmag Fashion Plaza" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <Avatar alt="Oloyo Ifedayo" src="/static/images/avatar/1.jpg" />
                        <ListItemText primary="Oloyo Ifedayo Pamilerin" secondary="Nigerian Navy" />
                    </ListItem>
                </List>
            </Dialog>
        </div>
    )
}