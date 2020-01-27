import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 700,
        margin: 'auto',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));


const tileData = [
  {
    img: '/img/IMG_0876.jpg',
    title: 'Olabiran Joshua Olaiya',
    work: 'Lagos Sate University, Ojo',
  },
  {
      img: '/img/IMG_0876.jpg',
      title: 'Odulaja Fisayo Imoleayo',
      work: 'F.H.S', 
  },
  {
      img: '/img/IMG_0876.jpg',
      title: 'Olusi Oluwaseyi Lateef',
      work: 'Nigerian Navy', 
  },
  {
      img: '/img/IMG_0876.jpg',
      title: 'Oloyo Ifedayo Pamilerin',
      work: 'Nigerian Navy', 
  },
  {
    img: '/img/IMG_0876.jpg',
    title: 'Olabiran Joshua Olaiya',
    work: 'Lagos Sate University, Ojo',
  },
  {
      img: '/img/IMG_0876.jpg',
      title: 'Odulaja Fisayo Imoleayo',
      work: 'F.H.S', 
  },
  {
      img: '/img/IMG_0876.jpg',
      title: 'Olusi Oluwaseyi Lateef',
      work: 'Nigerian Navy', 
  },
  {
      img: '/img/IMG_0876.jpg',
      title: 'Oloyo Ifedayo Pamilerin',
      work: 'Nigerian Navy', 
  },
    {
        img: '/img/IMG_0876.jpg',
        title: 'Olabiran Joshua Olaiya',
        work: 'Lagos Sate University, Ojo',
    },
    {
        img: '/img/IMG_0876.jpg',
        title: 'Odulaja Fisayo Imoleayo',
        work: 'F.H.S',
    },
    {
        img: '/img/IMG_0876.jpg',
        title: 'Olusi Oluwaseyi Lateef',
        work: 'Nigerian Navy',
    },
    {
        img: '/img/IMG_0876.jpg',
        title: 'Oloyo Ifedayo Pamilerin',
        work: 'Nigerian Navy',
    },
    {
        img: '/img/IMG_0876.jpg',
        title: 'Olabiran Joshua Olaiya',
        work: 'Lagos Sate University, Ojo',
    },
    {
        img: '/img/IMG_0876.jpg',
        title: 'Odulaja Fisayo Imoleayo',
        work: 'F.H.S',
    },
    {
        img: '/img/IMG_0876.jpg',
        title: 'Olusi Oluwaseyi Lateef',
        work: 'Nigerian Navy',
    },
    {
        img: '/img/IMG_0876.jpg',
        title: 'Oloyo Ifedayo Pamilerin',
        work: 'Nigerian Navy',
    },
];
 
export default function FriendList() {
    const classes = useStyles();
    return(
        
            <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList} cols={4}>
                {tileData.map(tile => (
                    <GridListTile key={tile.img}>
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            subtitle={<span>{tile.work}</span>}
                            
                        />
                    </GridListTile>
                ))}
            </GridList>
            </div>
        
    )
}