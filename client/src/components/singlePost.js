import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const messages = [
    {
        id: 1,
        primary: 'Yemitan Oluwatobi Elizabeth',
        secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
        person: '/static/images/avatar/5.jpg',
    },
    {
        id: 2,
        primary: 'Sherifat Odunewu Olatunde',
        secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
        person: '/static/images/avatar/1.jpg',
    },
    {
        id: 3,
        primary: 'Owoeye Eunice',
        secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
        person: '/static/images/avatar/2.jpg',
    },
    {
        id: 4,
        primary: 'Esupofo Doctor D',
        secondary: 'I have the tickets to the ReactConf for this year.',
        person: '/static/images/avatar/3.jpg',
    },
    {
        id: 5,
        primary: "Oladotun Kolade Samuel",
        secondary: 'My appointment for the doctor was rescheduled for next Saturday.',
        person: '/static/images/avatar/4.jpg',
    },
];
const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 600,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    text: {
        padding: theme.spacing(2, 2, 0),
    },
    list: {
        marginBottom: theme.spacing(2),
    },
    subheader: {
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SinglePost() {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Olabiran Joshua Olaiya"
                subheader="September 14, 2016"
            />
            <CardMedia
                className={classes.media}
                image="/img/IMG-20190728-WA0009.jpg"
                title="Olabiran Joshua"
            />
            <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                    minutes.
          </Typography>
                <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                    browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                    and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                    pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
                <Typography paragraph>
                    Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                    without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                    medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                    again without stirring, until mussels have opened and rice is just tender, 5 to 7
                    minutes more. (Discard any mussels that don’t open.)
          </Typography>
                <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <ThumbUpIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
            <Typography className={classes.text} variant="h5" gutterBottom>
                Comments
            </Typography>
            <Container>
                <form action="">
                    <Grid container>
                        <Grid item xs={11}>
                    <TextField
                        id="standard-required"
                        placeholder='Input your comment'
                        multiline
                        rowsMax="5"
                        fullWidth
                        />
                        </Grid>
                        <Grid item xs={1}>
                            <IconButton aria-label="send" >
                                <SendIcon color='primary' />
                            </IconButton>
                        </Grid>
                    </Grid>
                </form>
            </Container>
            <List className={classes.list}>
                {messages.map(({ id, primary, secondary, person }) => (
                    <React.Fragment key={id}>
                        <ListItem button>
                            <ListItemAvatar>
                                <Avatar alt={primary} src={person} />
                            </ListItemAvatar>
                            <ListItemText primary={primary} secondary={secondary} />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </React.Fragment>
                ))}
            </List>
        </Card>
    );
}