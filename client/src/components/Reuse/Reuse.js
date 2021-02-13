import React, { useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TopBar from '../TopBar';
import BottomBar from '../BottomBar';
import AddItemDialog from '../AddItemDialog';
import ScannerDialog from '../ScannerDialog';

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
}));

const cards = [
  {
    productTitle: 'Night Lamp', subheader: 'Plovdiv, 23 Oct 2020', img: require('../../images/lamp.jpg'), description: '', ecoprice: '20',
  },
  {
    productTitle: 'Home Decoration', subheader: 'Burgas, 23 Oct 2020', img: require('../../images/homedecor1.jpg'), description: '', ecoprice: '5',
  },
  {
    productTitle: 'Mini Dress by Lola Dre', subheader: 'Varna, 24 Oct 2020', img: require('../../images/dress.jpg'), description: '', ecoprice: '20',
  },
  {
    productTitle: 'Kitchen Table', subheader: 'Sofia, 23 Oct 2020', img: require('../../images/table.jpg'), description: '', ecoprice: '150',
  },
  {
    productTitle: 'Men Watch', subheader: 'Plovdiv, 23 Oct 2020', img: require('../../images/watch.jpg'), description: '', ecoprice: '55',
  },
  {
    productTitle: '"The Long Walk" by St. King', subheader: 'Sofia, 24 Oct 2020', img: require('../../images/book.jfif'), description: '', ecoprice: '10',
  },
  {
    productTitle: 'X13 Yoga (13”) Intel', subheader: 'Pernik, 23 Oct 2020', img: require('../../images/laptop.jfif'), description: '', ecoprice: '700',
  },
];

export default function Reuse() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [ecoLevs, setEcoLevs] = React.useState(null);
  const [toDelete, setToDelete] = React.useState(null);
  const [availableEcoLevs, setAvailableEcoLevs] = React.useState(null);

  useEffect(() => {
    setAvailableEcoLevs(parseInt(document.getElementById('badgeLevsCount').getElementsByClassName('MuiBadge-badge')[0].innerText));
  }, []);

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
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={8} md={4}>
                <Card className={classes.cardroot}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.cardmedia}
                      image={`${card.img}`}
                      title={`${card.description}`}
                    />
                    <CardHeader
                      action={(
                        <IconButton aria-label="settings">
                          <MoreVertIcon />
                        </IconButton>
                      )}
                      title={`${card.productTitle}`}
                      subheader={`${card.subheader}`}
                    />
                    <CardContent>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {`${card.description}`}
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
                        {`${card.ecoprice}`}
                      </Typography>
                    </IconButton>
                    <Button disabled={availableEcoLevs < card.ecoprice} onClick={onClick} variant="contained" size="medium" color="primary" className={classes.buttonGet}>
                      Get it
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        <div className={classes.buttonRoot}>
          <AddItemDialog/>
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
