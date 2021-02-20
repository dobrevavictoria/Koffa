const express = require('express');
const cookieParser = require('cookie-parser');
const formidable = require('express-formidable');
const path = require('path');
const db = require('./db');
const routes = require('./routes');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(formidable());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));

routes.connect(app);

db.connect()
  .then(() => {
    app.listen(PORT, function () {
      console.log(`Server is listening on :${PORT}`);
    })
  })
  .catch(err => console.log(err));