import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Tooltip from '@material-ui/core/Tooltip';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

export default function ProfileHeader() {
    const style = {
        pics: {
            height: 'auto',
            width: '70%',
            borderRadius: '50%',
        },
        friends: {
            marginTop: 50,
            padding: 20
        }
    }
    return(
        <div>
            <Paper elevation={4}>
                <div className='jumbotron'>
                    <Grid container>
                        <Grid item xs={3}>
                            <img src="/img/jj.jpg" alt="" srcset="" style={style.pics} />
                        </Grid>
                        <Grid item xs={9}>
                            <Typography variant='h3' align='center'>
                                Olabiran Joshua
                            </Typography>
                            <Fab style={{ float: 'right' }} color="secondary" aria-label="edit">
                                <EditIcon />
                            </Fab>
                        </Grid>
                    </Grid>
                </div>
            </Paper>
            <Paper elevation={0} style={style.friends}>
                <Typography variant='h5'>Friends(3,406)</Typography>
                <AvatarGroup>
                    <Avatar alt="Remy Sharp" src="/img/IMG_0876.jpg" />
                    <Avatar alt="Travis Howard" src="/img/jj.jpg" />
                    <Avatar alt="Cindy Baker" src="/img/IMG-20190728-WA0009.jpg" />
                    <Avatar alt="Remy Sharp" src="/img/IMG_0876.jpg" />
                    <Avatar alt="Travis Howard" src="/img/jj.jpg" />
                    <Avatar alt="Cindy Baker" src="/img/IMG-20190728-WA0009.jpg" />
                    <Tooltip title="Foo • Bar • Baz">
                        <Avatar>+3K</Avatar>
                    </Tooltip>
                </AvatarGroup>
            </Paper>
        </div>
    )
}