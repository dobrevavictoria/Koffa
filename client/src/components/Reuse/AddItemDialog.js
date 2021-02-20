import React, { useState } from 'react';
import { withRouter } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import { makeStyles } from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: '70%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  input: {
    display: 'none'
  },
  image: {
    height: 'auto',
    width: '70%',
    margin: '20px'
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '100%',
    flex: '1',
    alignItems: 'center',
    justifyContent: 'center'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%'
  },
  wrapper: {
    margin: '10px'
  },
  uploadButton: {
    margin: '10px'
  }

}));

function AddItemDialog() {
  const classes = useStyles();

  const txtFieldstyle = {
    width: '70%',
    height: 'auto',
    margin: '10px'
  };

  const [category, setCategory] = React.useState('');
  const [image, setUploadedImage] = React.useState(null);
  const [name, setProductName] = React.useState('');
  const [city, setProductCity] = React.useState('');
  const [price, setProductPrice] = React.useState('');
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState(null);
  var [imageBase64, setImageBase64] = React.useState(null);

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => {
        let encoded = reader.result.toString().replace(/^data:(.*,)?/, '');
        if ((encoded.length % 4) > 0) {
          encoded += '='.repeat(4 - (encoded.length % 4));
        }
        resolve(encoded);
      };
      reader.onerror = error => reject(error);
    });
  }

  const handleImageUpload = async function (event) {
    setUploadedImage(URL.createObjectURL(event.target.files[0]));
    
    var value = await getBase64(event.target.files[0]);
    setImageBase64(value);
    imageBase64 = value;
  }

  const onCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const onProductNameChange = (event) => {
    setProductName(event.target.value);
  }

  const onProductCityChange = (event) => {
    setProductCity(event.target.value);
  }

  const onProductPriceChange = (event) => {
    setProductPrice(event.target.value);
  }

  const handleClickOpen = () => {
    setOpen(true);
    setResult(null);
  };

  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const handleConfirm = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    data.append("imageBase64", imageBase64);

    fetch('/api/reuse/item', {
      method: 'POST',
      body: data
    })
      .then(res => {
        if (res.status === 200) {
          alert('Successfully added to DB');
        } else {
          throw new Error(res.error);
        }
      })
      .catch(err => console.error(err));

    reset();
    setOpen(false);
  };

  const reset = () => {
    setCategory('');
    setUploadedImage(null);
    setProductName('');
    setProductCity('');
    setProductPrice('');
  };

  return (
    <div>
      <Fab
        onClick={handleClickOpen}
        color="primary" size="large" aria-label="add">
        <AddIcon />
      </Fab>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth={true} maxWidth={'md'}>
        <form onSubmit={handleConfirm}>
          <DialogTitle id="form-dialog-title">{!result ? "Add Item" : "Success"}</DialogTitle>
          <DialogContent>
            <div className={classes.wrapper}>
              <div className={classes.column}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="category-label">Category</InputLabel>
                  <Select
                    labelId="category-label"
                    id="category"
                    name="category"
                    value={category}
                    onChange={onCategoryChange}
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
                  name="name"
                  placeholder="Product name"
                  margin="dense"
                  label="Product name"
                  value={name}
                  onChange={onProductNameChange}
                  type="text"
                  fullWidth
                  style={txtFieldstyle}
                />

                <TextField
                  id="product-city"
                  name="city"
                  placeholder="City"
                  margin="dense"
                  label="City"
                  value={city}
                  onChange={onProductCityChange}
                  type="text"
                  fullWidth
                  style={txtFieldstyle}
                />

                <TextField
                  id="product-price"
                  name="price"
                  placeholder="Price"
                  margin="dense"
                  label="Price"
                  value={price}
                  onChange={onProductPriceChange}
                  type="number"
                  fullWidth
                  style={txtFieldstyle}
                />
              </div>
              <div className={classes.column}>
                <input type="file" id="image-file" name="image" accept="image/*" required="" className={classes.input} onChange={handleImageUpload} />
                <label htmlFor="image-file">
                  <Button variant="contained" color="primary" component="div" className={classes.uploadButton}>
                    Upload Image
                                        </Button>
                </label>
                <img alt="Upload" src={image} className={classes.image} />
                <p id="upload-error"></p>
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button color="primary" type="submit">
              Save
          </Button>
            <Button onClick={handleClose} color="primary">
              Cancel
          </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div >
  )
}

export default withRouter(AddItemDialog);