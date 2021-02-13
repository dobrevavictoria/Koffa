import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import { makeStyles } from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CropFreeIcon from '@material-ui/icons/CropFree';
import EcoIcon from '@material-ui/icons/Eco';
import QrReader from 'react-qr-reader';
import AddIcon from '@material-ui/icons/Add';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './AddItem.css';

const useStyles = makeStyles((theme) => ({
    formControl: {
        // float:'left',
        margin: theme.spacing(1),
        minWidth: '70%',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function AddItemDialog() {
        const classes = useStyles();
        const txtFieldstyle = {
            width: '70%',
            height: 'auto',
            //    float: 'left',
            margin: '10px'

        };
        const [category, setCategory] = React.useState('');

          const handleChange = (event) => {
            setCategory(event.target.value);
          };

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
                <Fab
                    onClick={handleClickOpen}
                    color="primary" size="large" aria-label="add">
                    <AddIcon />
                </Fab>

                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth={true} maxWidth={'md'}>
                    <DialogTitle id="form-dialog-title">{!result ? "Add Item" : "Success"}</DialogTitle>
                    <DialogContent>
                        <div class="wrapper">
                            <div class='row'>
                                <div class='column'>
                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <InputLabel id="category-label">Category</InputLabel>
                                        <Select
                                            labelId="category-label"
                                            id="category"
                                            value={category}
                                            onChange={handleChange}
                                            label="Category"
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={'Electronics'}>Electronics</MenuItem>
                                            <MenuItem value={'Books-Hobbies'}>Books &amp; Hobbies</MenuItem>
                                            <MenuItem value={'Home'}>Home</MenuItem>
                                            <MenuItem value={'Fashion'}>Fashion</MenuItem>
                                            <MenuItem value={'Other'}>Other</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <TextField
                                        autoFocus
                                        id="product-name"
                                        placeholder="Product name"
                                        margin="dense"
                                        label="Product name"
                                        type="text"
                                        fullWidth
                                        style={txtFieldstyle}
                                    />

                                    <TextField
                                        id="product-city"
                                        placeholder="City"
                                        margin="dense"
                                        label="City"
                                        type="text"
                                        fullWidth
                                        style={txtFieldstyle}
                                    />

                                    <TextField
                                        id="product-price"
                                        placeholder="Price"
                                        margin="dense"
                                        label="Price"
                                        type="number"
                                        fullWidth
                                        style={txtFieldstyle}
                                    />
                                </div>
                                <div class="column">
                                    <div id="upload">
                                        <label for="dataFile" class="custom-upload" id="uploadLabel"><i class="fa fa-cloud-upload" aria-hidden="true"></i>Upload</label>
                                        <input type="file" id="dataFile" name="dataFile" accept="image/*" required=""  /> 
                                        {/* onChange={this.handleChange} */}
                                        {/* <img src={this.state.file} /> */}
                                        <p id="upload-error"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 
<form onSubmit={handleSubmit}>
    </form>
   */}

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleConfirm} color="primary">
                            Save
          </Button>
                        <Button onClick={handleClose} color="primary">
                            Cancel
          </Button>
                    </DialogActions>
                </Dialog>
            </div >
        )
    }
