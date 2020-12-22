import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CropFreeIcon from '@material-ui/icons/CropFree';
import EcoIcon from '@material-ui/icons/Eco';
import QrReader from 'react-qr-reader';

export default function ScannerDialog() {
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
    setResult(null);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    setOpen(false);
    const badge = document.getElementById("badgeLevsCount").getElementsByClassName("MuiBadge-badge")[0];
    badge.innerText = parseInt(badge.innerText) + parseInt(result);
  };

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  }

  const handleError = err => {
    console.error(err);
  }

  return (
    <div>
      <Button startIcon={<CropFreeIcon />}
        color="inherit"
        onClick={handleClickOpen}
      >
        SCAN
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{!result ? "Scan" : "Success"}</DialogTitle>
        <DialogContent dividers>
          {result ?
            <DialogContentText>
              <Typography style={{ display: "inline-flex" }}>You will get {result} <EcoIcon /></Typography>
            </DialogContentText> :
            <div>
              <DialogContentText>
                <Alert variant="outlined" severity="info">Service worker will give you the QR code to scan at the recycling point.</Alert>
              </DialogContentText>
              <QrReader
                delay={300}
                onError={handleError}
                onScan={handleScan}
              />
            </div>
          }
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          {result ? <Button onClick={handleConfirm} color="primary">
            Confirm
          </Button> : null}
        </DialogActions>
      </Dialog>
    </div >
  )
}