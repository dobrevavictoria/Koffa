import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getUserInfo } from '../../js/actions/index';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardActionArea from '@material-ui/core/CardActionArea';
import EcoIcon from '@material-ui/icons/Eco';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TopBar from '../TopBar';
import BottomBar from '../BottomBar';
import AddItemDialog from './AddItemDialog';

const mapStateToProps = state => {
  return {
    userInfo: state.userInfo,
  };
};

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: theme.palette.background.default,
  },
  buttonRoot: {
    position: 'sticky',
    bottom: theme.spacing(10),
    right: theme.spacing(2),
    float: 'right',
  },
  heroContent: {
    padding: theme.spacing(0, 0, 6),
  },
  cardGrid: {
    position: 'relative',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardroot: {
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    width: '450',
    height: '400',
    position: 'relative',
  },
  cardmedia: {
    paddingTop: '100%',
  },
  buttonGet: {
    margin: theme.spacing(1),
    position: 'absolute ',
    bottom: theme.spacing(1),
    right: theme.spacing(1),
    float: 'right',
  },
  imgStyle: {
    width: '100%',
    height: '400px'
  }
}));

function Reuse(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [ecoLevs, setEcoLevs] = React.useState(null);
  const [toDelete, setToDelete] = React.useState(null);
  const [availableEcoLevs, setAvailableEcoLevs] = React.useState(null);
  const [items, setItems] = React.useState([]);

  useEffect(() => {
    fetch('/api/reuse/items', { method: 'GET' })
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.error('GET items failed: ', err));
  });

  useEffect(() => {
    props.getUserInfo();
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleConfirm = (event) => {
    setOpen(false);
    document.getElementById('badgeLevsCount').getElementsByClassName('MuiBadge-badge')[0].innerText = availableEcoLevs - ecoLevs;
    setAvailableEcoLevs(availableEcoLevs - ecoLevs);

    toDelete.parentNode.removeChild(toDelete);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onClick = (event) => {
    const targetCard = event.target.parentNode.parentNode.parentNode;
    const ecoLevs = parseInt(targetCard.querySelectorAll('#price')[0].innerText);

    setEcoLevs(ecoLevs);
    setToDelete(targetCard);
    handleClickOpen();
  };

  return (
    <>
      <TopBar />
      <CssBaseline />
      <main className={classes.main}>
        <div className={classes.heroContent} />
        <Container className={classes.cardGrid}>
          <Grid container spacing={4}>
            {items.map(card => (
              <Grid item xs={12} sm={8} md={4}>
                <Card className={classes.cardroot}>
                  <CardActionArea>
                    <img className={classes.imgStyle}
                      src={`data:image/png;base64,${Buffer.from(card.imageBuffer.data).toString('base64')}`}></img>
                    <CardHeader
                      action={(
                        <IconButton aria-label="settings">
                          <MoreVertIcon />
                        </IconButton>
                      )}
                      title={`${card.name}`}
                      subheader={`${card.subheader}`}
                    />
                    <CardContent>
                      <Typography variant="body2" color="textSecondary" component="p">
                      </Typography>

                    </CardContent>
                  </CardActionArea>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                    <IconButton aria-label="price">
                      <EcoIcon />
                      <Typography id="price" variant="body2" color="textSecondary" component="p">
                        {`${card.price}`}
                      </Typography>
                    </IconButton>
                    <Button disabled={props.userInfo.ecoLevs < card.price} onClick={onClick} variant="contained" size="medium" color="primary" className={classes.buttonGet}>
                      Get it
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <div className={classes.buttonRoot}>
          <AddItemDialog />
        </div>
      </main>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Confirmation</DialogTitle>
        <DialogContent dividers>
          <DialogContentText>
            <Typography style={{ display: 'inline-flex' }}>
              {'Get it for '}{ecoLevs}
              <EcoIcon />
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirm} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
      <BottomBar />
    </>
  );
}

export default connect(mapStateToProps, { getUserInfo })(Reuse);