import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { DataGrid } from '@material-ui/data-grid';
import Typography from '@material-ui/core/Typography';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';

import { EmojiObjects, FindReplace, Room } from '@material-ui/icons';
import { CssBaseline } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(10, 0, 6),
  },
  gridList: {
    width: '100%',
    height: '100%',
  },
  dataGrid: {
    height: 400,
    width: '100%'
  },
  sectionName: {
    marginTop: '1rem',
    padding: theme.spacing(1, 0, 1),
    width: '-webkit-fill-available',
    textAlign: 'center',
  },
  paper: {
    padding: '.5rem',
  },
  timeline: {
    maxWidth: '35rem',
  },
}));

const tileData = [
  {
    img: require('../images/tshirt.png'),
    title: 'tshirt',
    author: 'tshirt',
  },
  {
    img: require('../images/monitor2.png'),
    title: 'monitor2',
    author: 'monitor2',
  },
  {
    img: require('../images/book.png'),
    title: 'book',
    author: 'book',
  },
  {
    img: require('../images/can.png'),
    title: 'can',
    author: 'can',
  },
];

const columns = [
  { field: 'id', headerName: '#', width: 70 },
  { field: 'username', headerName: 'Username', width: 130 },
  { field: 'ecolevs', headerName: 'Ecolevs', width: 130 },
  {
    field: 'reusedItems',
    headerName: 'Reused Items',
    type: 'number',
    width: 130,
  },
];

const rows = [
  {
    id: 1, ecolevs: '10,985', username: 'Jon', reusedItems: 35,
  },
  {
    id: 2, ecolevs: '10,867', username: 'Cersei', reusedItems: 42,
  },
  {
    id: 3, ecolevs: '10,543', username: 'Jaime', reusedItems: 45,
  },
  {
    id: 4, ecolevs: '9,342', username: 'Arya', reusedItems: 16,
  },
  {
    id: 5, ecolevs: '8,978', username: 'Daenerys', reusedItems: 33,
  },
  {
    id: 6, ecolevs: '8,691', username: 'Ella', reusedItems: 150,
  },
  {
    id: 7, ecolevs: '6,419', username: 'Ferrara', reusedItems: 44,
  },
  {
    id: 8, ecolevs: '6,036', username: 'Rossini', reusedItems: 36,
  },
  {
    id: 9, ecolevs: '5,988', username: 'Harvey', reusedItems: 65,
  },
];

export default function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Typography variant="h4" component="h1" className={classes.sectionName}>
        My Impact
      </Typography>
      <Timeline className={classes.timeline} align="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <FindReplace color="#fff" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Reuse
              </Typography>
              <Typography>
                <b>21 items</b>
                {' reused'}
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined">
              <EmojiObjects color="secondary" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Reduce
              </Typography>
              <Typography>
                <b>Paper</b>
                : 1kg
              </Typography>
              <Typography>
                <b>Plastic</b>
                : 0kg
              </Typography>
              <Typography>
                <b>Glass</b>
                : 1kg
              </Typography>
              <Typography>
                <b>Electronics</b>
                : 3kg
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <Room color="#fff" />
            </TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Recycle
              </Typography>
              <Typography>
                <b>16 items</b>
                {' recycled'}
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined">
              <RepeatIcon color="secondary" />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Repeat
              </Typography>
              <Typography>Because green life is better!</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      <Typography variant="h4" component="h1" className={classes.sectionName}>
        Did you know...
      </Typography>
      <GridList cellHeight={160} className={classes.gridList} cols={1}>
        {tileData.map(tile =>
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        )}
      </GridList>
      <Typography variant="h4" component="h1" className={classes.sectionName}>
        Ranklist
      </Typography>
      <div className={classes.dataGrid}>
        <DataGrid
          hideFooterRowCount
          pageSize={5}
          hideFooterSelectedRowCount
          rows={rows}
          columns={columns}
        />
      </div>
    </div>
  );
}
