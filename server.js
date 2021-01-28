const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');

const db = require('./db');
const routes = require('./routes');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
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